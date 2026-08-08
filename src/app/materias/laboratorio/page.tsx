'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function Laboratorio() {
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
                <h3>Tópicos de Laboratório</h3>
                <ul class="sidebar-menu accordion-menu" id="sidebarMenu">
                    <li class="menu-item has-submenu">
                        <div class="menu-title">1. Segurança, Boas Práticas e Organização</div>
                        <ul class="submenu">
                            <li data-target="topic-1-0">Regras de Segurança no Laboratório</li>
                            <li data-target="topic-1-1">Manuseio e Descarte de Resíduos Químicos</li>
                            <li data-target="topic-1-2">Identificação de Vidrarias, Equipamentos e Reagentes.</li>
                            <li data-target="topic-1-3">Caderno de Laboratório</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">2. Técnicas Básicas de Medição e Tratamento de Dados</div>
                        <ul class="submenu">
                            <li data-target="topic-2-0">Uso de Balança Semianalítica e Analítica</li>
                            <li data-target="topic-2-1">Medição e Transferência de Volumes</li>
                            <li data-target="topic-2-2">Erros de Medição, Algarismos Significativos e Cálculo de Incertezas.</li>
                            <li data-target="topic-2-3">Determinação Experimental da Densidade de sólidos e líquidos.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">3. Operações Fundamentais de Separação e Purificação</div>
                        <ul class="submenu">
                            <li data-target="topic-3-0">Filtração Simples e Filtração a Vácuo.</li>
                            <li data-target="topic-3-1">Decantação e Centrifugação.</li>
                            <li data-target="topic-3-2">Evaporação e Cristalização/Recristalização.</li>
                            <li data-target="topic-3-3">Destilação Simples e Fracionada.</li>
                            <li data-target="topic-3-4">Extração Líquido-Líquido com funil de separação.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">4. Preparo e Padronização de Soluções</div>
                        <ul class="submenu">
                            <li data-target="topic-4-0">Cálculo de Reagentes (massa e volume necessários).</li>
                            <li data-target="topic-4-1">Solução Padrão e Padrão Primário.</li>
                            <li data-target="topic-4-2">Preparo de Soluções Por Diluição e Mistura.</li>
                            <li data-target="topic-4-3">Técnicas de Homogeneização.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">5. Propriedades Químicas e Reatividade (Físico-Química Prática Básica)</div>
                        <ul class="submenu">
                            <li data-target="topic-5-0">Identificação de Funções Inorgânicas (ensaios de chama, solubilidade e formação de precipitados).</li>
                            <li data-target="topic-5-1">Medição de pH</li>
                            <li data-target="topic-5-2">Análise Térmica Básica</li>
                            <li data-target="topic-5-3">Estudo Qualitativo de Reações de Oxirredução (Redox) e Combustão.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">6. Volumetria e Análise Quantitativa Básica</div>
                        <ul class="submenu">
                            <li data-target="topic-6-0">Montagem do Sistema de Titulação e uso correto da bureta.</li>
                            <li data-target="topic-6-1">Titulação Ácido-Base (Volumetria de Neutralização)</li>
                            <li data-target="topic-6-2">Curvas de Titulação e Determinação de Ponto de Equivalência.</li>
                            <li data-target="topic-6-3">Titulação de Oxirredução (ex.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">7. Cinética e Equilíbrio Químico Experimantal</div>
                        <ul class="submenu">
                            <li data-target="topic-7-0">Fatores que Afetam a Velocidade das Reações</li>
                            <li data-target="topic-7-1">Verificação Prática do Princípio de Le Chatelier (deslocamento de equilíbrio por variação de concentração e temperatura).</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">8. Síntese e Caracterização Química Introdutória</div>
                        <ul class="submenu">
                            <li data-target="topic-8-0">Síntese de um Composto Inorgânico ou Orgânico Simples (ex.</li>
                            <li data-target="topic-8-1">Rendimento Reacional e Grau de Pureza</li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <!-- Área de Conteúdo -->
            <div class="content-area">
                <div id="welcome-message" class="topic-content active">
                    <h2>Bem-vindo ao Laboratório</h2>
                    <p>Selecione um tópico no menu lateral para iniciar seus estudos.</p>
                </div>
                <div id="topic-1-0" class="topic-content">
                    <h2>1. Segurança, Boas Práticas e Organização - Regras de Segurança no Laboratório</h2>
                    <p>Uso de Equipamentos de Proteção Individual (EPIs) e Coletiva (EPCs).</p>
                </div>

                <div id="topic-1-1" class="topic-content">
                    <h2>1. Segurança, Boas Práticas e Organização - Manuseio e Descarte de Resíduos Químicos</h2>
                    <p>Simbologia de risco, rotulagem e Ficha de Informações de Segurança de Produtos Químicos (FISPQ/GHS).</p>
                </div>

                <div id="topic-1-2" class="topic-content">
                    <h2>1. Segurança, Boas Práticas e Organização - Identificação de Vidrarias, Equipamentos e Reagentes.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-1-3" class="topic-content">
                    <h2>1. Segurança, Boas Práticas e Organização - Caderno de Laboratório</h2>
                    <p>Registro de experimentos, observações e dados brutos.</p>
                </div>

                <div id="topic-2-0" class="topic-content">
                    <h2>2. Técnicas Básicas de Medição e Tratamento de Dados - Uso de Balança Semianalítica e Analítica</h2>
                    <p>Técnicas de pesagem e calibração.</p>
                </div>

                <div id="topic-2-1" class="topic-content">
                    <h2>2. Técnicas Básicas de Medição e Tratamento de Dados - Medição e Transferência de Volumes</h2>
                    <p>Manipulação de pipetas (graduadas e volumétricas), provetas, buretas e balões volumétricos.</p>
                </div>

                <div id="topic-2-2" class="topic-content">
                    <h2>2. Técnicas Básicas de Medição e Tratamento de Dados - Erros de Medição, Algarismos Significativos e Cálculo de Incertezas.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-2-3" class="topic-content">
                    <h2>2. Técnicas Básicas de Medição e Tratamento de Dados - Determinação Experimental da Densidade de sólidos e líquidos.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-0" class="topic-content">
                    <h2>3. Operações Fundamentais de Separação e Purificação - Filtração Simples e Filtração a Vácuo.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-1" class="topic-content">
                    <h2>3. Operações Fundamentais de Separação e Purificação - Decantação e Centrifugação.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-2" class="topic-content">
                    <h2>3. Operações Fundamentais de Separação e Purificação - Evaporação e Cristalização/Recristalização.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-3" class="topic-content">
                    <h2>3. Operações Fundamentais de Separação e Purificação - Destilação Simples e Fracionada.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-3-4" class="topic-content">
                    <h2>3. Operações Fundamentais de Separação e Purificação - Extração Líquido-Líquido com funil de separação.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-4-0" class="topic-content">
                    <h2>4. Preparo e Padronização de Soluções - Cálculo de Reagentes (massa e volume necessários).</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-4-1" class="topic-content">
                    <h2>4. Preparo e Padronização de Soluções - Solução Padrão e Padrão Primário.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-4-2" class="topic-content">
                    <h2>4. Preparo e Padronização de Soluções - Preparo de Soluções Por Diluição e Mistura.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-4-3" class="topic-content">
                    <h2>4. Preparo e Padronização de Soluções - Técnicas de Homogeneização.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-5-0" class="topic-content">
                    <h2>5. Propriedades Químicas e Reatividade (Físico-Química Prática Básica) - Identificação de Funções Inorgânicas (ensaios de chama, solubilidade e formação de precipitados).</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-5-1" class="topic-content">
                    <h2>5. Propriedades Químicas e Reatividade (Físico-Química Prática Básica) - Medição de pH</h2>
                    <p>Uso de papéis indicadores e pHmetro digital.</p>
                </div>

                <div id="topic-5-2" class="topic-content">
                    <h2>5. Propriedades Químicas e Reatividade (Físico-Química Prática Básica) - Análise Térmica Básica</h2>
                    <p>Curvas de aquecimento/resfriamento e determinação de ponto de fusão/ebulição.</p>
                </div>

                <div id="topic-5-3" class="topic-content">
                    <h2>5. Propriedades Químicas e Reatividade (Físico-Química Prática Básica) - Estudo Qualitativo de Reações de Oxirredução (Redox) e Combustão.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-6-0" class="topic-content">
                    <h2>6. Volumetria e Análise Quantitativa Básica - Montagem do Sistema de Titulação e uso correto da bureta.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-6-1" class="topic-content">
                    <h2>6. Volumetria e Análise Quantitativa Básica - Titulação Ácido-Base (Volumetria de Neutralização)</h2>
                    <p>Uso de indicadores visuais (ex.</p>
                </div>

                <div id="topic-6-2" class="topic-content">
                    <h2>6. Volumetria e Análise Quantitativa Básica - Curvas de Titulação e Determinação de Ponto de Equivalência.</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-6-3" class="topic-content">
                    <h2>6. Volumetria e Análise Quantitativa Básica - Titulação de Oxirredução (ex.</h2>
                    <p>Permanganimetria) e Volumetria de Complexometria (ex.</p>
                </div>

                <div id="topic-7-0" class="topic-content">
                    <h2>7. Cinética e Equilíbrio Químico Experimantal - Fatores que Afetam a Velocidade das Reações</h2>
                    <p>Temperatura, concentração, superfície de contato e catalisadores.</p>
                </div>

                <div id="topic-7-1" class="topic-content">
                    <h2>7. Cinética e Equilíbrio Químico Experimantal - Verificação Prática do Princípio de Le Chatelier (deslocamento de equilíbrio por variação de concentração e temperatura).</h2>
                    <p>Conteúdo em desenvolvimento...</p>
                </div>

                <div id="topic-8-0" class="topic-content">
                    <h2>8. Síntese e Caracterização Química Introdutória - Síntese de um Composto Inorgânico ou Orgânico Simples (ex.</h2>
                    <p>síntese da aspirina, obtenção do sabão por saponificação ou síntese de sais de coordenação).</p>
                </div>

                <div id="topic-8-1" class="topic-content">
                    <h2>8. Síntese e Caracterização Química Introdutória - Rendimento Reacional e Grau de Pureza</h2>
                    <p>Rendimento teórico, real e percentual.</p>
                </div>

            </div>
        </div>
</main>` }} />
    </>
  );
}
