'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function QuimicaInorganica() {
  useEffect(() => {
    const controllers = new AbortController();
    const signal = controllers.signal;

    const menuTitles = document.querySelectorAll('.menu-title');
    menuTitles.forEach(title => {
      const handler = () => {
        const parentLi = title.parentElement;
        if (!parentLi) return;
        const submenu = parentLi.querySelector('.submenu') as HTMLElement;
        if (parentLi.classList.contains('expanded')) {
          parentLi.classList.remove('expanded');
          if (submenu) submenu.style.display = 'none';
        } else {
          parentLi.classList.add('expanded');
          if (submenu) submenu.style.display = 'block';
        }
      };
      title.addEventListener('click', handler, { signal });
    });

    const subItems = document.querySelectorAll('.submenu li');
    const contents = document.querySelectorAll('.topic-content');

    subItems.forEach(item => {
      const handler = () => {
        subItems.forEach(li => li.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        item.classList.add('active');
        const targetId = item.getAttribute('data-target');
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          if (targetEl) targetEl.classList.add('active');
        }

        if ((window as any).MathJax) {
          (window as any).MathJax.typesetPromise();
        }
      };
      item.addEventListener('click', handler, { signal });
    });

    return () => controllers.abort();
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="lazyOnload" />
      <div className="flex-1 flex flex-col" dangerouslySetInnerHTML={{ __html: `<main class="main-content layout-sidebar">
        <div class="container sidebar-container">
            <!-- Menu Lateral -->
            <aside class="sidebar">
                <h3>Tópicos de Química Inorgânica</h3>
                <ul class="sidebar-menu accordion-menu" id="sidebarMenu">
                    <li class="menu-item has-submenu">
                        <div class="menu-title">1. Estrutura Atômica e Tabela Periódica</div>
                        <ul class="submenu">
                            <li data-target="topic-1-0">Modelos Atômicos e Mecânica Quântica</li>
                            <li data-target="topic-1-1">Configuração Eletrônica</li>
                            <li data-target="topic-1-2">Periodicidade Química</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">2. Ligações Químicas e Geometria Molecular</div>
                        <ul class="submenu">
                            <li data-target="topic-2-0">Estruturas de Lewis e Cargas Formais.</li>
                            <li data-target="topic-2-1">Teoria da Repulsão dos Pares de Eletrões da Camada de Valência (VSEPR)</li>
                            <li data-target="topic-2-2">Teoria da Ligação de Valência (TLV) e Hibridização.</li>
                            <li data-target="topic-2-3">Teoria dos Orbitais Moleculares (TOM)</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">3. Ácidos e Bases em Química Inorgânica</div>
                        <ul class="submenu">
                            <li data-target="topic-3-0">Conceitos Fundamentais</li>
                            <li data-target="topic-3-1">Tendências Periódicas de Acidez e Basicidade</li>
                            <li data-target="topic-3-2">Conceito de Ácidos e Bases Duros e Macios (HSAB / Pearson)</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">4. Química do Estado Sólido e Ligação Iônica</div>
                        <ul class="submenu">
                            <li data-target="topic-4-0">Estruturas Cristalinas</li>
                            <li data-target="topic-4-1">Energia de Rede Cristalina</li>
                            <li data-target="topic-4-2">Defeitos em Sólidos e Semicondutores</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">5. Reações de Oxirredução (Redox)</div>
                        <ul class="submenu">
                            <li data-target="topic-5-0">Estados de Oxidação e Balanceamento.</li>
                            <li data-target="topic-5-1">Potenciais Padrão de Redução e Espontaneidade.</li>
                            <li data-target="topic-5-2">Diagramas de Estabilidade</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">6. Química dos Elementos dos Grupos Principais (Blocos s e p)</div>
                        <ul class="submenu">
                            <li data-target="topic-6-0">Bloco s (Grupos 1 e 2)</li>
                            <li data-target="topic-6-1">Bloco p (Grupos 13 a 18)</li>
                            <li data-target="topic-6-2">Grupo 13 (Boro, Alumínio)</li>
                            <li data-target="topic-6-3">Grupo 14 (Carbono, Silício)</li>
                            <li data-target="topic-6-4">Grupo 15 (Nitrogênio, Fósforo)</li>
                            <li data-target="topic-6-5">Grupo 16, 17 e 18</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">7. Introdução aos Compostos de Coordenação (Bloco d)</div>
                        <ul class="submenu">
                            <li data-target="topic-7-0">Estrutura e Nomenclatura</li>
                            <li data-target="topic-7-1">Isomeria em Compostos de Coordenação</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">8. Teorias de Ligação em Compostos de Transição</div>
                        <ul class="submenu">
                            <li data-target="topic-8-0">Teoria do Campo Cristalino (TCC)</li>
                            <li data-target="topic-8-1">Teoria do Campo Ligante (TCL)</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">9. Propriedades Magnéticas e Espectro Eletrônico</div>
                        <ul class="submenu">
                            <li data-target="topic-9-0">Magnetismo</li>
                            <li data-target="topic-9-1">Espectroscopia UV-Visível em Complexos</li>
                            <li data-target="topic-9-2">Transferência de Carga</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">10. Cinética e Mecanismos de Reação de Coordenação</div>
                        <ul class="submenu">
                            <li data-target="topic-10-0">Labilidade e Inércia Termodinâmica vs. Cinética.</li>
                            <li data-target="topic-10-1">Mecanismos de Substituição de Ligantes</li>
                            <li data-target="topic-10-2">Mecanismos de Transferência de Elétrons</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">11. Química Organometálica</div>
                        <ul class="submenu">
                            <li data-target="topic-11-0">Regra dos 18 Elétrons e contagem formal de elétrons.</li>
                            <li data-target="topic-11-1">Ligantes Característicos</li>
                            <li data-target="topic-11-2">Reações Fundamentais</li>
                            <li data-target="topic-11-3">Catálise Homogênea</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">12. Química Bioinorgânica (Tópico Avançado/Final)</div>
                        <ul class="submenu">
                            <li data-target="topic-12-0">Metais em Sistemas Biológicos</li>
                            <li data-target="topic-12-1">Proteínas de Transporte e Armazenamento de Oxigênio</li>
                            <li data-target="topic-12-2">Metaloproteínas e Metaloenzimas</li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <!-- Área de Conteúdo -->
            <div class="content-area">
                <div id="welcome-message" class="topic-content active">
                    <h2>Bem-vindo à Química Inorgânica</h2>
                    <p>Selecione um tópico no menu lateral para iniciar seus estudos.</p>
                </div>
                <div id="topic-1-0" class="topic-content">
                    <h2>1. Estrutura Atômica e Tabela Periódica - Modelos Atômicos e Mecânica Quântica</h2>
                    <p>Orbitais atômicos, números quânticos e funções de onda.</p>
                </div>

                <div id="topic-1-1" class="topic-content">
                    <h2>1. Estrutura Atômica e Tabela Periódica - Configuração Eletrônica</h2>
                    <p>Princípio de Aufbau, Regra de Hund e Princípio de Exclusão de Pauli.</p>
                </div>

                <div id="topic-1-2" class="topic-content">
                    <h2>1. Estrutura Atômica e Tabela Periódica - Periodicidade Química</h2>
                    <p>Raio atômico/iônico, energia de ionização, afinidade eletrônica e eletronegatividade.</p>
                </div>

                <div id="topic-2-0" class="topic-content">
                    <h2>2. Ligações Químicas e Geometria Molecular - Estruturas de Lewis e Cargas Formais.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-2-1" class="topic-content">
                    <h2>2. Ligações Químicas e Geometria Molecular - Teoria da Repulsão dos Pares de Eletrões da Camada de Valência (VSEPR)</h2>
                    <p>Previsão da geometria molecular.</p>
                </div>

                <div id="topic-2-2" class="topic-content">
                    <h2>2. Ligações Químicas e Geometria Molecular - Teoria da Ligação de Valência (TLV) e Hibridização.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-2-3" class="topic-content">
                    <h2>2. Ligações Químicas e Geometria Molecular - Teoria dos Orbitais Moleculares (TOM)</h2>
                    <p>Moléculas diatômicas homonucleares e heteronucleares, ordem de ligação e diagramas de energia.</p>
                </div>

                <div id="topic-3-0" class="topic-content">
                    <h2>3. Ácidos e Bases em Química Inorgânica - Conceitos Fundamentais</h2>
                    <p>Brønsted-Lowry, Lewis e Usanovich.</p>
                </div>

                <div id="topic-3-1" class="topic-content">
                    <h2>3. Ácidos e Bases em Química Inorgânica - Tendências Periódicas de Acidez e Basicidade</h2>
                    <p>Óxidos e hidróxidos metálicos e não-metálicos.</p>
                </div>

                <div id="topic-3-2" class="topic-content">
                    <h2>3. Ácidos e Bases em Química Inorgânica - Conceito de Ácidos e Bases Duros e Macios (HSAB / Pearson)</h2>
                    <p>Aplicações em estabilidade e reatividade de compostos.</p>
                </div>

                <div id="topic-4-0" class="topic-content">
                    <h2>4. Química do Estado Sólido e Ligação Iônica - Estruturas Cristalinas</h2>
                    <p>Células unitárias, empacotamento compacto e redes de Bravais.</p>
                </div>

                <div id="topic-4-1" class="topic-content">
                    <h2>4. Química do Estado Sólido e Ligação Iônica - Energia de Rede Cristalina</h2>
                    <p>Ciclo de Born-Haber e equação de Kapustinskii.</p>
                </div>

                <div id="topic-4-2" class="topic-content">
                    <h2>4. Química do Estado Sólido e Ligação Iônica - Defeitos em Sólidos e Semicondutores</h2>
                    <p>Defeitos pontuais (Schottky, Frenkel) e Teoria de Bandas em metais e isolantes.</p>
                </div>

                <div id="topic-5-0" class="topic-content">
                    <h2>5. Reações de Oxirredução (Redox) - Estados de Oxidação e Balanceamento.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-5-1" class="topic-content">
                    <h2>5. Reações de Oxirredução (Redox) - Potenciais Padrão de Redução e Espontaneidade.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-5-2" class="topic-content">
                    <h2>5. Reações de Oxirredução (Redox) - Diagramas de Estabilidade</h2>
                    <p>Diagramas de Latimer, Frost e Pourbaix.</p>
                </div>

                <div id="topic-6-0" class="topic-content">
                    <h2>6. Química dos Elementos dos Grupos Principais (Blocos s e p) - Bloco s (Grupos 1 e 2)</h2>
                    <p>Propriedades, reagentes organometálicos simples (ex.</p>
                </div>

                <div id="topic-6-1" class="topic-content">
                    <h2>6. Química dos Elementos dos Grupos Principais (Blocos s e p) - Bloco p (Grupos 13 a 18)</h2>
                    <p></p>
                </div>

                <div id="topic-6-2" class="topic-content">
                    <h2>6. Química dos Elementos dos Grupos Principais (Blocos s e p) - Grupo 13 (Boro, Alumínio)</h2>
                    <p>Química de hidretos de boro (boranos) e ligação deficiente em elétrons.</p>
                </div>

                <div id="topic-6-3" class="topic-content">
                    <h2>6. Química dos Elementos dos Grupos Principais (Blocos s e p) - Grupo 14 (Carbono, Silício)</h2>
                    <p>Alótropos do carbono, silicatos e silicones.</p>
                </div>

                <div id="topic-6-4" class="topic-content">
                    <h2>6. Química dos Elementos dos Grupos Principais (Blocos s e p) - Grupo 15 (Nitrogênio, Fósforo)</h2>
                    <p>Oxoácidos, fosfatos e haletos.</p>
                </div>

                <div id="topic-6-5" class="topic-content">
                    <h2>6. Química dos Elementos dos Grupos Principais (Blocos s e p) - Grupo 16, 17 e 18</h2>
                    <p>Química do enxofre, halogênios, interhalogênios e compostos de gases nobres.</p>
                </div>

                <div id="topic-7-0" class="topic-content">
                    <h2>7. Introdução aos Compostos de Coordenação (Bloco d) - Estrutura e Nomenclatura</h2>
                    <p>Ligantes (monodentados, polidentados/quelantes) e número de coordenação.</p>
                </div>

                <div id="topic-7-1" class="topic-content">
                    <h2>7. Introdução aos Compostos de Coordenação (Bloco d) - Isomeria em Compostos de Coordenação</h2>
                    <p>Isomeria estrutural e estereoisomeria (geométrica e óptica).</p>
                </div>

                <div id="topic-8-0" class="topic-content">
                    <h2>8. Teorias de Ligação em Compostos de Transição - Teoria do Campo Cristalino (TCC)</h2>
                    <p>Desdobramento dos orbitais d em geometrias octaédrica, tetraédrica e quadrática plana; energia de estabilização do campo cristalino (EECC); complexos de spin alto e spin baixo.</p>
                </div>

                <div id="topic-8-1" class="topic-content">
                    <h2>8. Teorias de Ligação em Compostos de Transição - Teoria do Campo Ligante (TCL)</h2>
                    <p>Aplicação dos orbitais moleculares aos complexos de coordenação e efeito da doação σ e receptividade π.</p>
                </div>

                <div id="topic-9-0" class="topic-content">
                    <h2>9. Propriedades Magnéticas e Espectro Eletrônico - Magnetismo</h2>
                    <p>Paramagnetismo, diamagnetismo e momento magnético efetivo.</p>
                </div>

                <div id="topic-9-1" class="topic-content">
                    <h2>9. Propriedades Magnéticas e Espectro Eletrônico - Espectroscopia UV-Visível em Complexos</h2>
                    <p>Transições d-d, estados de termo espectroscópico, Diagramas de Tanabe-Sugano e regras de seleção (Laporte e spin).</p>
                </div>

                <div id="topic-9-2" class="topic-content">
                    <h2>9. Propriedades Magnéticas e Espectro Eletrônico - Transferência de Carga</h2>
                    <p>Transições de transferência de carga ligante-metal (TCLM) e metal-ligante (TCML).</p>
                </div>

                <div id="topic-10-0" class="topic-content">
                    <h2>10. Cinética e Mecanismos de Reação de Coordenação - Labilidade e Inércia Termodinâmica vs. Cinética.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-10-1" class="topic-content">
                    <h2>10. Cinética e Mecanismos de Reação de Coordenação - Mecanismos de Substituição de Ligantes</h2>
                    <p>Substituição em complexos octaédricos e quadráticos planos (Efeito Trans).</p>
                </div>

                <div id="topic-10-2" class="topic-content">
                    <h2>10. Cinética e Mecanismos de Reação de Coordenação - Mecanismos de Transferência de Elétrons</h2>
                    <p>Esfera interna e esfera externa.</p>
                </div>

                <div id="topic-11-0" class="topic-content">
                    <h2>11. Química Organometálica - Regra dos 18 Elétrons e contagem formal de elétrons.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-11-1" class="topic-content">
                    <h2>11. Química Organometálica - Ligantes Característicos</h2>
                    <p>Carbonilas (CO), olefinas, ciclopentadienil (Cp) e fosfinas.</p>
                </div>

                <div id="topic-11-2" class="topic-content">
                    <h2>11. Química Organometálica - Reações Fundamentais</h2>
                    <p>Adição oxidativa, eliminação redutiva, inserção migratória e ataque nucleofílico.</p>
                </div>

                <div id="topic-11-3" class="topic-content">
                    <h2>11. Química Organometálica - Catálise Homogênea</h2>
                    <p>Ciclos catalíticos (ex.</p>
                </div>

                <div id="topic-12-0" class="topic-content">
                    <h2>12. Química Bioinorgânica (Tópico Avançado/Final) - Metais em Sistemas Biológicos</h2>
                    <p>Papel do ferro, cobre, zinco e magnésio.</p>
                </div>

                <div id="topic-12-1" class="topic-content">
                    <h2>12. Química Bioinorgânica (Tópico Avançado/Final) - Proteínas de Transporte e Armazenamento de Oxigênio</h2>
                    <p>Hemoglobina e mioglobina.</p>
                </div>

                <div id="topic-12-2" class="topic-content">
                    <h2>12. Química Bioinorgânica (Tópico Avançado/Final) - Metaloproteínas e Metaloenzimas</h2>
                    <p>Citocromos, fotossíntese (clorofila) e fixação de nitrogênio.</p>
                </div>

            </div>
        </div>
</main>` }} />
    </>
  );
}
