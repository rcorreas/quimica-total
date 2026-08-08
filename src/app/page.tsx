import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-content">
        <div className="container">
            <section className="hero">
                <div className="hero-image">
                    <img src="/assets/hero_image.png" alt="Ilustração Química" />
                </div>
                <div className="hero-text">
                    <h2>BEM-VINDO AO PORTAL QUÍMICA TOTAL</h2>
                    <p>Lareei operth dolor huramai un chesucetic ackosegiit, engin soli adstnat tertunum
                        atasirveretldic.</p>
                    <Link href="/materias" className="btn btn-primary">Explorar Matérias</Link>
                </div>
            </section>

            <section className="modules">
                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                            <path d="M13 8h4M13 12h4M13 16h4"></path>
                        </svg>
                    </div>
                    <h3>Módulo 1: Elementos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiesmed tempor incididunt.</p>
                    <Link href="/materias" className="btn btn-primary btn-sm">Acessar Módulo</Link>
                </div>

                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                        </svg>
                    </div>
                    <h3>Módulo 2: Orgânica</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiesmed tempor incididunt.</p>
                    <Link href="/materias" className="btn btn-primary btn-sm">Acessar Módulo</Link>
                </div>

                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 2v7.31"></path>
                            <path d="M14 9.3V1.99"></path>
                            <path d="M8.5 2h7"></path>
                            <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                            <path d="M5.52 16h12.96"></path>
                        </svg>
                    </div>
                    <h3>Módulo 3: Reações</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiesmed tempor incididunt.</p>
                    <Link href="/materias" className="btn btn-primary btn-sm">Acessar Módulo</Link>
                </div>
            </section>
        </div>
    </main>
  );
}
