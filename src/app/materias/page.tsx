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
                    <p>Tabela periódica, ligações químicas, funções inorgânicas e compostos de coordenação.</p>
                    <Link href="/materias/quimica-inorganica" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>

                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                        </svg>
                    </div>
                    <h3>Química Orgânica</h3>
                    <p>Estudo dos compostos de carbono, hidrocarbonetos, funções orgânicas e reações de síntese.</p>
                    <Link href="/materias/quimica-organica" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>
                
                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                    </div>
                    <h3>Físico-Química</h3>
                    <p>Termodinâmica, cinética química, eletroquímica e equilíbrio de reações.</p>
                    <Link href="/materias/fisico-quimica" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>

                <div className="card">
                    <div className="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 2v20"></path>
                            <path d="M17 2v20"></path>
                            <path d="M22 6H2"></path>
                            <path d="M22 18H2"></path>
                            <path d="m7 14 5-5 5 5"></path>
                        </svg>
                    </div>
                    <h3>Laboratório</h3>
                    <p>Vidrarias, segurança, técnicas de separação, titulação e síntese prática.</p>
                    <Link href="/materias/laboratorio" className="btn btn-primary btn-sm">Ver Matéria</Link>
                </div>
                
                <div className="card" style={{ opacity: 0.7, backgroundColor: '#e2e8f0' }}>
                    <div className="icon" style={{ color: '#64748b' }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20"></path>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <h3 style={{ color: '#475569' }}>Bioquímica</h3>
                    <p>Proteínas, carboidratos, lipídios e metabolismo celular.</p>
                    <span className="btn btn-outline btn-sm" style={{ borderColor: '#cbd5e1', color: '#64748b', cursor: 'not-allowed' }}>Em Breve</span>
                </div>
            </section>
        </div>
    </main>
  );
}
