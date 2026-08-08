import Link from 'next/link';

export default function Materias() {
  return (
    <main className="main-content">
        <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px', color: 'var(--primary-color)' }}>Nossas Matérias</h2>
            
            <section className="modules" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', justifyContent: 'center' }}>
                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                    </div>
                    <h3>Introdução à Química</h3>
                    <p>Conceitos fundamentais e base essencial para iniciar sua jornada na química.</p>
                    <Link href="/materias/introducao-quimica" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>
                
                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </div>
                    <h3>Química Inorgânica</h3>
                    <p>Estudo detalhado dos elementos químicos, metais, ametais e compostos inorgânicos.</p>
                    <Link href="/materias/quimica-inorganica" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>

                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                    </div>
                    <h3>Química Orgânica</h3>
                    <p>Estudo dos compostos de carbono, suas estruturas, propriedades e reações.</p>
                    <Link href="/materias/quimica-organica" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>

                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                    </div>
                    <h3>Físico-Química</h3>
                    <p>Princípios físicos que regem as propriedades e o comportamento dos sistemas químicos.</p>
                    <Link href="/materias/fisico-quimica" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>

                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 2v7.31"></path>
                            <path d="M14 9.3V1.99"></path>
                            <path d="M8.5 2h7"></path>
                            <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                            <path d="M5.52 16h12.96"></path>
                        </svg>
                    </div>
                    <h3>Laboratório</h3>
                    <p>Práticas, experimentos analíticos, vidrarias e normas de segurança.</p>
                    <Link href="/materias/laboratorio" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>
            </section>
        </div>
    </main>
  );
}
