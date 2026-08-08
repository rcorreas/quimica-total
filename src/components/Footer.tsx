import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container footer-container">
            <div className="copyright">© 2024 Química Total</div>
            <div className="footer-links">
                <Link href="#">Contato</Link>
                <Link href="#">Sobre Nós</Link>
                <Link href="#">Termos de Uso</Link>
                <Link href="#">Política de Privacidade</Link>
            </div>
        </div>
    </footer>
  );
}
