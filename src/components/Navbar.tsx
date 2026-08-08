'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
            <Link href="/" className="logo">
                <img src={scrolled ? "/assets/logo.png" : "/assets/logo_1.png"} alt="Logo Química Total" className="logo-icon" width="65" height="86" />
                <div className="logo-text">
                    <h1>QUÍMICA<br/>TOTAL</h1>
                    <span>FUNDAMENTOS DA MATÉRIA. CIÊNCIA PURA.</span>
                </div>
            </Link>

            <nav className="nav-links">
                <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                <Link href="/materias" className={pathname.startsWith('/materias') ? 'active' : ''}>Matérias</Link>
                <Link href="/calculadoras" className={pathname === '/calculadoras' ? 'active' : ''}>Calculadoras</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Mais</Link>
            </nav>

            <Link href="#" className="btn btn-outline">Aprenda Agora</Link>
        </div>
    </header>
  );
}
