'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function IntroducaoQuimica() {
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
                <h3>Tópicos de Introdução à Química</h3>
                <ul class="sidebar-menu accordion-menu" id="sidebarMenu">
                    <li class="menu-item has-submenu">
                        <div class="menu-title">1. Introdução à Ciência Química e Matéria</div>
                        <ul class="submenu">
                            <li data-target="topic-1-0">O Método Científico e Segurança em Laboratório.</li>
                            <li data-target="topic-1-1">Definição de Matéria e Energia.</li>
                            <li data-target="topic-1-2">Estados Físicos da Matéria</li>
                            <li data-target="topic-1-3">Classificação da Matéria</li>
                            <li data-target="topic-1-4">Propriedades da Matéria</li>
                            <li data-target="topic-1-5">Métodos de Separação de Misturas</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">2. Medidas, Unidades e Tratamento de Dados</div>
                        <ul class="submenu">
                            <li data-target="topic-2-0">Sistema Internacional de Unidades (SI)</li>
                            <li data-target="topic-2-1">Algarismos Significativos e Notação Científica.</li>
                            <li data-target="topic-2-2">Análise Dimensional e Conversão de Unidades.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">3. Estrutura Atômica Fundamental</div>
                        <ul class="submenu">
                            <li data-target="topic-3-0">Evolução dos Modelos Atômicos</li>
                            <li data-target="topic-3-1">Partículas Subatômicas</li>
                            <li data-target="topic-3-2">Número Atômico (Z) e Número de Massa (A).</li>
                            <li data-target="topic-3-3">Isótopos, Isóbaros e Isótonos.</li>
                            <li data-target="topic-3-4">Íons</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">4. Tabela Periódica e Periodicidade</div>
                        <ul class="submenu">
                            <li data-target="topic-4-0">Organização da Tabela Periódica</li>
                            <li data-target="topic-4-1">Classificação dos Elementos</li>
                            <li data-target="topic-4-2">Propriedades Periódicas</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">5. Ligação Química e Geometria Básica</div>
                        <ul class="submenu">
                            <li data-target="topic-5-0">Regra do Octeto e Estrutura de Lewis.</li>
                            <li data-target="topic-5-1">Ligação Iônica</li>
                            <li data-target="topic-5-2">Ligação Covalente</li>
                            <li data-target="topic-5-3">Ligação Metálica</li>
                            <li data-target="topic-5-4">Introdução à Geometria Molecular e Polaridade das Moléculas.</li>
                            <li data-target="topic-5-5">Forças Intermoleculares</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">6. Funções Inorgânicas (Química Descritiva Básica)</div>
                        <ul class="submenu">
                            <li data-target="topic-6-0">Ácidos</li>
                            <li data-target="topic-6-1">Bases</li>
                            <li data-target="topic-6-2">Sais</li>
                            <li data-target="topic-6-3">Óxidos</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">7. Relações Quantitativas e Estequiometria</div>
                        <ul class="submenu">
                            <li data-target="topic-7-0">Massa Atômica, Massa Molecular e Unidade de Massa Atômica (u).</li>
                            <li data-target="topic-7-1">O Conceito de Mol e a Constante de Avogadro.</li>
                            <li data-target="topic-7-2">Massa Molar (g/mol) e Volume Molar dos Gases.</li>
                            <li data-target="topic-7-3">Fórmula Mínima, Centesimal e Molecular.</li>
                            <li data-target="topic-7-4">Balanceamento de Equações Químicas.</li>
                            <li data-target="topic-7-5">Cálculo Estequiométrico</li>
                            <li data-target="topic-7-6">Reagente Limitante, Reagente em Excesso e Rendimento de Reação.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">8. Soluções e Unidades de Concentração</div>
                        <ul class="submenu">
                            <li data-target="topic-8-0">Conceito de Soluto, Solvente e Solubilidade.</li>
                            <li data-target="topic-8-1">Classificação quanto à Solubilidade</li>
                            <li data-target="topic-8-2">Unidades de Concentração</li>
                            <li data-target="topic-8-3">Diluição e Mistura de Soluções.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">9. Introdução à Termoquímica e Reatividade</div>
                        <ul class="submenu">
                            <li data-target="topic-9-0">Reações Exotérmicas e Endotérmicas.</li>
                            <li data-target="topic-9-1">Variação de Entalpia (ΔH).</li>
                            <li data-target="topic-9-2">Introdução à Cinética Química</li>
                            <li data-target="topic-9-3">Introdução ao Equilíbrio Químico e Escala de pH / pOH.</li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <!-- Área de Conteúdo -->
            <div class="content-area">
                <div id="topic-1-0" class="topic-content">
                    <h2>1. Introdução à Ciência Química e Matéria - O Método Científico e Segurança em Laboratório.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-1-1" class="topic-content">
                    <h2>1. Introdução à Ciência Química e Matéria - Definição de Matéria e Energia.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-1-2" class="topic-content">
                    <h2>1. Introdução à Ciência Química e Matéria - Estados Físicos da Matéria</h2>
                    <p>Sólido, líquido e gasoso; mudanças de estado físico.</p>
                </div>

                <div id="topic-1-3" class="topic-content">
                    <h2>1. Introdução à Ciência Química e Matéria - Classificação da Matéria</h2>
                    <p>Substâncias puras (simples e compostas) e misturas (homogêneas e heterogêneas).</p>
                </div>

                <div id="topic-1-4" class="topic-content">
                    <h2>1. Introdução à Ciência Química e Matéria - Propriedades da Matéria</h2>
                    <p>Físicas, químicas, extensivas e intensivas.</p>
                </div>

                <div id="topic-1-5" class="topic-content">
                    <h2>1. Introdução à Ciência Química e Matéria - Métodos de Separação de Misturas</h2>
                    <p>Filtração, destilação, decantação, centrifugação, entre outros.</p>
                </div>

                <div id="topic-2-0" class="topic-content">
                    <h2>2. Medidas, Unidades e Tratamento de Dados - Sistema Internacional de Unidades (SI)</h2>
                    <p>Massa, volume, temperatura e densidade.</p>
                </div>

                <div id="topic-2-1" class="topic-content">
                    <h2>2. Medidas, Unidades e Tratamento de Dados - Algarismos Significativos e Notação Científica.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-2-2" class="topic-content">
                    <h2>2. Medidas, Unidades e Tratamento de Dados - Análise Dimensional e Conversão de Unidades.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-0" class="topic-content">
                    <h2>3. Estrutura Atômica Fundamental - Evolução dos Modelos Atômicos</h2>
                    <p>Dalton, Thomson, Rutherford e Bohr.</p>
                </div>

                <div id="topic-3-1" class="topic-content">
                    <h2>3. Estrutura Atômica Fundamental - Partículas Subatômicas</h2>
                    <p>Prótons, nêutrons e elétrons.</p>
                </div>

                <div id="topic-3-2" class="topic-content">
                    <h2>3. Estrutura Atômica Fundamental - Número Atômico (Z) e Número de Massa (A).</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-3" class="topic-content">
                    <h2>3. Estrutura Atômica Fundamental - Isótopos, Isóbaros e Isótonos.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-4" class="topic-content">
                    <h2>3. Estrutura Atômica Fundamental - Íons</h2>
                    <p>Cátions e ânions.</p>
                </div>

                <div id="topic-4-0" class="topic-content">
                    <h2>4. Tabela Periódica e Periodicidade - Organização da Tabela Periódica</h2>
                    <p>Períodos, grupos/famílias e blocos (s, p, d, f).</p>
                </div>

                <div id="topic-4-1" class="topic-content">
                    <h2>4. Tabela Periódica e Periodicidade - Classificação dos Elementos</h2>
                    <p>Metais, não-metais e semimetais.</p>
                </div>

                <div id="topic-4-2" class="topic-content">
                    <h2>4. Tabela Periódica e Periodicidade - Propriedades Periódicas</h2>
                    <p>Raio atômico, energia de ionização, afinidade eletrônica e eletronegatividade.</p>
                </div>

                <div id="topic-5-0" class="topic-content">
                    <h2>5. Ligação Química e Geometria Básica - Regra do Octeto e Estrutura de Lewis.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-5-1" class="topic-content">
                    <h2>5. Ligação Química e Geometria Básica - Ligação Iônica</h2>
                    <p>Formação de íons, forças eletrostáticas e propriedades dos compostos iónicos.</p>
                </div>

                <div id="topic-5-2" class="topic-content">
                    <h2>5. Ligação Química e Geometria Básica - Ligação Covalente</h2>
                    <p>Compartilhamento de elétrons, polaridade das ligações.</p>
                </div>

                <div id="topic-5-3" class="topic-content">
                    <h2>5. Ligação Química e Geometria Básica - Ligação Metálica</h2>
                    <p>Modelo do \"mar de elétrons\".</p>
                </div>

                <div id="topic-5-4" class="topic-content">
                    <h2>5. Ligação Química e Geometria Básica - Introdução à Geometria Molecular e Polaridade das Moléculas.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-5-5" class="topic-content">
                    <h2>5. Ligação Química e Geometria Básica - Forças Intermoleculares</h2>
                    <p>Ligações de hidrogênio, dipolo-dipolo e forças de dispersão de London.</p>
                </div>

                <div id="topic-6-0" class="topic-content">
                    <h2>6. Funções Inorgânicas (Química Descritiva Básica) - Ácidos</h2>
                    <p>Definição de Arrhenius, classificação e nomenclatura.</p>
                </div>

                <div id="topic-6-1" class="topic-content">
                    <h2>6. Funções Inorgânicas (Química Descritiva Básica) - Bases</h2>
                    <p>Propriedades, classificação e nomenclatura.</p>
                </div>

                <div id="topic-6-2" class="topic-content">
                    <h2>6. Funções Inorgânicas (Química Descritiva Básica) - Sais</h2>
                    <p>Reações de neutralização e nomenclatura.</p>
                </div>

                <div id="topic-6-3" class="topic-content">
                    <h2>6. Funções Inorgânicas (Química Descritiva Básica) - Óxidos</h2>
                    <p>Óxidos ácidos, básicos, anfóteros e neutros.</p>
                </div>

                <div id="topic-7-0" class="topic-content">
                    <h2>7. Relações Quantitativas e Estequiometria - Massa Atômica, Massa Molecular e Unidade de Massa Atômica (u).</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-7-1" class="topic-content">
                    <h2>7. Relações Quantitativas e Estequiometria - O Conceito de Mol e a Constante de Avogadro.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-7-2" class="topic-content">
                    <h2>7. Relações Quantitativas e Estequiometria - Massa Molar (g/mol) e Volume Molar dos Gases.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-7-3" class="topic-content">
                    <h2>7. Relações Quantitativas e Estequiometria - Fórmula Mínima, Centesimal e Molecular.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-7-4" class="topic-content">
                    <h2>7. Relações Quantitativas e Estequiometria - Balanceamento de Equações Químicas.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-7-5" class="topic-content">
                    <h2>7. Relações Quantitativas e Estequiometria - Cálculo Estequiométrico</h2>
                    <p>Relações de massa, mol e volume.</p>
                </div>

                <div id="topic-7-6" class="topic-content">
                    <h2>7. Relações Quantitativas e Estequiometria - Reagente Limitante, Reagente em Excesso e Rendimento de Reação.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-8-0" class="topic-content">
                    <h2>8. Soluções e Unidades de Concentração - Conceito de Soluto, Solvente e Solubilidade.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-8-1" class="topic-content">
                    <h2>8. Soluções e Unidades de Concentração - Classificação quanto à Solubilidade</h2>
                    <p>Soluções insaturadas, saturadas e supersaturadas.</p>
                </div>

                <div id="topic-8-2" class="topic-content">
                    <h2>8. Soluções e Unidades de Concentração - Unidades de Concentração</h2>
                    <p>Concentração comum (g/L), molaridade (mol/L), título/porcentagem e ppm.</p>
                </div>

                <div id="topic-8-3" class="topic-content">
                    <h2>8. Soluções e Unidades de Concentração - Diluição e Mistura de Soluções.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-9-0" class="topic-content">
                    <h2>9. Introdução à Termoquímica e Reatividade - Reações Exotérmicas e Endotérmicas.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-9-1" class="topic-content">
                    <h2>9. Introdução à Termoquímica e Reatividade - Variação de Entalpia (ΔH).</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-9-2" class="topic-content">
                    <h2>9. Introdução à Termoquímica e Reatividade - Introdução à Cinética Química</h2>
                    <p>Velocidade das reações e fatores que a afetam (temperatura, concentração, superfície de contato, catalisadores).</p>
                </div>

                <div id="topic-9-3" class="topic-content">
                    <h2>9. Introdução à Termoquímica e Reatividade - Introdução ao Equilíbrio Químico e Escala de pH / pOH.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

            </div>
        </div>
</main>` }} />
    </>
  );
}
