'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function Bioquimica() {
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
                <h3>Tópicos de Bioquímica</h3>
                <ul class="sidebar-menu accordion-menu" id="sidebarMenu">
                    <li class="menu-item has-submenu">
                        <div class="menu-title">1. Introdução e Fundamentos</div>
                        <ul class="submenu">
                            <li data-target="topic-1-1">A Célula como Unidade Bioquímica</li>
                            <li data-target="topic-1-2">Água e Soluções Biológicas</li>
                            <li data-target="topic-1-3">Equilíbrio Ácido-Base Biológico</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">2. Aminoácidos e Proteínas</div>
                        <ul class="submenu">
                            <li data-target="topic-2-1">Aminoácidos e Propriedades</li>
                            <li data-target="topic-2-2">Ligação Peptídica</li>
                            <li data-target="topic-2-3">Níveis de Estrutura Proteica</li>
                            <li data-target="topic-2-4">Desnaturação e Enovelamento</li>
                            <li data-target="topic-2-5">Proteínas Globulares e Fibrosas</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">3. Enzimologia</div>
                        <ul class="submenu">
                            <li data-target="topic-3-1">Propriedades das Enzimas</li>
                            <li data-target="topic-3-2">Cinética Enzimática</li>
                            <li data-target="topic-3-3">Inibição Enzimática</li>
                            <li data-target="topic-3-4">Regulação Enzimática</li>
                            <li data-target="topic-3-5">Coenzimas e Cofatores</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">4. Carboidratos</div>
                        <ul class="submenu">
                            <li data-target="topic-4-1">Monossacarídeos</li>
                            <li data-target="topic-4-2">Dissacarídeos</li>
                            <li data-target="topic-4-3">Polissacarídeos e Glicoconjugados</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">5. Lipídios e Membranas</div>
                        <ul class="submenu">
                            <li data-target="topic-5-1">Ácidos Graxos</li>
                            <li data-target="topic-5-2">Lipídios de Reserva e Estruturais</li>
                            <li data-target="topic-5-3">Membranas Biológicas e Transporte</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">6. Ácidos Nucleicos</div>
                        <ul class="submenu">
                            <li data-target="topic-6-1">Nucleotídeos e Nucleosídeos</li>
                            <li data-target="topic-6-2">Estrutura do DNA e RNA</li>
                            <li data-target="topic-6-3">Dogma Central da Biologia Molecular</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">7. Metabolismo e Bioenergética</div>
                        <ul class="submenu">
                            <li data-target="topic-7-1">Conceitos do Metabolismo</li>
                            <li data-target="topic-7-2">Bioenergética e ATP</li>
                            <li data-target="topic-7-3">Carregadores de Elétrons</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">8. Metabolismo dos Carboidratos</div>
                        <ul class="submenu">
                            <li data-target="topic-8-1">Glicólise e Destinos do Piruvato</li>
                            <li data-target="topic-8-2">Ciclo de Krebs</li>
                            <li data-target="topic-8-3">Gliconeogênese</li>
                            <li data-target="topic-8-4">Metabolismo do Glicogênio e Via das Pentoses</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">9. Fosforilação Oxidativa</div>
                        <ul class="submenu">
                            <li data-target="topic-9-1">Cadeia Transportadora de Elétrons</li>
                            <li data-target="topic-9-2">Hipotese Quimiosmótica e ATP Sintase</li>
                            <li data-target="topic-9-3">Inibidores e Desacopladores</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">10. Metabolismo dos Lipídios</div>
                        <ul class="submenu">
                            <li data-target="topic-10-1">Digestão e Lipoproteínas</li>
                            <li data-target="topic-10-2">Oxidação de Ácidos Graxos (Beta-oxidação)</li>
                            <li data-target="topic-10-3">Corpos Cetônicos e Biossíntese</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">11. Metabolismo dos Compostos Nitrogenados</div>
                        <ul class="submenu">
                            <li data-target="topic-11-1">Degradação de Proteínas</li>
                            <li data-target="topic-11-2">Transaminação e Ciclo da Ureia</li>
                            <li data-target="topic-11-3">Destino do Esqueleto Carbônico</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">12. Integração e Regulação</div>
                        <ul class="submenu">
                            <li data-target="topic-12-1">Especificidade Metabólica dos Órgãos</li>
                            <li data-target="topic-12-2">Controle Hormonal Global</li>
                        </ul>
                    </li>
                </ul>
            </aside>

            <!-- Área de Conteúdo -->
            <div class="content-area">
                <div id="welcome-message" class="topic-content active">
                    <h2>Bem-vindo à Bioquímica</h2>
                    <p>Selecione um tópico no menu lateral para iniciar seus estudos.</p>
                </div>
                
                <div id="topic-1-1" class="topic-content">
                    <h2>1. Introdução à Bioquímica e Fundamentos Físico-Químicos - A Célula como Unidade Bioquímica</h2>
                    <p>Organelas, compartimentalização e diferenças metabólicas entre procariontes e eucariontes.</p>
                </div>
                <div id="topic-1-2" class="topic-content">
                    <h2>1. Introdução à Bioquímica e Fundamentos Físico-Químicos - Água e Soluções Biológicas</h2>
                    <p>Propriedades físicas da água, ligações de hidrogênio e interações hidrofóbicas.</p>
                </div>
                <div id="topic-1-3" class="topic-content">
                    <h2>1. Introdução à Bioquímica e Fundamentos Físico-Químicos - Equilíbrio Ácido-Base Biológico</h2>
                    <p>Tamponamento biológico, equação de Henderson-Hasselbalch e sistemas tampão no sangue (ex.: tampão bicarbonato).</p>
                </div>

                <div id="topic-2-1" class="topic-content">
                    <h2>2. Estrutura e Função de Aminoácidos e Proteínas - Aminoácidos</h2>
                    <p>Estrutura geral, propriedades estereoquímicas, classificação (polares, apolares, carregados) e ponto isoelétrico (\$pI\$).</p>
                </div>
                <div id="topic-2-2" class="topic-content">
                    <h2>2. Estrutura e Função de Aminoácidos e Proteínas - Ligação Peptídica</h2>
                    <p>Geometria e formação de peptídeos.</p>
                </div>
                <div id="topic-2-3" class="topic-content">
                    <h2>2. Estrutura e Função de Aminoácidos e Proteínas - Níveis de Estrutura Proteica</h2>
                    <p>Primária (sequência), Secundária (hélice-\$\\alpha\$, folha-\$\\beta\$, voltas), Terciária e Quaternária (dobramento, forças de estabilização e subunidades).</p>
                </div>
                <div id="topic-2-4" class="topic-content">
                    <h2>2. Estrutura e Função de Aminoácidos e Proteínas - Desnaturação e Enovelamento</h2>
                    <p>Desnaturação e o papel das chaperonas no enovelamento.</p>
                </div>
                <div id="topic-2-5" class="topic-content">
                    <h2>2. Estrutura e Função de Aminoácidos e Proteínas - Proteínas Globulares e Fibrosas</h2>
                    <p>Exemplo de função estrutural (colágeno) e transporte (hemoglobina e mioglobina, e o efeito alostérico do oxigênio/efeito Bohr).</p>
                </div>

                <div id="topic-3-1" class="topic-content">
                    <h2>3. Enzimologia - Propriedades das Enzimas</h2>
                    <p>Catálise, sítio ativo e especificidade.</p>
                </div>
                <div id="topic-3-2" class="topic-content">
                    <h2>3. Enzimologia - Cinética Enzimática</h2>
                    <p>Modelo de Michaelis-Menten, constante de Michaelis (\$K_m\$), velocidade máxima (\$V_{max}\$) e gráfico de Lineweaver-Burk.</p>
                </div>
                <div id="topic-3-3" class="topic-content">
                    <h2>3. Enzimologia - Inibição Enzimática</h2>
                    <p>Reversível (competitiva, incompetitiva, mista) e irreversível.</p>
                </div>
                <div id="topic-3-4" class="topic-content">
                    <h2>3. Enzimologia - Regulação Enzimática</h2>
                    <p>Controle alostérico, modificação covalente e zimogênios.</p>
                </div>
                <div id="topic-3-5" class="topic-content">
                    <h2>3. Enzimologia - Coenzimas e Cofatores</h2>
                    <p>Papel das vitaminas do complexo B.</p>
                </div>

                <div id="topic-4-1" class="topic-content">
                    <h2>4. Carboidratos (Glicídios) - Monossacarídeos</h2>
                    <p>Estrutura, quiralidade, projeções de Fischer e Haworth, anômeros (\$\\alpha\$ e \$\\beta\$).</p>
                </div>
                <div id="topic-4-2" class="topic-content">
                    <h2>4. Carboidratos (Glicídios) - Dissacarídeos e Ligação Glicosídica</h2>
                    <p>Sacarose, lactose e maltose.</p>
                </div>
                <div id="topic-4-3" class="topic-content">
                    <h2>4. Carboidratos (Glicídios) - Polissacarídeos e Glicoconjugados</h2>
                    <p>Reserva (amido e glicogênio). Estruturais (celulose e quitina). Glicoconjugados (Glicoproteínas, glicolipídios e proteoglicanos).</p>
                </div>

                <div id="topic-5-1" class="topic-content">
                    <h2>5. Lipídios e Membranas Biológicas - Ácidos Graxos</h2>
                    <p>Saturados e insaturados (propriedades físicas e ponto de fusão).</p>
                </div>
                <div id="topic-5-2" class="topic-content">
                    <h2>5. Lipídios e Membranas Biológicas - Lipídios de Reserva e Estruturais</h2>
                    <p>Reserva: Triacilgliceróis (triglicerídeos). Estruturais: Fosfolipídios, esfingolipídios e esteróis (colesterol).</p>
                </div>
                <div id="topic-5-3" class="topic-content">
                    <h2>5. Lipídios e Membranas Biológicas - Membranas Biológicas</h2>
                    <p>Modelo do mosaico fluido, assimetria, transporte passivo (difusão simples e facilitada) e transporte ativo (bombas de íons).</p>
                </div>

                <div id="topic-6-1" class="topic-content">
                    <h2>6. Ácidos Nucleicos e Introdução à Biologia Molecular - Nucleotídeos e Nucleosídeos</h2>
                    <p>Estrutura, bases nitrogenadas (purinas e pirimidinas), açúcares e grupos fosfato.</p>
                </div>
                <div id="topic-6-2" class="topic-content">
                    <h2>6. Ácidos Nucleicos e Introdução à Biologia Molecular - Estrutura do DNA e RNA</h2>
                    <p>Dupla hélice do DNA (Watson-Crick), tipos de RNA (mRNA, tRNA, rRNA). Propriedades Físico-Químicas: Desnaturação térmica (\$T_m\$) e hibridização.</p>
                </div>
                <div id="topic-6-3" class="topic-content">
                    <h2>6. Ácidos Nucleicos e Introdução à Biologia Molecular - Dogma Central da Biologia Molecular</h2>
                    <p>Visão Geral: Replicação, transcrição e tradução.</p>
                </div>

                <div id="topic-7-1" class="topic-content">
                    <h2>7. Introdução ao Metabolismo e Bioenergética - Conceitos do Metabolismo</h2>
                    <p>Vias anabólicas (síntese) vs. catabólicas (degradação).</p>
                </div>
                <div id="topic-7-2" class="topic-content">
                    <h2>7. Introdução ao Metabolismo e Bioenergética - Bioenergética e ATP</h2>
                    <p>Variação de energia livre (\$\\Delta G\$), acoplamento de reações e o papel central do ATP como "moeda energética".</p>
                </div>
                <div id="topic-7-3" class="topic-content">
                    <h2>7. Introdução ao Metabolismo e Bioenergética - Carregadores de Elétrons</h2>
                    <p>NAD⁺/NADH, NADP⁺/NADPH e FAD/FADH₂.</p>
                </div>

                <div id="topic-8-1" class="topic-content">
                    <h2>8. Metabolismo dos Carboidratos - Glicólise e Destinos do Piruvato</h2>
                    <p>Etapas, rendimento energético e regulação. Destinos do Piruvato: Fermentação láctica/alcoólica e conversão a Acetil-CoA (Complexo Piruvato Desidrogenase).</p>
                </div>
                <div id="topic-8-2" class="topic-content">
                    <h2>8. Metabolismo dos Carboidratos - Ciclo do Ácido Cítrico (Ciclo de Krebs)</h2>
                    <p>Etapas, produção de equivalentes de redução e caráter anfibólico.</p>
                </div>
                <div id="topic-8-3" class="topic-content">
                    <h2>8. Metabolismo dos Carboidratos - Gliconeogênese</h2>
                    <p>Via de síntese de glicose a partir de precursores não-carboidratos.</p>
                </div>
                <div id="topic-8-4" class="topic-content">
                    <h2>8. Metabolismo dos Carboidratos - Metabolismo do Glicogênio e Via das Pentoses-Fosfato</h2>
                    <p>Glicogenogênese e glicogenólise (regulação hormonal por insulina e glucagon). Via das Pentoses: Produção de NADPH e ribose-5-fosfato.</p>
                </div>

                <div id="topic-9-1" class="topic-content">
                    <h2>9. Fosforilação Oxidativa e Cadeia Respiratória - Cadeia Transportadora de Elétrons</h2>
                    <p>Complexos I, II, III e IV nas mitocôndrias.</p>
                </div>
                <div id="topic-9-2" class="topic-content">
                    <h2>9. Fosforilação Oxidativa e Cadeia Respiratória - Hipotese Quimiosmótica e Síntese de ATP</h2>
                    <p>Hipotese Quimiosmótica de Mitchell: Gradiente de prótons e força protonmotora. Síntese de ATP pela ATP Sintase.</p>
                </div>
                <div id="topic-9-3" class="topic-content">
                    <h2>9. Fosforilação Oxidativa e Cadeia Respiratória - Inibidores e Desacopladores</h2>
                    <p>Inibidores e Desacopladores da Cadeia Respiratória.</p>
                </div>

                <div id="topic-10-1" class="topic-content">
                    <h2>10. Metabolismo dos Lipídios - Digestão, Absorção e Transporte de Lipídios</h2>
                    <p>Lipoproteínas (Chylomicrons, VLDL, LDL, HDL).</p>
                </div>
                <div id="topic-10-2" class="topic-content">
                    <h2>10. Metabolismo dos Lipídios - Oxidação de Ácidos Graxos</h2>
                    <p>\$\\beta\$-oxidação: Ativação, transporte via carnitina, etapas e rendimento energético.</p>
                </div>
                <div id="topic-10-3" class="topic-content">
                    <h2>10. Metabolismo dos Lipídios - Corpos Cetônicos, Biossíntese e Colesterol</h2>
                    <p>Corpos Cetônicos: Cetogênese em jejum prolongado. Biossíntese de Ácidos Graxos e Triacilgliceróis. Metabolismo do Colesterol (Visão Geral).</p>
                </div>

                <div id="topic-11-1" class="topic-content">
                    <h2>11. Metabolismo dos Compostos Nitrogenados - Degradação de Proteínas</h2>
                    <p>Turnover proteico e sistema ubiquitina-proteassoma.</p>
                </div>
                <div id="topic-11-2" class="topic-content">
                    <h2>11. Metabolismo dos Compostos Nitrogenados - Transaminação e Ciclo da Ureia</h2>
                    <p>Transaminação e Desaminação Oxidativa: Remoção do grupo amino (papel do glutamato e piridoxal-fosfato). Ciclo da Ureia: Destoxificação e eliminação da amônia.</p>
                </div>
                <div id="topic-11-3" class="topic-content">
                    <h2>11. Metabolismo dos Compostos Nitrogenados - Destino do Esqueleto Carbônico dos Aminoácidos</h2>
                    <p>Aminoácidos glicogênicos e cetogênicos.</p>
                </div>

                <div id="topic-12-1" class="topic-content">
                    <h2>12. Integração e Regulação do Metabolismo - Especificidade Metabólica dos Órgãos</h2>
                    <p>Fígado, tecido adiposo, músculo esquelético, músculo cardíaco e cérebro.</p>
                </div>
                <div id="topic-12-2" class="topic-content">
                    <h2>12. Integração e Regulação do Metabolismo - Controle Hormonal Globais</h2>
                    <p>Ação da insulina, glucagon e adrenalina nos estados de nutrição (alimentado) e jejum/estresse.</p>
                </div>

            </div>
        </div>
</main>` }} />
    </>
  );
}
