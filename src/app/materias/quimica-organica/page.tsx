'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function QuimicaOrganica() {
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
                <h3>Tópicos de Química Orgânica</h3>
                <ul class="sidebar-menu accordion-menu" id="sidebarMenu">
                    <li class="menu-item has-submenu">
                        <div class="menu-title">1. Fundamentos de Estrutura e Ligação</div>
                        <ul class="submenu">
                            <li data-target="topic-1-0">🧬 Introdução</li>
                            <li data-target="topic-1-1">⚛️ 1. Revisão de Química Geral</li>
                            <li data-target="topic-1-2">📐 2. Geometria Molecular e Hibridização</li>
                            <li data-target="topic-1-3">📝 3. Fórmulas e Representações</li>
                            <li data-target="topic-1-4">💫 4. Ressonância e Cargas Formais</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">2. Ácidos e Bases em Química Orgânica</div>
                        <ul class="submenu">
                            <li data-target="topic-2-0">🧠 Introdução</li>
                            <li data-target="topic-2-1">🔍 1. As Três Lentes Mágicas</li>
                            <li data-target="topic-2-2">📏 2. O Termômetro da Força</li>
                            <li data-target="topic-2-3">🏗️ 3. O Segredo da Estabilidade</li>
                            <li data-target="topic-2-4">🧬 4. Ácidos e Bases no Mundo Orgânico</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">3. Alcanos e Cicloalcanos (Hidrocarbonetos Saturados)</div>
                        <ul class="submenu">
                            <li data-target="topic-3-0">A Química do Movimento</li>
                            <li data-target="topic-3-1">Nomenclatura IUPAC</li>
                            <li data-target="topic-3-2">Propriedades Físicas</li>
                            <li data-target="topic-3-3">Análise Conformacional</li>
                            <li data-target="topic-3-4">O Ciclo-hexano</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">4. Estereoquímica</div>
                        <ul class="submenu">
                            <li data-target="topic-4-1">Quiralidade e Centros Estereogênicos (Carbonos Quirais).</li>
                            <li data-target="topic-4-2">Configuração Absoluta (\$R\$/\$S\$)</li>
                            <li data-target="topic-4-3">Enantiômeros, Diastereoisômeros e Compostos Meso.</li>
                            <li data-target="topic-4-4">Atividade Óptica e Excesso Enantiomérico.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">5. Introdução às Reações Orgânicas e Mecanismos</div>
                        <ul class="submenu">
                            <li data-target="topic-5-1">Tipos de Reações</li>
                            <li data-target="topic-5-2">Intermediários de Reação</li>
                            <li data-target="topic-5-3">Termodinâmica e Cinética</li>
                            <li data-target="topic-5-4">Mecanismos de Setas Curvas</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">6. Haletos de Alquila: Substituição Nucleofílica e Eliminação</div>
                        <ul class="submenu">
                            <li data-target="topic-6-1">Mecanismos de Substituição Nucleofílica</li>
                            <li data-target="topic-6-2">Mecanismos de Eliminação</li>
                            <li data-target="topic-6-3">Competição entre \$S_N1\$, \$S_N2\$, \$E1\$ e \$E2\$.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">7. Alcenos e Alcinos (Hidrocarbonetos Insaturados)</div>
                        <ul class="submenu">
                            <li data-target="topic-7-1">Nomenclatura, Estrutura e Isomerias (\$E\$/\$Z\$, \$cis\$/\$trans\$).</li>
                            <li data-target="topic-7-2">Reações de Adição Eletrofílica em Alcenos</li>
                            <li data-target="topic-7-3">Reações em Alcinos</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">8. Química dos Radicais</div>
                        <ul class="submenu">
                            <li data-target="topic-8-1">Halogenação de Alcanos (Iniciação, Propagação e Terminação).</li>
                            <li data-target="topic-8-2">Seletividade de Halogenação (Cloração vs. Bromação).</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">9. Alcoóis, Éteres, Epóxidos e Tióis</div>
                        <ul class="submenu">
                            <li data-target="topic-9-1">Propriedades Físicas e Nomenclatura.</li>
                            <li data-target="topic-9-2">Síntese e Reações de Alcoóis</li>
                            <li data-target="topic-9-3">Síntese e Abertura de Anel de Epóxidos.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">10. Métodos Espectroscópicos e Análise Estrutural</div>
                        <ul class="submenu">
                            <li data-target="topic-10-1">Espectroscopia de Infravermelho (IV)</li>
                            <li data-target="topic-10-2">Ressonância Magnética Nuclear (\$^1H\$-RMN e \$^{13}C\$-RMN)</li>
                            <li data-target="topic-10-3">Espectrometria de Massas (EM)</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">11. Aromáticos e Substituição Eletrofílica Aromática</div>
                        <ul class="submenu">
                            <li data-target="topic-11-1">Aromaticidade e Regra de Hückel.</li>
                            <li data-target="topic-11-2">Reações de Substituição Eletrofílica Aromática (SEAr)</li>
                            <li data-target="topic-11-3">Efeito dos Substituintes</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">12. Aldeídos e Cetonas (Adição Nucleofílica)</div>
                        <ul class="submenu">
                            <li data-target="topic-12-1">Estrutura e Reatividade do Grupo Carbonila.</li>
                            <li data-target="topic-12-2">Adição Nucleofílica</li>
                            <li data-target="topic-12-3">Reações com Reagentes de Grignard e Reduções.</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">13. Ácidos Carboxílicos e Derivados</div>
                        <ul class="submenu">
                            <li data-target="topic-13-1">Estrutura, Nomenclatura e Acidez dos Ácidos Carboxílicos.</li>
                            <li data-target="topic-13-2">Derivados de Carbonila</li>
                            <li data-target="topic-13-3">Substituição Nucleofílica Acílica</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">14. Química de Enóis e Enolatos</div>
                        <ul class="submenu">
                            <li data-target="topic-14-1">Tautomerização Ceto-Enólica.</li>
                            <li data-target="topic-14-2">Halogenação na Posição Alfa.</li>
                            <li data-target="topic-14-3">Reações de Condensação</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">15. Aminas</div>
                        <ul class="submenu">
                            <li data-target="topic-15-1">Estrutura, Nomenclatura e Basicidade.</li>
                            <li data-target="topic-15-2">Síntese e Reações de Aminas</li>
                        </ul>
                    </li>
                    <li class="menu-item has-submenu">
                        <div class="menu-title">16. Bioquímica e Biomoléculas (Introdução)</div>
                        <ul class="submenu">
                            <li data-target="topic-16-1">Carboidratos</li>
                            <li data-target="topic-16-2">Aminoácidos, Peptídeos e Proteínas</li>
                            <li data-target="topic-16-3">Lipídios e Ácidos Graxos.</li>
                            <li data-target="topic-16-4">Ácidos Nucleicos (DNA e RNA).</li>
                        </ul>
                    </li>
                </ul>
            </aside>

            <!-- Conteúdo Principal -->
            <section class="content-area">
                <div id="welcome-message" class="topic-content active">
                    <h2>Bem-vindo à Química Orgânica</h2>
                    <p>Selecione um tópico no menu lateral para iniciar seus estudos.</p>
                </div>
                <div id="topic-1-0" class="topic-content">
                    <h2>🧬 Fundamentos de Estrutura e Ligação: A Arquitetura Invisível do Universo</h2>
                    <p>Seja muito bem-vindo! Hoje você vai descobrir como os blocos de construção invisíveis do universo se unem para formar tudo o que você vê, toca e sente. Para nos ajudar nessa jornada espacial, vamos treinar o seu cérebro usando comparações visuais e mapas mentais.</p>
                    <img src="/quimica-total/assets/01.png" alt="Introdução - Fundamentos de Estrutura" style="display: block; margin: 20px auto 0 auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>

                <div id="topic-1-1" class="topic-content">
                    <h2>⚛️ 1. Revisão de Química Geral: O "Cabo de Guerra" Atômico</h2>
                    <p>No nível mais básico, os átomos buscam uma única coisa na vida: estabilidade. Quase todos os átomos querem ter 8 elétrons na sua última camada (a camada de valência) para se sentirem estáveis como os gases nobres. Esse comportamento é conhecido como a <strong>Regra do Octeto</strong>.</p>
                    <img src="/quimica-total/assets/oct.png" alt="Regra do Octeto" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <p>Para conseguir esses 8 elétrons, eles realizam dois tipos principais de transações:</p>
                    <h3>A) Ligação Iônica vs. Ligação Covalente</h3>
                    <ul>
                        <li><strong>Ligação Iônica (O "Presente de Grego"):</strong> Ocorre quando um átomo muito forte (faminto por elétrons) encontra um átomo muito fraco. O forte literalmente rouba o elétron do fraco. Isso cria partículas carregadas: um cátion (positivo, quem perdeu) e um ânion (negativo, quem ganhou). Eles ficam unidos não por estarem dividindo algo, mas pela forte atração eletrostática entre suas cargas opostas (como o lado positivo e negativo de ímãs).<br>
                        <em>Exemplo:</em> O sal de cozinha (NaCl).
                        <img src="/quimica-total/assets/lig_io.png" alt="Ligação Iônica" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Ligação Covalente (A "Guarda Compartilhada"):</strong> Ocorre quando os átomos têm forças parecidas. Nenhum consegue roubar o elétron do outro. A solução? Eles decidem compartilhar seus elétrons para que ambos completem o seu octeto.<br>
                        <em>Exemplo:</em> A molécula de água ou o gás oxigênio.
                        <img src="/quimica-total/assets/lig-cov.png" alt="Ligação Covalente" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                    </ul>
                    <h3>B) Eletronegatividade e Polaridade: O Jogo de Forças</h3>
                    <p>A eletronegatividade é a medida do "poder de atração" de um átomo para puxar os elétrons de uma ligação para perto de si.</p>
                    <ul>
                        <li><strong>A Regra da Tabela:</strong> A eletronegatividade cresce da esquerda para a direita e de baixo para cima na tabela periódica (o Flúor é o elemento mais eletronegativo do universo!).
                        <img src="/quimica-total/assets/tp.png" alt="Tabela Periódica Eletronegatividade" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Ligação Covalente Polar:</strong> Quando os átomos compartilham elétrons, mas um deles é mais eletronegativo, ele puxa a "nuvem" de elétrons para o seu lado. Isso cria uma carga parcial negativa (\(\delta^-\)) no átomo forte e uma carga parcial positiva (\(\delta^+\)) no átomo que ficou "desprotegido".
                        <img src="/quimica-total/assets/lig_po.png" alt="Ligação Covalente Polar" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <strong>💡 NeuroDica:</strong> Pense nisso como dividir um cobertor de casal com alguém que puxa o cobertor a noite toda. O cobertor é o par de elétrons; quem puxa fica com a carga negativa (\(\delta^-\)) e quem passa frio fica com a carga positiva (\(\delta^+\)).
                        </li>
                        <li><strong>Ligação Covalente Apolar:</strong> Se os átomos têm a mesma eletronegatividade, a divisão é perfeitamente igual (sem polaridade).
                        <img src="/quimica-total/assets/lig_apo.png" alt="Ligação Covalente Apolar" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                    </ul>
                </div>

                <div id="topic-1-2" class="topic-content">
                    <h2>📐 2. Geometria Molecular e Hibridização: O "Liquidificador" de Orbitais</h2>
                    <p>Como as moléculas se parecem no espaço 3D? O carbono (o protagonista da Química Orgânica) faz algo incrível: ele mistura seus orbitais de valência (orbitais \(s\) e \(p\)) para criar novos caminhos no espaço. Esse processo é chamado de <strong>hibridização</strong>.</p>
                    <p>Imagine a hibridização como misturar copos de tinta colorida:</p>
                    <ul>
                        <li><strong>A) Hibridização \(sp^3\) (O Tetraedro 3D):</strong><br>
                        <em>A Mistura:</em> O carbono bate no "liquidificador" 1 orbital \(s\) e 3 orbitais \(p\), gerando 4 orbitais híbridos \(sp^3\) idênticos.<br>
                        <em>Geometria:</em> Tetraédrica (como um tripé de câmera com uma haste para cima). As ligações apontam para os vértices de um tetraedro com ângulos exatos de 109,5°.<br>
                        <em>As ligações:</em> Todas as ligações simples carbono-carbono ou carbono-hidrogênio são chamadas de ligações sigma (\(\sigma\)), que são simétricas e formadas por uma sobreposição direta ("de testa") dos orbitais.
                        <img src="/quimica-total/assets/sp3.png" alt="Hibridização sp3" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        
                        <li><strong>B) Hibridização \(sp^2\) (O Triângulo Plano):</strong><br>
                        <em>A Mistura:</em> Mistura-se 1 orbital \(s\) e 2 orbitais \(p\). Um dos orbitais \(p\) originais fica "puro" e não entra no liquidificador.<br>
                        <em>Geometria:</em> Trigonal Plana (completamente achatada no papel) com ângulos de 120°.<br>
                        <em>A Ligação Dupla:</em> Quando temos uma ligação dupla entre carbonos, ela é formada por dois componentes: uma ligação sigma (\(\sigma\)) central e uma ligação pi (\(\pi\)), formada pela atração lateral ("lado a lado") dos orbitais \(p\) que ficaram puros, criando uma nuvem eletrônica acima e abaixo do plano da molécula.
                        <img src="/quimica-total/assets/sp2.png" alt="Hibridização sp2" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        
                        <li><strong>C) Hibridização \(sp\) (A Linha Reta):</strong><br>
                        <em>A Mistura:</em> Mistura-se 1 orbital \(s\) e 1 orbital \(p\), deixando 2 orbitais \(p\) puros.<br>
                        <em>Geometria:</em> Linear com ângulo de 180°.<br>
                        <em>A Ligação Tripla:</em> Formada por 1 ligação sigma (\(\sigma\)) e 2 ligações pi (\(\pi\)) paralelas que envolvem o eixo de ligação.
                        <img src="/quimica-total/assets/sp.png" alt="Hibridização sp" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                    </ul>
                </div>

                <div id="topic-1-3" class="topic-content">
                    <h2>📝 3. Fórmulas e Representações: Escrevendo Química sem Esforço</h2>
                    <p>Para poupar energia e processar informações de forma rápida, os químicos desenvolveram linguagens visuais para desenhar moléculas:</p>
                    <ul>
                        <li><strong>Estruturas de Lewis (Fórmula de Pontos):</strong> Mostra todos os elétrons da última camada como pontinhos e traços. É excelente para iniciantes, mas lenta para desenhar.
                        <img src="/quimica-total/assets/fo_lew.png" alt="Estruturas de Lewis" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <strong>Mnemônico HONC:</strong> Lembra o número típico de ligações de cada elemento: Hidrogênio faz 1 ligação, Oxigênio faz 2, Nitrogênio faz 3 e Carbono faz 4.
                        <img src="/quimica-total/assets/fo_hon.png" alt="Mnemônico HONC" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Fórmula Molecular:</strong> Apenas resume o total de elementos (ex: C\(_3\)H\(_8\)O). Não nos mostra a arquitetura tridimensional da molécula.
                        <img src="/quimica-total/assets/fo_mol.png" alt="Fórmula Molecular" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Notação em Bastão (Linhas de Ligação):</strong> A linguagem favorita e mais rápida!<br>
                        - Cada linha é uma ligação.<br>
                        - Cada quina (vértice) ou final de linha representa um átomo de Carbono (você não escreve a letra 'C').<br>
                        - Os Hidrogênios ligados ao carbono ficam ocultos. O cérebro do estudante os calcula sabendo que o carbono precisa sempre completar 4 ligações.<br>
                        - Átomos diferentes de carbono e hidrogênio (como O, N, Cl) precisam ser escritos explicitamente, bem como seus hidrogênios.
                        <img src="/quimica-total/assets/fo_bas.png" alt="Notação em Bastão" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                    </ul>
                </div>

                <div id="topic-1-4" class="topic-content">
                    <h2>💫 4. Ressonância e Cargas Formais: O Segredo do Equilíbrio</h2>
                    <h3>A) Ressonância: Dividindo o Peso das Cargas</h3>
                    <p>Muitas vezes, uma única estrutura de desenho não consegue descrever perfeitamente uma molécula. A ressonância ocorre quando elétrons de ligações múltiplas (\(\pi\)) ou elétrons isolados mudam de lugar, enquanto os núcleos dos átomos continuam fixos.</p>
                    <ul>
                        <li><strong>A Grande Verdade:</strong> A molécula real não fica alternando entre os desenhos. Ela é um híbrido de ressonância (uma média matemática estável das estruturas contribuintes).</li>
                        <li><strong>🧠 Analogia:</strong> Pense em uma cor amarela e uma azul que se misturam para dar origem ao verde. O verde não fica piscando azul-amarelo-azul; ele é uma cor única e estável. Do mesmo modo, o híbrido é uma estrutura real estável.</li>
                        <li><strong>Estabilização:</strong> Distribuir (deslocalizar) a carga elétrica ou os elétrons por vários átomos diminui a energia da molécula e a torna muito mais estável.</li>
                    </ul>
                    <img src="/quimica-total/assets/res.png" alt="Ressonância" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <h3>B) Cargas Formais: Quem tem Mais e Quem tem Menos?</h3>
                    <p>A carga formal é uma contabilidade rápida que nos diz se um átomo em um desenho de Lewis ganhou ou perdeu elétrons em comparação ao seu estado neutro de tabela periódica. Calculamos assim:</p>
                    <p><strong>Carga Formal = (Elétrons de valência do elemento livre) - (Elétrons não compartilhados) - \(\frac{1}{2}\)(Elétrons das ligações)</strong></p>
                    <p>Em estruturas de Lewis muito estáveis, os átomos costumam ter cargas formais próximas ou iguais a zero.</p>
                    <img src="/quimica-total/assets/cf.png" alt="Cargas Formais" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>

                <div id="topic-2-0" class="topic-content">
                    <h2>🧠 Desvendando a Química Ácido-Base: O Segredo das Cores e Sabores</h2>
                    <p>Você já reparou que as hortênsias mudam de cor dependendo do solo? Em solos com pH elevado (básicos) elas ficam rosas, mas em solos ácidos elas se tornam azuis! Ou talvez você já tenha sentido a ardência da picada de uma formiga, causada pelo ácido fórmico injetado em sua pele. Todos esses fenômenos cotidianos são governados pela química dos ácidos e bases.</p>
                    <img src="/quimica-total/assets/hort.png" alt="Hortênsias Ácido-Base" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <p>Para que nosso cérebro processe esse tema de forma simples e conectada, vamos usar três lentes mágicas (as teorias químicas) para enxergar como essas substâncias funcionam, entender como medimos a força delas e descobrir os segredos de suas estruturas moleculares.</p>
                </div>

                <div id="topic-2-1" class="topic-content">
                    <h2>🔍 1. As Três Lentes Mágicas (Teorias Fundamentais)</h2>
                    <p>Para entender a natureza, os químicos criaram três formas principais de classificar ácidos e bases:</p>
                    <ul>
                        <li><strong>A Lente de Arrhenius (Foco na Água):</strong> É a mais clássica. Um ácido é uma substância que libera íons hidrogênio (H\(^+\)) na água, enquanto uma base libera íons hidróxido (OH\(^-\)). É uma definição simples, mas restrita apenas ao que acontece em soluções aquosas.
                        <img src="/quimica-total/assets/te_arr.png" alt="A Lente de Arrhenius" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>A Lente de Brønsted-Lowry (O Jogo de "Pega-Próton"):</strong> Aqui, o foco é a transferência de um próton (H\(^+\)).<br>
                        <strong>Ácido:</strong> é o doador de próton.<br>
                        <strong>Base:</strong> é o receptor de próton.<br>
                        <strong>🧠 A Regra da Gangorra:</strong> Toda vez que um ácido doa um próton, ele se transforma em uma base conjugada, e quando a base recebe o próton, vira um ácido conjugado. A regra de ouro é: quanto mais forte o ácido, mais fraca será sua base conjugada.
                        <img src="/quimica-total/assets/te_bl.png" alt="A Lente de Brønsted-Lowry" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>A Lente de Lewis (O Foco nos Elétrons):</strong> Esta é a ferramenta suprema para a Química Orgânica! Em vez de olhar para os prótons, olhamos para os elétrons.<br>
                        <strong>Ácido de Lewis:</strong> É o receptor de pares de elétrons. Na química orgânica, costumamos chamá-lo de eletrófilo (aquele que "ama" elétrons e procura cargas negativas).<br>
                        <strong>Base de Lewis:</strong> É a doadora de pares de elétrons. É chamada de nucleófilo (procura centros positivos).
                        <img src="/quimica-total/assets/te_lew.png" alt="A Lente de Lewis" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                    </ul>
                </div>

                <div id="topic-2-2" class="topic-content">
                    <h2>📏 2. O Termômetro da Força: K\(_a\) e pK\(_a\)</h2>
                    <p>Como sabemos se um ácido é forte (como o do nosso estômago) ou fraco (como o vinagre da salada)? Usamos uma constante de equilíbrio chamada K\(_a\).</p>
                    <ul>
                        <li>Quanto maior o valor de K\(_a\), mais forte é o ácido porque ele se dissocia quase completamente na água.</li>
                        <li>Porém, como esses números são muitas vezes pequenos e cheios de zeros, os químicos usam um truque matemático para facilitar a memorização: o pK\(_a\), onde pK\(_a\) = \(-\log K_a\).</li>
                        <li><strong>⚠️ Atenção para a pegadinha do cérebro:</strong> Por causa do sinal negativo na fórmula matemática, a relação se inverte! Quanto menor for o valor do pK\(_a\), mais forte é o ácido.</li>
                    </ul>
                    <p><em>Exemplo:</em> O ácido clorídrico (muito forte) tem um pK\(_a\) de -7, enquanto o ácido acético do vinagre (fraco) tem um pK\(_a\) de 4,75.</p>
                    <img src="/quimica-total/assets/pka.png" alt="O Termômetro da Força" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>

                <div id="topic-2-3" class="topic-content">
                    <h2>🏗️ 3. O Segredo da Estabilidade (Estrutura e Acidez)</h2>
                    <p>Por que algumas moléculas orgânicas são muito ácidas e outras não? <strong>O grande segredo da química orgânica está na estabilidade da base conjugada.</strong> Se a molécula conseguir suportar bem a carga elétrica negativa que sobra após perder o próton, o ácido original será forte.</p>
                    <p>Nosso cérebro pode mapear isso em três regras simples de estrutura:</p>
                    <ul>
                        <li><strong>Eletronegatividade (Quem puxa mais forte?):</strong> Em um mesmo período da tabela periódica, átomos mais eletronegativos (como o Flúor) polarizam mais a ligação e estabilizam melhor a carga negativa. Por isso, a acidez aumenta da esquerda para a direita: o HF (ácido fluorídrico) é muito mais ácido que a água (H\(_2\)O), que por sua vez é mais ácida que a amônia (NH\(_3\)).
                        <img src="/quimica-total/assets/ab_ele.png" alt="Eletronegatividade" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Hibridização (Onde os elétrons se escondem):</strong> Os elétrons que ficam em orbitais do tipo \(s\) estão mais próximos do núcleo positivo do átomo, ficando mais estáveis. É por isso que hidrocarbonetos com ligações triplas terminais (carbonos com hibridização \(sp\)) são muito mais ácidos (pK\(_a \approx 25\)) do que aqueles com ligações duplas (\(sp^2\), pK\(_a = 44\)) ou simples (\(sp^3\), pK\(_a = 50\)).
                        <img src="/quimica-total/assets/ab_hib.png" alt="Hibridização e Acidez" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Ressonância e Efeito Indutivo (Dividindo o peso):</strong> Imagine carregar uma mochila super pesada de um lado só do corpo. É difícil, certo? A ressonância faz com que a molécula "divida o peso" da carga elétrica por vários átomos, diminuindo a energia potencial e trazendo muita estabilidade. É por isso que o ácido acético é muito mais forte que o álcool comum: a carga negativa do seu íon carboxilato é dividida perfeitamente entre dois átomos de oxigênio. Além disso, átomos eletronegativos vizinhos (como o Cloro) ajudam a puxar essa carga negativa através das ligações (o chamado efeito indutivo), aumentando ainda mais a força do ácido.
                        <img src="/quimica-total/assets/ab_res.png" alt="Ressonância e Efeito Indutivo" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                    </ul>
                </div>

                <div id="topic-2-4" class="topic-content">
                    <h2>🧬 4. Ácidos e Bases no Mundo Orgânico</h2>
                    <p>Agora, vamos ligar tudo isso aos compostos que formam a vida e os materiais ao nosso redor:</p>
                    <ul>
                        <li><strong>Ácidos Carboxílicos (R-COOH):</strong> São os ácidos fracos clássicos da química orgânica, com valores de pK\(_a\) variando de 3 a 5. Estão presentes em frutas, no vinagre e no nosso suor.
                        <img src="/quimica-total/assets/ab_ac.png" alt="Ácidos Carboxílicos" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Aminas (R-NH\(_2\)):</strong> Podem ser vistas como derivadas orgânicas da amônia. Como o nitrogênio possui um par de elétrons não compartilhado pronto para ser doado, as aminas atuam como excelentes bases.
                        <img src="/quimica-total/assets/ab_ami.png" alt="Aminas" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                        <li><strong>Álcoois e Éteres como bases?</strong> Sim! Se você colocar um álcool ou um éter na presença de um ácido muito forte (como o HCl), o átomo de oxigênio deles usará seus elétrons não compartilhados para "capturar" um próton (H\(^+\)), atuando como uma base e formando um íon com carga positiva chamado íon oxônio. Transferências de prótons como essas costumam ser a primeira etapa fundamental em muitas reações da química orgânica.
                        <img src="/quimica-total/assets/ab_alc.png" alt="Álcoois e Éteres" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        </li>
                    </ul>
                </div>

                <div id="topic-3-0" class="topic-content">
                    <h2>🚗 A Química do Movimento: Alcanos e Cicloalcanos</h2>
                    <p>Os alcanos e cicloalcanos são a espinha dorsal do nosso mundo moderno. Eles estão presentes no gás de cozinha (GLP), na gasolina que move os carros, no óleo diesel, no asfalto e até mesmo na cera das velas. Mas o que torna essas moléculas, formadas exclusivamente por carbono e hidrogênio, tão especiais? Hoje vamos entender a "gramática" para dar nome a elas, como suas formas físicas determinam seu comportamento e como elas se contorcem e se dobram no espaço em 3D.</p>
                    <img src="/quimica-total/assets/alc_int.png" alt="A Química do Movimento" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
                </div>
                
                <div id="topic-3-1" class="topic-content">
                    <h2>🏷️ 1. Nomenclatura IUPAC: Dando Nome aos Bois (ou melhor, aos Carbonos)</h2>
                    <p>A União Internacional de Química Pura e Aplicada (IUPAC) criou uma linguagem universal para que um químico no Brasil ou no Japão saiba exatamente de qual molécula estamos falando. Pense na nomenclatura como uma receita de três partes: <strong>Prefixo (número de carbonos) + Infixo (tipo de ligação) + Sufixo (grupo funcional)</strong>.</p>
                    
                    <h3>A) Alcanos de Cadeia Linear (Normais)</h3>
                    <p>Para alcanos de cadeia contínua e sem ramificações, usamos o sufixo <strong>-ano</strong> (que indica ligações simples). O prefixo indica o número total de carbonos:</p>
                    <ul>
                        <li><strong>1 Carbono:</strong> Met- + -ano = <strong>Metano</strong> (gás natural)</li>
                        <li><strong>2 Carbonos:</strong> Et- + -ano = <strong>Etano</strong></li>
                        <li><strong>3 Carbonos:</strong> Prop- + -ano = <strong>Propano</strong></li>
                        <li><strong>4 Carbonos:</strong> But- + -ano = <strong>Butano</strong></li>
                    </ul>
                    <img src="/quimica-total/assets/alc_nom_alc.png" alt="Nomenclatura de Alcanos" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
                    <p><strong>🧠 Mnemônico Neurocognitivo:</strong> Para memorizar os quatro primeiros prefixos (que são históricos e não gregos), use a frase clássica:<br>
                    <strong>M</strong>aria <strong>E</strong>steve <strong>P</strong>arada <strong>B</strong>ebendo (<strong>M</strong>et-, <strong>E</strong>t-, <strong>P</strong>rop-, <strong>B</strong>ut-)!</p>
                    
                    <p>A partir de 5 carbonos, usamos prefixos gregos comuns: <strong>Pentano</strong> (5), <strong>Hexano</strong> (6), <strong>Heptano</strong> (7), <strong>Octano</strong> (8), <strong>Nonano</strong> (9) e <strong>Decano</strong> (10).</p>
                    
                    <h3>B) Grupos Alquila (Substituintes)</h3>
                    <p>Quando removemos um átomo de hidrogênio de um alcano normal, formamos um "ramo" ou <strong>grupo alquila</strong>, cujo nome troca o sufixo <em>-ano</em> por <strong>-ila</strong> ou <em>-il</em>. Os principais são:</p>
                    <ul>
                        <li><strong>Metila:</strong> \(-CH_3\)</li>
                        <li><strong>Etila:</strong> \(-CH_2CH_3\)</li>
                        <li><strong>Propila:</strong> \(-CH_2CH_2CH_3\)</li>
                        <li><strong>Isopropila (ou 1-metiletila):</strong> O ramo se liga pelo carbono do meio.</li>
                    </ul>
                    
                    <p>Para cadeias com 4 carbonos, os grupos ramificados mais importantes que você deve memorizar são:</p>
                    <ul>
                        <li><strong>Butila:</strong> Cadeia linear com ligação na ponta.</li>
                        <li><strong>Isobutila (2-metilpropila):</strong> Liga-se pela ponta de uma estrutura em "Y".</li>
                        <li><strong>sec-Butila (1-metilpropila):</strong> Liga-se pelo carbono secundário (segundo carbono da cadeia de quatro).</li>
                        <li><strong>terc-Butila (1,1-dimetiletila):</strong> Um carbono central ligado a três grupos metila. É muito volumoso!</li>
                    </ul>
                    <img src="/quimica-total/assets/alc_nom_alq.png" alt="Grupos Alquila" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
                    
                    <h3>C) Alcanos de Cadeia Ramificada: O Passo a Passo Sem Erros</h3>
                    <p>Para dar nome a alcanos ramificados, siga este protocolo em seu cérebro:</p>
                    <ol>
                        <li><strong>Ache a Cadeia Principal:</strong> É a maior sequência <em>contínua</em> de átomos de carbono. Cuidado! Ela não precisa estar necessariamente em linha reta no papel.</li>
                        <li><strong>Numere os Carbonos:</strong> Comece a numerar pela extremidade que estiver <strong>mais próxima</strong> de qualquer ramificação. Isso garante que os grupos substituintes recebam os menores números possíveis (localizadores).</li>
                        <li><strong>Monte o Nome:</strong> Escreva os nomes das ramificações em <strong>ordem alfabética</strong>, precedidos pelos seus respectivos números localizadores. Por fim, junte o nome da cadeia principal.
                            <ul>
                                <li><em>Nota de Ordem Alfabética:</em> Prefixos de quantidade como <em>di-</em>, <em>tri-</em> e os prefixos estruturais hifenizados como <em>sec-</em> e <em>terc-</em> <strong>não</strong> contam para a ordem alfabética (terc-butila é considerado na letra <strong>B</strong>). O prefixo <strong>iso</strong> conta na letra <strong>I</strong>.</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h3>D) Cicloalcanos</h3>
                    <p>São hidrocarbonetos saturados fechados em anéis. Eles recebem o prefixo <strong>ciclo-</strong> antes do nome do alcano correspondente (ex: ciclopropano, ciclobutano, ciclopentano, ciclo-hexano).</p>
                    <ul>
                        <li>Se houver apenas um substituinte, não é necessário numerar.</li>
                        <li>Se houver dois ou mais, numeramos a partir do substituinte que vem primeiro na ordem alfabética, girando no sentido que dê os menores números possíveis para as outras posições.</li>
                    </ul>
                    <img src="/quimica-total/assets/alc_nom_calc.png" alt="Cicloalcanos" style="display: block; margin: 20px auto; max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
                </div>
                
                <div id="topic-3-2" class="topic-content">
                    <h2>🌡️ 2. Propriedades Físicas: A Dança das Moléculas</h2>
                    <p>As propriedades físicas dependem diretamente das <strong>forças intermoleculares</strong>. Como os alcanos e cicloalcanos são formados apenas por carbono e hidrogênio, que possuem eletronegatividades muito próximas, eles são moléculas <strong>completamente apolares</strong>.</p>
                    
                    <h3>A) Ponto de Ebulição (PE): Área de Contato é Tudo</h3>
                    <p>No estado líquido, as moléculas apolares são mantidas unidas pelas fracas <strong>Forças de Dispersão de London</strong> (ou forças de dispersão).</p>
                    <ul>
                        <li><strong>Efeito da Massa Molecular:</strong> Quanto mais longa a cadeia carbônica, maior é o tamanho e a área superficial da molécula. Uma área de superfície maior significa mais pontos de contato para que as forças de London atuem. Portanto, o PE aumenta regularmente com a massa molecular (o metano ferve a -161 °C, o pentano a 36 °C e o decano a 174 °C).</li>
                        <li><strong>Efeito das Ramificações (O Abraço vs. O Aperto de Mão):</strong> Se compararmos isômeros (moléculas com a mesma fórmula molecular), as ramificações tornam a molécula mais compacta e arredondada (esférica). Isso diminui drasticamente a sua área superficial e, consequentemente, enfraquece as forças de dispersão.
                            <ul>
                                <li><em>Exemplo Prático:</em> O <em>pentano</em> (linear) tem PE de 36,1 °C, enquanto o <em>neopentano</em> (isômero altamente ramificado) ferve a apenas 9,5 °C!</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h3>B) Ponto de Fusão (PF): O Jogo de Tetris Molecular</h3>
                    <p>Ao contrário do ponto de ebulição, o ponto de fusão depende de quão bem as moléculas conseguem se "encaixar" ordenadamente no estado sólido (chamado de <strong>empacotamento cristalino</strong>).</p>
                    <ul>
                        <li>Alcanos com <strong>número par de carbonos</strong> se empacotam de forma mais eficiente no cristal. Por isso, eles têm forças de atração maiores e pontos de fusão anormalmente mais altos do que os vizinhos de número ímpar.</li>
                        <li><strong>Cicloalcanos</strong> possuem pontos de fusão muito superiores aos alcanos lineares correspondentes devido à sua simetria e rigidez de anel, que facilitam o encaixe cristalino.</li>
                    </ul>
                    
                    <h3>C) Solubilidade e Densidade: Por que o Óleo Flutua?</h3>
                    <ul>
                        <li><strong>"Semelhante dissolve semelhante":</strong> Como são apolares, alcanos são insolúveis em água (que é polar) e muito solúveis em outros solventes orgânicos apolares.</li>
                        <li><strong>Densidade:</strong> Todos os alcanos e cicloalcanos têm densidade menor que 1,00 g/mL (a densidade da água). É por isso que vazamentos de petróleo (rico em hidrocarbonetos) flutuam na água do mar.</li>
                    </ul>
                </div>
                
                <div id="topic-3-3" class="topic-content">
                    <h2>🌀 3. Análise Conformacional: As Contorções das Moléculas</h2>
                    <p>As ligações simples carbono-carbono (ligações sigma, \(\sigma\)) podem girar livremente. Essa rotação gera diferentes arranjos espaciais tridimensionais temporários chamados de <strong>conformações</strong> ou <strong>confôrmeros</strong>.</p>
                    
                    <p>Para analisar essas conformações, usamos a <strong>Projeção de Newman</strong>:</p>
                    <ul>
                        <li>Nós olhamos diretamente ao longo do eixo da ligação C-C.</li>
                        <li>O carbono da frente é representado por um <strong>ponto</strong> de onde saem três ligações.</li>
                        <li>O carbono de trás é representado por um <strong>círculo maior</strong>, e suas ligações saem da borda desse círculo.</li>
                    </ul>
                    
                    <pre><code>
      H          H
       \        /   &lt;- ligações do carbono de trás saem do círculo
     H--O------O--H 
       / \    / \ 
      H   H  H   H   (Projeção de Newman)
                    </code></pre>
                    
                    <h3>A) Conformações do Etano (\(CH_3-CH_3\))</h3>
                    <p>Ao girarmos a ligação central do etano, passamos por duas conformações extremas:</p>
                    <ol>
                        <li><strong>Conformação Escalonada (ou Alternada):</strong> Os átomos de hidrogênio do carbono da frente estão o mais longe possível dos hidrogênios de trás (ângulo diedro de 60°). Esta é a conformação de <strong>menor energia</strong> e <strong>mais estável</strong>, pois minimiza as repulsões estéricas e torsional entre as nuvens eletrônicas das ligações C-H.</li>
                        <li><strong>Conformação Eclipsada:</strong> Os hidrogênios da frente ficam diretamente alinhados com os de trás (ângulo diedro de 0°). É a conformação de <strong>maior energia</strong> (instável) devido à repulsão estérica das nuvens eletrônicas que estão muito próximas.</li>
                    </ol>
                    
                    <h3>B) Conformações do Butano (\(CH_3-CH_2-CH_2-CH_3\))</h3>
                    <p>Ao analisar a rotação entre os carbonos C2 e C3 do butano, o "drama" aumenta porque agora temos dois grupos volumosos de metila (\(-CH_3\)) se movimentando:</p>
                    <ul>
                        <li><strong>Conformação Anti (ou Anti-periplanar):</strong> Os dois grupos metila estão opostos (ângulo diedro de 180°). É o estado de <strong>estabilidade máxima</strong> (mínimo global de energia).</li>
                        <li><strong>Conformação Gauche (ou Sinclinal):</strong> Os dois grupos metila estão escalonados, mas próximos um do outro (ângulo diedro de 60°). Embora seja escalonada, há uma pequena repulsão estérica de aproximadamente 3,8 kJ/mol entre as metilas, tornando-a um pouco menos estável que a conformação anti.</li>
                        <li><strong>Conformação Eclipsada (Sin-periplanar):</strong> Ocorre quando os dois grupos metila eclipsam diretamente um ao outro (ângulo diedro de 0°). É o ponto de <strong>máxima energia</strong> e <strong>menor estabilidade</strong> de toda a rotação.</li>
                    </ul>
                </div>
                
                <div id="topic-3-4" class="topic-content">
                    <h2>🪑 4. O Ciclo-hexano e a "Cadeira" Perfeita</h2>
                    <p>Embora desenhemos cicloalcanos como figuras geométricas planas (como o hexágono), na realidade de três dimensões eles se dobram para aliviar tensões de anel. O <strong>ciclo-hexano</strong> é o mais estável de todos e adota duas conformações principais:</p>
                    
                    <h3>A) Cadeira vs. Barco</h3>
                    <ul>
                        <li><strong>Conformação em Cadeira (A Campeã de Estabilidade):</strong> É a forma mais estável. Nela, todos os ângulos de ligação C-C são exatamente de 109,5° (livre de tensão angular) e todas as ligações C-H estão perfeitamente escalonadas quando vistas em projeção de Newman (livre de tensão torsional). Mais de 99% das moléculas de ciclo-hexano estão nesta forma a qualquer instante!</li>
                        <li><strong>Conformação em Barco (A Tensa):</strong> Pode ser visualizada puxando-se uma das extremidades da cadeira para cima. Ela é muito menos estável devido a duas tensões:
                            <ol>
                                <li><strong>Tensão Torsional:</strong> As ligações C-H nas laterais do barco ficam eclipsadas.</li>
                                <li><strong>Interação Mastro (ou Flagpole):</strong> Os hidrogênios das duas pontas do barco (C1 e C4) ficam tão próximos que se repelem fortemente.</li>
                            </ol>
                            <ul>
                                <li><em>Barco Torcido:</em> O barco pode se flexionar ligeiramente para formar o <strong>barco torcido</strong>, aliviando parte dessas tensões.</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <pre><code>
  H            H               H   H 
   \          /                 \ /  &lt;- interações "mastro" no barco
    C________C                   C--C
   / \      / \                 / \/   C   C____C   C               C______C
 /              \             /        C                C           C          C
  (CADEIRA - Estável)            (BARCO - Instável)
                    </code></pre>
                    
                    <h3>B) Ligações Axiais e Equatoriais</h3>
                    <p>Na conformação em cadeira, as 12 ligações C-H apontam para duas direções distintas no espaço:</p>
                    <ol>
                        <li><strong>Ligações Axiais (6 no total):</strong> São perpendiculares ao plano médio do anel, apontando diretamente para cima ou para baixo, alternando-se em cada carbono vizinho.</li>
                        <li><strong>Ligações Equatoriais (6 no total):</strong> Projetam-se para fora a partir do perímetro ("equador") do anel.</li>
                    </ol>
                    
                    <h3>C) Oscilação do Anel (Ring-Flip) e o Efeito de Substituintes</h3>
                    <p>O ciclo-hexano realiza um movimento constante de interconversão rápida chamado de <strong>oscilação do anel</strong> (ou ring-flip). Nesse movimento, a cadeira "A" se transforma na cadeira "B".</p>
                    <ul>
                        <li><strong>O Grande Efeito:</strong> Durante a oscilação, <strong>todas as ligações axiais viram equatoriais e todas as equatoriais viram axiais</strong>!</li>
                    </ul>
                    
                    <p>Se colocarmos um grupo substituinte no ciclo-hexano (como o metilciclo-hexano), as duas cadeiras possíveis não serão iguais em energia:</p>
                    <ul>
                        <li><strong>Substituinte na posição Axial:</strong> É instável. O grupo axial sofre repulsão estérica dos hidrogênios axiais vizinhos do mesmo lado do anel. Esse fenômeno é conhecido como <strong>interação 1,3-diaxial</strong> (que equivale espacialmente a uma tensão gauche do butano).</li>
                        <li><strong>Substituinte na posição Equatorial:</strong> É altamente estável. Fora do anel, o grupo tem bastante espaço livre e não sofre interações de repulsão.</li>
                        <li><strong>Grupos Volumosos:</strong> Um grupo gigante como o <strong>terc-butila</strong> é tão volumoso que sua interação 1,3-diaxial seria devastadora para a molécula. Por isso, o anel fica "travado" com o terc-butila na <strong>posição equatorial</strong> em 99,99% do tempo.</li>
                    </ul>
                    

                </div>

                <div id="topic-4-1" class="topic-content">
                    <h2>🌀 Estereoquímica: O Incrível Universo Tridimensional das Moléculas</h2>
                    <p>Você já percebeu que suas mãos são idênticas, mas opostas? Se você tentar colocar uma luva da mão direita na mão esquerda, ela não vai se encaixar perfeitamente. No espelho, sua mão esquerda parece uma mão direita. Na química, muitas moléculas têm exatamente essa mesma propriedade: elas possuem uma versão "direita" e uma "esquerda"! Esse estudo da geometria em três dimensões é o que chamamos de Estereoquímica.</p>
                    <p>Hoje, vamos usar as técnicas de fatiamento de informação (chunking) e metáforas visuais para que seu cérebro entenda perfeitamente como essas moléculas "gêmeas e opostas" funcionam e por que elas são tão cruciais para a biologia e para a medicina.</p>

                    <h3>🪞 1. Quiralidade: O Jogo do Espelho</h3>
                    <p>O teste fundamental para saber se um objeto (ou molécula) é quiral é tentar sobrepô-lo à sua imagem no espelho.</p>
                    <ul>
                        <li><strong>Objetos Quirais:</strong> Não se sobrepõem perfeitamente à sua imagem refletida.<br>
                        <em>Exemplos do dia a dia:</em> Suas mãos, seus sapatos, tesouras.</li>
                        <li><strong>Objetos Aquirais:</strong> São idênticos à sua imagem refletida e podem ser sobrepostos perfeitamente.<br>
                        <em>Exemplos do dia a dia:</em> Uma meia comum, um copo de vidro liso, uma bola de futebol.</li>
                        <li><strong>Plano de Simetria:</strong> Se você conseguir passar uma "folha imaginária" que corte um objeto exatamente ao meio, dividindo-o em duas metades idênticas (uma refletindo a outra), esse objeto é aquiral. Moléculas quirais nunca possuem um plano de simetria interno.</li>
                    </ul>

                    <h3>O Carbono Quiral (Centro Estereogênico)</h3>
                    <p>Na química orgânica, o principal gerador de quiralidade é o carbono assimétrico ou centro estereogênico.</p>
                    <p>Ele é um carbono com hibridização \(sp^3\) (tetraédrico) ligado a quatro grupos <strong>completamente diferentes</strong> entre si.</p>
                    <p><strong>🧠 NeuroDica Visual:</strong> Imagine o átomo de carbono como o corpo de um boneco e seus 4 braços segurando balões de cores diferentes (azul, amarelo, vermelho e verde). Se você trocar a posição de dois balões, você cria um boneco "espelho" que não pode ser sobreposto ao original!</p>
                    
                    <h3>🍊 A Quiralidade na Nossa Vida</h3>
                    <p>Nossos receptores biológicos (como os do nariz e da língua) também são quirais. Por isso:</p>
                    <ul>
                        <li>Um dos enantiômeros da molécula <strong>limoneno</strong> tem cheiro de laranja, enquanto a sua imagem no espelho tem cheiro de limão!</li>
                        <li>Um dos enantiômeros da <strong>carvona</strong> dá o sabor do cominho, enquanto o outro dá o sabor refrescante da hortelã.</li>
                    </ul>
                </div>

                <div id="topic-4-2" class="topic-content">
                    <h2>🧭 2. Configuração Absoluta (\(R\) / \(S\)): As Regras de Trânsito Molecular</h2>
                    <p>Como os cientistas dão nome a essas versões direita e esquerda? Eles usam o Sistema Cahn-Ingold-Prelog (CIP) para definir a configuração absoluta de cada carbono quiral. É como uma regra de trânsito em três etapas simples:</p>

                    <h3>Passo 1: Distribuir os Crachás de Prioridade (1, 2, 3 e 4)</h3>
                    <p>Olhe para os 4 átomos diretamente conectados ao carbono quiral. A prioridade é decidida pelo número atômico (Z) de cada um na tabela periódica:</p>
                    <ul>
                        <li><strong>Maior número atômico = Maior Prioridade (1)</strong></li>
                        <li><strong>Menor número atômico = Menor Prioridade (4)</strong> (Muitas vezes o Hidrogênio, Z=1, recebe a prioridade 4).</li>
                        <li><strong>E se empatar?</strong> Se dois átomos vizinhos forem iguais (ex: dois carbonos), siga a linha de ligação até encontrar a primeira diferença.</li>
                        <li><strong>E as ligações duplas ou triplas?</strong> Elas contam como se o átomo estivesse ligado a dois ou três átomos simples (ex: um grupo \(-CH=O\) conta como se o carbono estivesse ligado a dois oxigênios).</li>
                    </ul>

                    <h3>Passo 2: O Jogo do Volante</h3>
                    <p>Depois de numerar as prioridades de 1 a 4, gire a molécula no espaço de forma que o grupo de menor prioridade (4) fique apontado para trás de você (representado por traços tracejados).</p>
                    <p>Agora, imagine que você está segurando um volante onde as posições 1, 2 e 3 estão visíveis na sua frente.</p>

                    <h3>Passo 3: Decidir o Sentido do Giro</h3>
                    <p>Faça o caminho com o dedo de 1 ➔ 2 ➔ 3:</p>
                    <ul>
                        <li>Se o sentido for horário (como os ponteiros de um relógio), a configuração é <strong>\(R\)</strong> (do latim <em>rectus</em>, que significa direito).</li>
                        <li>Se o sentido for anti-horário, a configuração é <strong>\(S\)</strong> (do latim <em>sinister</em>, que significa esquerdo).</li>
                    </ul>
                </div>

                <div id="topic-4-3" class="topic-content">
                    <h2>👥 3. Enantiômeros, Diastereoisômeros e Compostos Meso</h2>
                    <p>Quando analisamos moléculas com um ou mais carbonos quirais, podemos encontrar diferentes relações de parentesco entre elas:</p>
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                            <thead>
                                <tr style="background-color: rgba(255, 255, 255, 0.1); border-bottom: 2px solid rgba(255, 255, 255, 0.2);">
                                    <th style="padding: 10px; text-align: left;">Relação Molecular</th>
                                    <th style="padding: 10px; text-align: left;">Definição Didática</th>
                                    <th style="padding: 10px; text-align: left;">Propriedades Físicas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                    <td style="padding: 10px; font-weight: bold;">Enantiômeros</td>
                                    <td style="padding: 10px;">Moléculas que são imagens especulares perfeitas, mas não sobreponíveis (como sua mão esquerda e direita). Para ir de um enantiômero a outro, inverta as configurações de todos os carbonos quirais (\(R,R \leftrightarrow S,S\)).</td>
                                    <td style="padding: 10px;"><strong>Idênticas!</strong> Eles se comportam exatamente igual na maioria dos ambientes comuns.</td>
                                </tr>
                                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                                    <td style="padding: 10px; font-weight: bold;">Diastereoisômeros</td>
                                    <td style="padding: 10px;">Estereoisômeros que não são imagens especulares entre si (como os isômeros cis e trans). Para ir de um diastereoisômero a outro, inverta apenas alguns carbonos quirais (\(R,R \leftrightarrow R,S\)).</td>
                                    <td style="padding: 10px;"><strong>Diferentes!</strong> Eles têm pontos de fusão, ebulição e solubilidades completamente distintos e podem ser facilmente separados em laboratório.</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; font-weight: bold;">Compostos Meso</td>
                                    <td style="padding: 10px;">Uma molécula que possui carbonos quirais internos, mas tem um plano de simetria que divide a molécula ao meio. Por causa dessa simetria, ela é aquiral (sua metade direita anula a metade esquerda).</td>
                                    <td style="padding: 10px;"><strong>Aquiral</strong> (não possui imagem especular diferente e não desvia o plano da luz polarizada).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="topic-4-4" class="topic-content">
                    <h2>💡 4. Atividade Óptica e Excesso Enantiomérico (\(ee\))</h2>
                    <p>Apesar de terem propriedades físicas idênticas no dia a dia, os enantiômeros têm duas diferenças cruciais: como reagem com outras moléculas quirais (como medicamentos no nosso corpo) e como interagem com a luz.</p>

                    <h3>A) Atividade Óptica: O Desvio da Luz</h3>
                    <p>Quando um feixe de luz plano-polarizada (luz que vibra em apenas uma direção espacial) passa por uma solução contendo um enantiômero puro, esse composto gira o plano da luz!</p>
                    <ul>
                        <li><strong>Dextrorrotatório (+):</strong> Gira a luz para a direita (sentido horário).</li>
                        <li><strong>Levorrotatório (-):</strong> Gira a luz para a esquerda (sentido anti-horário).</li>
                    </ul>
                    <p><strong>⚠️ Atenção:</strong> Não há relação direta entre a configuração \(R\)/\(S\) e o sinal de rotação \((+)\) ou \((-)\). Uma molécula \((R)\) pode ser dextrorrotatória ou levorrotatória; isso só é descoberto experimentalmente!</p>

                    <h3>B) Mistura Racêmica</h3>
                    <p>Se misturarmos quantidades exatamente iguais (50% de cada) de um par de enantiômeros, temos uma mistura racêmica ou racemato (representada pelo símbolo \(\pm\)).</p>
                    <p>Como cada molécula que gira a luz para a direita é compensada por uma que gira para a esquerda, a rotação resultante é zero. Portanto, as <strong>misturas racêmicas são opticamente inativas</strong>.</p>

                    <h3>C) Excesso Enantiomérico (\(ee\))</h3>
                    <p>Na produção de remédios, os químicos precisam saber o quão "pura" é a mistura em termos de um único enantiômero ativo. O excesso enantiomérico (\(ee\)) ou pureza óptica mede a percentagem do enantiômero que está em excesso na mistura. Ele pode ser calculado de duas maneiras fáceis:</p>
                    
                    <p><strong>Pela rotação observada:</strong></p>
                    <div style="background-color: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0; text-align: center;">
                        \[ee\% = \frac{\text{Rotação específica observada da mistura}}{\text{Rotação específica do enantiômero puro}} \times 100\]
                    </div>

                    <p><strong>Pela quantidade de moléculas:</strong></p>
                    <div style="background-color: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0; text-align: center;">
                        \[ee\% = \frac{\text{Moles do enantiômero em excesso} - \text{Moles do outro enantiômero}}{\text{Moles totais de ambos os enantiômeros}} \times 100\]
                    </div>
                </div>

                <div id="topic-5-1" class="topic-content">
                    <h2>🎬 A Dança das Moléculas: Introdução às Reações Orgânicas e Mecanismos</h2>
                    <p>Imagine que você é o diretor de um filme de ação microscópico. Em vez de atores humanos, seus personagens são átomos e moléculas. Eles se chocam, se abraçam, trocam de parceiros e se transformam constantemente. Na química orgânica, uma reação química não é apenas um "antes e depois" — é uma coreografia em que cada passo dos elétrons conta!</p>
                    <p>Hoje, você vai aprender a ler os "roteiros" dessas reações, usando as melhores técnicas para ajudar seu cérebro a visualizar o invisível.</p>

                    <h3>🗺️ 1. Os Quatro Tipos de Reações: A Coreografia dos Átomos</h3>
                    <p>Praticamente todas as reações orgânicas podem ser divididas em quatro movimentos básicos:</p>
                    <ul>
                        <li><strong>A) Reação de Adição (O "Abraço"):</strong> Duas moléculas se unem para formar um único produto. É típica de moléculas que possuem ligações duplas ou triplas (alquenos e alquinos). A ligação dupla se abre como braços abertos para receber novos átomos.<br>
                        <em>Exemplo Visual:</em> \(A + B \rightarrow C\)<br>
                        <strong>🧠 Metáfora:</strong> Pense em dois amigos andando de bicicleta que decidem dar as mãos e andar juntos em uma única bicicleta dupla.</li>
                        
                        <li><strong>B) Reação de Substituição (A "Troca de Casal"):</strong> Um átomo ou grupo de átomos em uma molécula é trocado por outro. É um dos métodos mais poderosos que os químicos usam para transformar um grupo funcional em outro.<br>
                        <em>Exemplo Visual:</em> \(A-B + C \rightarrow A-C + B\)<br>
                        <strong>🧠 Metáfora:</strong> Imagine que você está jogando futebol e o técnico faz uma substituição: um jogador sai de campo para a entrada de outro.</li>
                        
                        <li><strong>C) Reação de Eliminação (A "Despedida"):</strong> É o oposto exato da adição. Uma única molécula se divide para formar duas substâncias, geralmente criando uma ligação dupla ou tripla no processo.<br>
                        <em>Exemplo Visual:</em> \(A \rightarrow B + C\)<br>
                        <strong>🧠 Metáfora:</strong> É como um casal que decide se desfazer de um móvel antigo para ganhar mais espaço livre na sala de estar.</li>
                        
                        <li><strong>D) Reação de Rearranjo (A "Reorganização Interna"):</strong> Nenhum átomo entra e nenhum átomo sai. A molécula simplesmente reorganiza suas próprias ligações e átomos para gerar uma nova estrutura mais estável.<br>
                        <em>Exemplo Visual:</em> \(A \rightarrow B\) (onde B tem a mesma fórmula de A, mas conectividade diferente)<br>
                        <strong>🧠 Metáfora:</strong> É como se você decidisse mudar os móveis do seu quarto de lugar. O quarto continua com as mesmas coisas, mas a disposição é completamente nova!</li>
                    </ul>
                </div>

                <div id="topic-5-2" class="topic-content">
                    <h2>⚡ 2. Os Intermediários de Reação: Os Personagens Provisórios</h2>
                    <p>Muitas reações não acontecem em um único salto. Elas passam por espécies altamente reativas e de vida curtíssima, chamadas intermediários de reação. Pense neles como "paradas de descanso" instáveis no meio do caminho.</p>
                    <p>Existem três intermediários principais que você precisa conhecer:</p>
                    <ul>
                        <li><strong>Carbocátion (O Carbono Faminto):</strong> É uma espécie onde um átomo de carbono perdeu seus elétrons de ligação e ficou com apenas 6 elétrons na camada de valência e uma carga formal positiva (\(C^+\)). Sua geometria é plana trigonal, com um orbital \(p\) completamente vazio.<br>
                        <em>Estabilidade:</em> Carbocátions adoram elétrons. Eles são muito mais estáveis quando rodeados por outros grupos de carbono (alquilas) que ajudam a "empurrar" densidade eletrônica para eles (efeito chamado de hiperconjugação ou doação indutiva). Por isso, a ordem de estabilidade é: Terciário (3°) > Secundário (2°) > Primário (1°).</li>
                        
                        <li><strong>Carbânion (O Carbono Rico):</strong> É o oposto. Aqui, o carbono possui um par de elétrons não compartilhados e carrega uma carga formal negativa (\(C^-\)). Ele é um excelente doador de elétrons (uma base de Lewis ou nucleófilo).</li>
                        
                        <li><strong>Radical Livre (O Carbono Solitário):</strong> É um átomo de carbono com um elétron desemparelhado (um elétron "solteirão"). Como não tem o octeto completo, ele é extremamente reativo e busca desesperadamente outro elétron para fazer um par.</li>
                    </ul>
                </div>

                <div id="topic-5-3" class="topic-content">
                    <h2>⛰️ 3. Termodinâmica e Cinética: A Viagem da Reação</h2>
                    <p>Para entender se uma reação vai acontecer e quão rápida ela será, precisamos analisar o seu Diagrama de Energia Potencial (um gráfico de Energia vs. Coordenada de Reação).</p>
                    <p>Imagine que fazer uma reação química é como atravessar uma montanha a pé:</p>
                    
                    <h3>A Termodinâmica (O Ponto de Partida e o Destino)</h3>
                    <p>Ela nos diz se a reação libera ou absorve energia.</p>
                    <ul>
                        <li>Se os produtos têm menos energia que os reagentes, a reação liberou energia (calor/trabalho). Chamamos isso de reação <strong>Exergônica</strong> ou <strong>Exotérmica</strong> (variação de energia livre \(\Delta G^\circ\) ou entalpia \(\Delta H\) negativa).</li>
                        <li>Se os produtos têm mais energia, a reação absorveu energia: <strong>Endergônica</strong> ou <strong>Endotérmica</strong> (\(\Delta G^\circ\) ou \(\Delta H\) positiva).</li>
                    </ul>

                    <h3>O Estado de Transição (O Topo da Montanha)</h3>
                    <p>Para ir dos reagentes aos produtos, a molécula precisa subir uma barreira de energia. O ponto mais alto dessa barreira é o Estado de Transição (ou Complexo Ativado). Ele tem uma existência incrivelmente breve (cerca de \(10^{-12}\) segundos) e representa o momento exato em que as ligações velhas estão meio quebradas e as novas estão meio formadas.</p>
                    
                    <h3>A Energia de Ativação (\(\Delta G^\ddagger\) ou \(E_a\))</h3>
                    <p>É a altura da montanha! Representa a energia mínima que as moléculas precisam ter ao colidir para conseguir reagir. Quanto maior a barreira, mais lenta será a reação.</p>
                    
                    <h3>Intermediários vs. Estados de Transição:</h3>
                    <ul>
                        <li>O <strong>Estado de Transição</strong> é o topo exato da colina (instabilidade máxima, não pode ser isolado).</li>
                        <li>O <strong>Intermediário</strong> fica em um pequeno vale ou depressão de energia entre duas colinas. Ele é instável, mas tem uma existência real e pode, às vezes, ser detectado ou capturado quimicamente.</li>
                    </ul>
                </div>

                <div id="topic-5-4" class="topic-content">
                    <h2>🏹 4. O Mecanismo de Setas Curvas: A Rota dos Elétrons</h2>
                    <p>Na química orgânica, nós não usamos setas para mostrar para onde os átomos vão. Nós usamos setas curvas para mostrar para onde os <strong>ELÉTRONS</strong> se movem! Como os átomos são levados pela atração dos elétrons, desenhar a rota eletrônica desenha o destino de toda a reação.</p>
                    <p>Aqui estão as 4 Leis de Ouro das Setas Curvas que você precisa gravar no seu cérebro:</p>
                    <ul>
                        <li><strong>A Origem é a Riqueza, o Destino é a Fome:</strong> A seta curva sempre começa na fonte de um par de elétrons (uma ligação química ou um par de elétrons não compartilhados de um átomo rico) e aponta exatamente para onde eles vão (um átomo deficiente de elétrons).<br>
                        <strong>❌ Erro clássico de estudante:</strong> Apontar a seta de um próton (\(H^+\)) para um nucleófilo. O próton não tem elétrons! A seta deve começar nos elétrons do nucleófilo e apontar para o próton.</li>
                        <li><strong>Duas Farpas vs. Uma Farpa:</strong>
                            <ul>
                                <li>Uma seta com duas farpas (↷) representa o movimento de um <strong>par de elétrons</strong> (típico de reações iônicas).</li>
                                <li>Uma seta com uma única farpa (como um anzol de pesca ⇀) representa o movimento de um <strong>único elétron</strong> (típico de radicais livres).</li>
                            </ul>
                        </li>
                        <li><strong>Não quebre a lei do octeto:</strong> Ao receber elétrons, um átomo do segundo período (como Carbono, Nitrogênio ou Oxigênio) não pode ultrapassar 8 elétrons na valência. Se elétrons entram de um lado, outros elétrons precisam sair (quebrando outra ligação).</li>
                        <li><strong>Nunca mova átomos com setas curvas:</strong> Elas mostram <strong>apenas</strong> a dança dos elétrons.</li>
                    </ul>
                </div>

                <div id="topic-6-1" class="topic-content">
                    <h2>6. Haletos de Alquila: Substituição Nucleofílica e Eliminação - Mecanismos de Substituição Nucleofílica</h2>
                    <p>\$S_N1\$ e \$S_N2\$ (estereoquímica, nucleófilo, grupo de saída, solvente).</p>
                </div>

                <div id="topic-6-2" class="topic-content">
                    <h2>6. Haletos de Alquila: Substituição Nucleofílica e Eliminação - Mecanismos de Eliminação</h2>
                    <p>\$E1\$ e \$E2\$ (Regra de Zaitsev vs. Hofmann).</p>
                </div>

                <div id="topic-6-3" class="topic-content">
                    <h2>6. Haletos de Alquila: Substituição Nucleofílica e Eliminação - Competição entre \$S_N1\$, \$S_N2\$, \$E1\$ e \$E2\$.</h2>
                    <p>Competição entre \$S_N1\$, \$S_N2\$, \$E1\$ e \$E2\$.</p>
                </div>

                <div id="topic-7-1" class="topic-content">
                    <h2>🍇 7. Alcenos e Alcinos: Os Super-Heróis das Ligações Duplas e Triplas</h2>
                    <p>Se você já comeu uma banana madura que foi guardada num saco de papel ou já viu um soldador trabalhando com aquela chama azul super brilhante, você já testemunhou a química dos alcenos e alcinos em ação!</p>
                    <p>Hoje, vamos usar técnicas de neurocognição — como associação visual, fatiamento de conceitos e evocação ativa — para dominar a estrutura, a nomenclatura e as reações dessas moléculas insaturadas de forma leve e definitiva.</p>
                    
                    <h3>🏗️ 1. Estrutura e Isomerias: A Rigidez das Duplas Ligações</h3>
                    <p>Nos alcanos, os carbonos estão unidos por ligações simples, que permitem que a molécula gire livremente como um ventilador. Mas nos alcenos (que possuem uma ligação dupla \\(C=C\\)), a presença de uma ligação pi (\\(\\pi\\)) cria um bloqueio.</p>
                    
                    <p><strong>🧠 Metáfora Ativa:</strong> Imagine duas placas de madeira unidas por um único prego (ligação simples). Você consegue girá-las facilmente. Agora, coloque um segundo prego (ligação dupla). O movimento de rotação trava completamente!</p>
                    <p>Essa rigidez dá origem à isomeria geométrica (estereoisomeria).</p>
                    
                    <h4>A) Isomeria Cis-Trans (Para Moléculas Simples)</h4>
                    <p>Quando os carbonos da ligação dupla estão ligados a hidrogênios e a grupos alquila idênticos, usamos os termos cis e trans:</p>
                    <ul>
                        <li><strong>Cis (do latim desse lado):</strong> Os grupos importantes ou átomos idênticos estão do mesmo lado do plano da dupla ligação.</li>
                        <li><strong>Trans (do latim através):</strong> Os grupos estão em lados opostos.</li>
                    </ul>
                    <p>Exemplo clássico: O cis-2-buteno e o trans-2-buteno. Devido ao empacotamento e à repulsão de cargas (tensão estérica), os isômeros trans geralmente são mais estáveis e têm menor energia do que os isômeros cis.</p>

                    <h4>B) Isomeria E-Z (O Sistema Universal)</h4>
                    <p>O que fazer quando a ligação dupla tem 3 ou 4 substituintes totalmente diferentes, de modo que é impossível dizer quem é idêntico a quem? Usamos o Sistema E-Z, baseado nas regras de prioridade de Cahn-Ingold-Prelog (CIP):</p>
                    <ol>
                        <li>Olhe para o Carbono da esquerda e determine qual dos seus dois substituintes tem a maior prioridade (baseado no maior número atômico).</li>
                        <li>Faça o mesmo para o Carbono da direita.</li>
                        <li>Compare a posição espacial dos dois grupos vencedores de cada lado:</li>
                    </ol>
                    <ul>
                        <li><strong>Z (de Zusammen - juntos em alemão):</strong> Se os dois grupos de maior prioridade estiverem do mesmo lado da ligação dupla.</li>
                        <li><strong>E (de Entgegen - opostos em alemão):</strong> Se os dois grupos de maior prioridade estiverem em lados opostos.</li>
                    </ul>
                    <p><strong>💡 NeuroMnemônico para nunca mais esquecer:</strong></p>
                    <ul>
                        <li><strong>Z</strong> = "Zame side" (mesmo lado, com sotaque divertido).</li>
                        <li><strong>E</strong> = "Eparted" (separados/opostos).</li>
                    </ul>
                </div>

                <div id="topic-7-2" class="topic-content">
                    <h2>⚡ 2. Reações de Adição Eletrofílica em Alcenos</h2>
                    <p>A ligação dupla é formada por uma ligação sigma (\\(\\sigma\\)) forte e uma ligação pi (\\(\\pi\\)) mais fraca e exposta. Essa nuvem pi é altamente concentrada em elétrons (carga negativa), funcionando como um verdadeiro ímã de elétrons (um nucleófilo).</p>
                    <p>Substâncias com carga positiva ou ávidas por elétrons (os eletrófilos) são atraídas pela ligação pi e se adicionam à molécula, quebrando a dupla ligação e transformando-a em ligações simples.</p>
                    <p>Aqui estão as quatro reações que você deve carregar no bolso:</p>
                    <pre><code>
         [ Catalisador Metal ] + H2 ───> Alcano (Hidrogenação)
         [ Cl2 ou Br2 ] ───────────────> Di-haleto Vicinal (Halogenação)
ALCENO + [ H-X (HCl, HBr) ] ───────────> Haleto de Alquila (Hidrohalogenação)
         [ H2O / H+ ] ─────────────────> Álcool (Hidratação)
                    </code></pre>

                    <h4>A) Hidrogenação Catalítica (Fazendo Margarina)</h4>
                    <p>O gás hidrogênio (\\(H_2\\)) se adiciona à ligação dupla na presença de um metal de transição como catalisador (Platina \\(Pt\\), Paládio \\(Pd\\) ou Níquel \\(Ni\\)).</p>
                    <p><strong>O Resultado:</strong> A ligação dupla se rompe e os hidrogênios entram do mesmo lado da molécula (adição syn), transformando um alceno insaturado em um alcano saturado. É assim que a indústria transforma óleos vegetais líquidos em gorduras sólidas (margarina!).</p>

                    <h4>B) Halogenação (Adição Anti)</h4>
                    <p>Adição de bromo (\\(Br_2\\)) ou cloro (\\(Cl_2\\)).</p>
                    <ul>
                        <li><strong>O Mecanismo:</strong> O alceno ataca o halogênio, formando um intermediário cíclico estável (íon halônio) que bloqueia um dos lados da molécula. Por isso, o segundo halogênio é forçado a atacar pelo lado oposto.</li>
                        <li><strong>O Resultado:</strong> Um di-haleto vicinal (halogênios em carbonos vizinhos) com geometria de adição anti (lados opostos).</li>
                    </ul>

                    <h4>C) Hidrohalogenação (HCl, HBr, HI) e a Famosa Regra de Markovnikov</h4>
                    <p>Quando adicionamos um haleto de hidrogênio (como o \\(HCl\\)) a um alceno assimétrico (com números diferentes de hidrogênio em seus carbonos), qual carbono recebe o \\(H\\) e qual recebe o halogênio?</p>
                    <p>É aqui que entra a Regra de Markovnikov:</p>
                    <p><strong>👑 Regra de Markovnikov (O efeito "O rico fica mais rico"):</strong> Na adição de um ácido mineral a um alceno, o átomo de hidrogênio (\\(H\\)) se adiciona ao carbono da dupla ligação que já possui o maior número de hidrogênios. O halogênio (\\(X\\)) liga-se ao carbono com menos hidrogênios.</p>
                    <p><strong>🧠 Por que o cérebro da molécula faz isso? (O Mecanismo)</strong></p>
                    <ol>
                        <li>O alceno pega o \\(H^+\\), adicionando-o na ponta para gerar o carbocátion mais estável possível (terciário > secundário > primário) no outro carbono.</li>
                        <li>O haleto (\\(Cl^-\\), \\(Br^-\\)), que está carregado negativamente, ataca o carbono positivo (carbocátion), completando a reação.</li>
                    </ol>

                    <h4>D) Hidratação Catalisada por Ácido</h4>
                    <p>Adição de água (\\(H_2O\\)) em meio ácido (usando \\(H_2SO_4\\) diluído como catalisador).</p>
                    <p><strong>O Resultado:</strong> Segue a mesma lógica de Markovnikov! O hidrogênio (\\(H^+\\)) se liga ao carbono mais hidrogenado, e o grupo hidroxila (\\(-OH\\)) se liga ao carbono mais substituído (onde o carbocátion está mais estável). O produto final é um Álcool.</p>
                </div>

                <div id="topic-7-3" class="topic-content">
                    <h2>💎 3. Alcinos: A Química Especial da Ligação Tripla</h2>
                    <p>Os alcinos possuem uma ligação tripla (\\(1\\sigma + 2\\pi\\)) com hibridização do tipo sp (geometria linear de 180°). Eles compartilham reações de adição eletrofílica muito semelhantes às dos alcenos, mas guardam duas grandes exclusividades na manga:</p>

                    <h4>A) A Acidez Surpreendente dos Alcinos Terminais</h4>
                    <p>Os alcanos e alcenos normais são extremamente inertes a reações ácido-base (seus hidrogênios não saem por nada!). Porém, os alcinos terminais (aqueles em que a ligação tripla está na ponta da molécula, deixando um hidrogênio ligado diretamente a ela: \\(R-C\\equiv C-H\\)) são surpreendentemente ácidos para hidrocarbonetos (\\(pK_a \\approx 25\\))!</p>
                    <ul>
                        <li><strong>O Segredo:</strong> Os carbonos com hibridização \\(sp\\) têm mais caráter s (50%). Isso significa que os elétrons da ligação \\(C-H\\) estão muito mais próximos do núcleo positivo do carbono, enfraquecendo a ligação e permitindo que o próton (\\(H^+\\)) seja removido por uma base forte.</li>
                        <li><strong>A Reação:</strong> Se tratarmos um alcino terminal com uma base poderosa como o amideto de sódio (\\(NaNH_2\\)) em amônia líquida, removemos o próton e geramos o ânion alquineto (um carbânion estável e extremamente reativo).</li>
                    </ul>

                    <h4>B) Síntese de Alcinos por Alquilação (Crescendo a Molécula)</h4>
                    <p>Uma vez gerado, o ânion alquineto é um nucleófilo fantástico! Ele pode atacar um haleto de alquila primário, expulsando o halogênio (uma reação de substituição nucleofílica \\(S_N2\\)).</p>
                    <p><strong>Utilidade:</strong> Isso permite construir cadeias de carbono sob medida, adicionando novos pedaços ao alcino original!</p>

                    <h4>C) Síntese de Alcinos por Dupla Eliminação</h4>
                    <p>Podemos fabricar uma ligação tripla a partir de um alceno tratando-o primeiro com \\(Br_2\\) para gerar um di-haleto vicinal. Em seguida, adicionamos uma base forte (como 3 mols de \\(NaNH_2\\)) para forçar duas reações de eliminação seguidas (E2), arrancando os halogênios e hidrogênios adjacentes e criando a ligação tripla.</p>
                </div>

                <div id="topic-8-1" class="topic-content">
                    <h2>⚡ 8. Química dos Radicais: As Moléculas Rebeldes e a Reação em Cadeia</h2>
                    <p>Imagine que você está em uma festa onde todo mundo está em duplas perfeitamente estáveis e felizes. De repente, chega alguém solteiro e extremamente extrovertido que decide "separar" uma das duplas para conseguir um parceiro. Quem ficou solteiro agora faz a mesma coisa com outra dupla, gerando um efeito dominó que agita a festa inteira.</p>
                    <p>Na química orgânica, esse "solteiro festeiro" é chamado de radical livre. Radicais livres são átomos ou moléculas altamente reativos que possuem um elétron desemparelhado (um elétron "solteiro"). Hoje, vamos aprender como essas espécies realizam reações em cadeia e por que algumas são tão organizadas e seletivas, enquanto outras parecem um verdadeiro caos energético.</p>
                    
                    <h3>🌟 1. A Reação em Cadeia: O Jogo em Três Etapas</h3>
                    <p>A reação clássica de radicais é a halogenação de alcanos (quando substituímos um hidrogênio de um alcano por um halogênio, como cloro ou bromo). Esse processo ocorre através de um mecanismo de reação em cadeia dividido em três etapas perfeitamente sincronizadas:</p>
                    <p style="text-align: center;"><strong>Iniciação ➔ Propagação ➔ Terminação</strong></p>
                    
                    <h4>🎬 Etapa 1: Iniciação (O Despertar do Radical)</h4>
                    <p>A reação não começa sozinha porque os halogênios (\\(\\text{Cl}_2\\) ou \\(\\text{Br}_2\\)) estão estáveis. Para que a festa comece, precisamos de um empurrãozinho energético: luz ultravioleta (\\(h\\nu\\)) ou calor intenso.</p>
                    <ul>
                        <li>Essa energia promove uma homólise (uma quebra igualitária) da ligação entre os dois átomos de halogênio.</li>
                        <li>Diferente da quebra heterolítica (onde um átomo rouba todos os elétrons), na homólise cada átomo fica com exatamente um elétron da ligação que foi desfeita.</li>
                    </ul>
                    <p>Representação:</p>
                    <p style="text-align: center;">$$\\text{Cl}-\\text{Cl} \\xrightarrow{h\\nu} \\text{Cl}^\\bullet + ^\\bullet\\text{Cl}$$</p>
                    <p>(O símbolo "\\(\\bullet\\)" representa o elétron desemparelhado que torna o radical livre um verdadeiro dínamo de reatividade!)</p>
                    
                    <h4>🔄 Etapa 2: Propagação (O Efeito Dominó)</h4>
                    <p>Agora que temos radicais livres na mistura, eles começam a colidir com as moléculas estáveis de alcano. Esta etapa se repete milhares de vezes:</p>
                    <ul>
                        <li><strong>Passo A (Abstração de Hidrogênio):</strong> O radical halogênio (\\(\\text{X}^\\bullet\\)) colide com o alcano (\\(\\text{R}-\\text{H}\\)) e "rouba" o hidrogênio com seu elétron. Isso forma um haleto de hidrogênio estável (\\(\\text{H}-\\text{X}\\)) e deixa para trás um radical alquila (\\(\\text{R}^\\bullet\\)) na molécula de carbono.<br>
                        $$\\text{X}^\\bullet + \\text{R}-\\text{H} \\rightarrow \\text{H}-\\text{X} + \\text{R}^\\bullet$$</li>
                        <li><strong>Passo B (Ataque ao Halogênio):</strong> O recém-criado radical alquila (\\(\\text{R}^\\bullet\\)) está desesperado por estabilidade. Ele colide com uma molécula intacta de halogênio (\\(\\text{X}_2\\)), rouba um dos átomos de halogênio para formar o produto final (\\(\\text{R}-\\text{X}\\)) e, ao fazer isso, regenera um novo radical halogênio (\\(\\text{X}^\\bullet\\)).<br>
                        $$\\text{R}^\\bullet + \\text{X}-\\text{X} \\rightarrow \\text{R}-\\text{X} + \\text{X}^\\bullet$$</li>
                    </ul>
                    <p>O radical \\(\\text{X}^\\bullet\\) liberado no Passo B volta imediatamente para o Passo A, criando um ciclo contínuo e autossustentável que pode se repetir até 1.000.000 de vezes por cada ativação de luz!</p>
                    
                    <h4>🛑 Etapa 3: Terminação (O Fim da Festa)</h4>
                    <p>Como a festa acaba? O ciclo de propagação é interrompido quando dois radicais livres colidem diretamente um com o outro. Ao se encontrarem, seus elétrons solteiros se emparelham e formam uma ligação covalente estável, não gerando novos radicais para continuar a cadeia.</p>
                    <ul>
                        <li>Colisão de halogênios: \\(\\text{X}^\\bullet + \\text{X}^\\bullet \\rightarrow \\text{X}_2\\)</li>
                        <li>Colisão de alquila e halogênio: \\(\\text{R}^\\bullet + \\text{X}^\\bullet \\rightarrow \\text{R}-\\text{X}\\)</li>
                        <li>Colisão de dois alquilas: \\(\\text{R}^\\bullet + \\text{R}^\\bullet \\rightarrow \\text{R}-\\text{R}\\)</li>
                    </ul>
                </div>

                <div id="topic-8-2" class="topic-content">
                    <h2>⚖️ 2. Seletividade: Cloração vs. Bromação</h2>
                    <p>Se tentarmos halogenar um alcano maior, como o propano (\\(\\text{CH}_3\\text{CH}_2\\text{CH}_3\\)), o radical halogênio tem duas opções de onde retirar o hidrogênio:</p>
                    <ul>
                        <li>Dos carbonos das pontas (gerando um radical primário, \\(1^\\circ\\)).</li>
                        <li>Do carbono do meio (gerando um radical secundário, \\(2^\\circ\\)).</li>
                    </ul>
                    
                    <h3>📈 Estabilidade dos Radicais</h3>
                    <p>Assim como os carbocátions, a estabilidade dos radicais segue a mesma regra: terciário (\\(3^\\circ\\)) &gt; secundário (\\(2^\\circ\\)) &gt; primário (\\(1^\\circ\\)). Os carbonos vizinhos ajudam a dispersar e estabilizar o elétron desemparelhado por um efeito chamado hiperconjugação.</p>
                    <p>Apesar disso, por que a cloração e a bromação dão resultados tão diferentes na prática?</p>
                    
                    <div style="overflow-x: auto; margin-bottom: 20px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background-color: #f3f4f6;">
                                    <th style="border: 1px solid #ccc; padding: 8px;">Reação</th>
                                    <th style="border: 1px solid #ccc; padding: 8px;">Produto no Carbono \\(1^\\circ\\) (Menos Estável)</th>
                                    <th style="border: 1px solid #ccc; padding: 8px;">Produto no Carbono \\(3^\\circ\\) (Mais Estável)</th>
                                    <th style="border: 1px solid #ccc; padding: 8px;">Grau de Controle / Seletividade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border: 1px solid #ccc; padding: 8px;">Cloração do Isobutano</td>
                                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">63%</td>
                                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">37%</td>
                                    <td style="border: 1px solid #ccc; padding: 8px;">Baixa (Caótica)</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ccc; padding: 8px;">Bromação do Isobutano</td>
                                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">&lt; 1%</td>
                                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">&gt; 99%</td>
                                    <td style="border: 1px solid #ccc; padding: 8px;">Altíssima (Cirúrgica)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p>Por que o bromo é tão incrivelmente preciso e seletivo, enquanto o cloro parece ignorar a estabilidade do radical formado e gera misturas difíceis de separar?</p>
                    
                    <h3>🧠 A Resposta da Neuroquímica: O Postulado de Hammond</h3>
                    <p>O segredo desse comportamento reside na termodinâmica da primeira etapa de propagação (a abstração do hidrogênio) e na forma como os estados de transição se comportam espacialmente:</p>
                    
                    <h4>A Cloração é Exotérmica (Rápida e Apressada):</h4>
                    <ul>
                        <li>A reação do radical cloro para retirar o hidrogênio libera muita energia (\\(\\Delta H &lt; 0\\)).</li>
                        <li>Segundo o Postulado de Hammond, em reações exotérmicas, o Estado de Transição (ET) ocorre muito cedo na coordenada de reação, assemelhando-se muito aos reagentes iniciais.</li>
                        <li>Como o estado de transição se parece com os reagentes, a ligação \\(\\text{C}-\\text{H}\\) ainda mal começou a se quebrar. O carbono ainda não "percebeu" que vai se tornar um radical livre estável ou instável.</li>
                        <li>Por ser muito reativa e pouco sensível a essas diferenças de energia, a cloração ocorre quase sem critério.</li>
                    </ul>
                    
                    <h4>A Bromação é Endotérmica (Lenta e Seletiva):</h4>
                    <ul>
                        <li>A reação do radical bromo para retirar o hidrogênio é lenta e absorve energia (\\(\\Delta H &gt; 0\\)).</li>
                        <li>Pelo Postulado de Hammond, em reações endotérmicas, o Estado de Transição (ET) ocorre de forma tardia, assemelhando-se muito aos produtos (o radical alquila em formação).</li>
                        <li>No ET da bromação, a ligação \\(\\text{C}-\\text{H}\\) já está quase completamente rompida. O carbono já sente de forma muito pronunciada a carga e a estabilização do radical livre que está nascendo.</li>
                        <li>Por isso, a barreira de energia de ativação para formar um radical terciário (\\(\\text{E}_a\\) menor) é drasticamente menor do que para formar um radical primário. O bromo prefere quase que exclusivamente o caminho mais fácil e estável.</li>
                    </ul>
                </div>

                <div id="topic-9-1" class="topic-content">
                    <h2>9. Álcoois, Éteres, Epóxidos e Tióis - Propriedades Físicas e Nomenclatura.</h2>
                    <p><strong>🧠 Álcoois, Éteres, Epóxidos e Tióis: Os Segredos das Conexões Oxigenadas e de Enxofre</strong><br/>
                    Seja muito bem-vindo! Hoje você vai descobrir a química por trás do álcool em gel das nossas mãos, do éter anestésico que revolucionou as cirurgias no século XIX, da supercola epóxi e até do aroma inconfundível do alho e do spray de um gambá.</p>
                    <p>Para facilitar seu aprendizado, vamos usar técnicas de dupla codificação (texto + metáforas visuais) e organizar as informações em blocos para gerenciar sua carga mental. Pronto para começar?</p>
                    
                    <h3>🔍 1. Propriedades Físicas e Nomenclatura: Os Quatro Irmãos Moleculares</h3>
                    <p>Nossos quatro protagonistas de hoje são compostos orgânicos que trazem átomos de Oxigênio (O) ou seu vizinho de grupo na Tabela Periódica, o Enxofre (S).</p>
                    
                    <h4>🧪 A) Álcoois (R–OH)</h4>
                    <p>Possuem o grupo funcional hidroxila (–OH) ligado a um carbono saturado (\\(sp^3\\)).</p>
                    <ul>
                        <li><strong>Nomenclatura IUPAC:</strong> É muito simples! Pegue o nome do alcano correspondente e troque a terminação "-o" por "-ol".<br/>
                        <em>Exemplos:</em> \\(\\text{CH}_3\\text{–OH}\\) (Metanol), \\(\\text{CH}_3\\text{CH}_2\\text{–OH}\\) (Etanol), \\(\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{–OH}\\) (Propan-1-ol).</li>
                        <li><strong>Propriedades Físicas (O Superpoder da Atração):</strong> Como o oxigênio é extremamente eletronegativo, a ligação O–H é altamente polarizada. Isso permite que os álcoois façam Ligações de Hidrogênio muito fortes entre si.<br/>
                        <em>Resultado:</em> Seus pontos de ebulição são muito mais altos que os dos alcanos ou éteres de massa parecida!</li>
                        <li><strong>Cabo de Guerra da Solubilidade:</strong> O grupo –OH é hidrofílico (ama água), mas a cadeia carbônica é hidrofóbica (repele água). Álcoois curtos (metanol, etanol, propanol) são infinitamente miscíveis em água. Porém, à medida que a cadeia carbônica cresce (de 4 carbonos para cima), o lado hidrofóbico "ganha" o cabo de guerra e a solubilidade em água despenca!</li>
                    </ul>

                    <h4>💨 B) Éteres (R–O–R')</h4>
                    <p>O oxigênio fica "espremido" como uma ponte entre dois grupos de carbono.</p>
                    <ul>
                        <li><strong>Nomenclatura Comum:</strong> Escreva "Éter" + os nomes dos grupos em ordem alfabética com o sufixo "ílico".<br/>
                        <em>Exemplo:</em> \\(\\text{CH}_3\\text{CH}_2\\text{–O–CH}_2\\text{CH}_3\\) é o Éter dietílico.</li>
                        <li><strong>Nomenclatura IUPAC:</strong> O menor grupo vira prefixo "Alcoxi" e o maior grupo vira o "Alcano" principal.<br/>
                        <em>Exemplo:</em> \\(\\text{CH}_3\\text{–O–CH}_2\\text{CH}_3\\) é o Metoxietano.</li>
                        <li><strong>Propriedades Físicas (Sem Pontes entre Si):</strong> Como não há hidrogênio ligado diretamente ao oxigênio nos éteres, as moléculas não conseguem fazer ligações de hidrogênio entre si.<br/>
                        <em>Resultado:</em> Seus pontos de ebulição são baixos (semelhantes aos dos alcanos correspondentes). No entanto, como o oxigênio possui pares de elétrons livres, ele pode receber ligações de hidrogênio da água. Por isso, o éter dietílico tem uma solubilidade em água razoavelmente parecida com a do butan-1-ol!</li>
                    </ul>

                    <h4>🕸️ C) Epóxidos (Oxiranos)</h4>
                    <p>São um tipo muito especial de éter: um anel cíclico tridimensional contendo dois carbonos e um oxigênio.</p>
                    <ul>
                        <li><strong>A Metáfora da Mola Comprimida:</strong> No modelo ideal, carbonos \\(sp^3\\) preferem ângulos de ligação de 109,5°. No triângulo equilátero de um epóxido, os ângulos são espremidos a 60°! Isso cria uma tensão de anel colossal. Os epóxidos funcionam como uma armadilha molecular sob extrema pressão, prontos para abrir o anel ao menor ataque de um nucleófilo.</li>
                    </ul>

                    <h4>🧄 D) Tióis (R–SH)</h4>
                    <p>São os primos de enxofre dos álcoois (o oxigênio foi substituído por um enxofre).</p>
                    <ul>
                        <li><strong>Nomenclatura IUPAC:</strong> Basta adicionar o sufixo "-tiol" ao nome do alcano correspondente.<br/>
                        <em>Exemplo:</em> \\(\\text{CH}_3\\text{CH}_2\\text{–SH}\\) (Etantiol).</li>
                        <li><strong>O "Superodor":</strong> O enxofre é muito menos eletronegativo que o oxigênio. Por isso, os tióis não fazem ligações de hidrogênio fortes e têm pontos de ebulição bem mais baixos que os álcoois. Mas o que lhes falta em atração molecular sobra em aroma! Nosso nariz é incrivelmente sensível a tióis. Pequenas quantidades de tióis são propositalmente adicionadas ao gás de cozinha (que é inodoro) para que possamos detectar vazamentos instantaneamente.</li>
                    </ul>
                </div>

                <div id="topic-9-2" class="topic-content">
                    <h2>9. Álcoois, Éteres, Epóxidos e Tióis - Síntese e Reações de Álcoois</h2>
                    <h3>🛠️ 2. A Vida dos Álcoois: Síntese por Redução e Reações de Oxidação</h3>
                    <p>Álcoois são os "camaleões" da química orgânica; eles podem ser facilmente construídos ou transformados em outros grupos funcionais.</p>

                    <h4>🔄 A) Síntese de Álcoois por Redução (Construindo Álcoois)</h4>
                    <p>Reduzir na química orgânica geralmente significa adicionar hidrogênios (H) ou remover oxigênios (O) de uma molécula. Podemos obter álcoois reduzindo compostos carbonílicos (\\(\\text{C=O}\\)):</p>
                    <ul>
                        <li><strong>Redução de Aldeídos:</strong> Gera Álcoois Primários (o grupo -OH fica na ponta).</li>
                        <li><strong>Redução de Cetonas:</strong> Gera Álcoois Secundários (o grupo -OH fica no meio).</li>
                    </ul>
                    <p>As Duas Ferramentas de Redução (Os Doadores de Hidreto):</p>
                    <ul>
                        <li>\\(\\text{NaBH}_4\\) (Boroidreto de Sódio): O "suave". Reduz apenas aldeídos e cetonas. É seguro e fácil de usar no laboratório.</li>
                        <li>\\(\\text{LiAlH}_4\\) (Hidreto de Alumínio e Lítio): O "bruto". É extremamente forte e reativo. Reduz aldeídos, cetonas, ácidos carboxílicos e ésteres diretamente a álcoois!</li>
                    </ul>

                    <h4>⚡ B) Oxidação de Álcoois (Transformando Álcoois)</h4>
                    <p>Oxidar é o caminho inverso: remover hidrogênios ou adicionar oxigênios. O destino da oxidação depende do tipo de álcool de partida:</p>
                    <ul>
                        <li><strong>Álcoois Primários (Duas Etapas de Oxidação):</strong>
                            <ul>
                                <li>Etapa 1: O álcool vira um Aldeído.</li>
                                <li>Etapa 2: O aldeído continua oxidando até virar um Ácido Carboxílico.</li>
                                <li><strong>💡 Truque de Controle:</strong> Se usarmos um oxidante forte como o Reagente de Jones (\\(\\text{CrO}_3\\) em ácido sulfúrico) ou \\(\\text{KMnO}_4\\), a reação não para e vai direto ao ácido carboxílico. Se quisermos parar cirurgicamente na fase de aldeído, usamos reagentes suaves e modernos como o PCC (clorocromato de piridínio) ou a Oxidação de Swern.</li>
                            </ul>
                        </li>
                        <li><strong>Álcoois Secundários (Parada Única):</strong><br/>
                        Oxidam-se facilmente para formar Cetonas usando qualquer um dos oxidantes citados (Jones, PCC, Swern). Como a cetona não tem mais hidrogênios no carbono carbonílico para serem removidos, a reação para por aí de forma natural!</li>
                        <li><strong>Álcoois Terciários (Bloqueio Químico):</strong><br/>
                        Álcoois terciários não sofrem oxidação em condições normais. Por quê? Porque o carbono que carrega o grupo –OH não possui nenhum átomo de hidrogênio ligado diretamente a ele. Sem hidrogênio para retirar, a molécula é resistente à oxidação!</li>
                    </ul>
                    
                    <h3>🔄 3. Substituição de Álcoois: Conversão em Haletos de Alquila</h3>
                    <p>Para transformar um álcool em um haleto de alquila (R–X), nos deparamos com um grande obstáculo: o grupo –OH é um péssimo grupo de saída. Ele é uma base forte (\\(\\text{OH}^-\\)), o que significa que ele se recusa a sair pacificamente da molécula ao ser atacado por um halogênio.</p>
                    <p>Os químicos usam dois truques fantásticos para "enganar" e ativar o grupo de saída:</p>
                    
                    <h4>Truque 1: Ativação por Ácido (\\(\\text{HX}\\))</h4>
                    <p>Ao misturar o álcool com um ácido forte como \\(\\text{HCl}\\), \\(\\text{HBr}\\) ou \\(\\text{HI}\\), ocorre uma reação ácido-base instantânea. O par de elétrons do oxigênio captura o próton (\\(\\text{H}^+\\)) do ácido:</p>
                    <p style="text-align: center;">$$\\text{R–OH} + \\text{H}^+ \\rightleftharpoons \\text{R–OH}_2^+$$</p>
                    <p>O grupo –OH agora se transformou em uma molécula de água (\\(\\text{H}_2\\text{O}\\)) acoplada! A água é uma base extremamente fraca e um excelente grupo de saída.</p>
                    <ul>
                        <li><strong>Álcoois Terciários:</strong> Reagem super rápido via mecanismo \\(S_N1\\), liberando água para formar um carbocátion estável, que é imediatamente atacado pelo haleto (\\(\\text{X}^-\\)).</li>
                        <li><strong>Álcoois Primários:</strong> Reagem lentamente via mecanismo \\(S_N2\\), pois não conseguem formar carbocátions estáveis.</li>
                    </ul>

                    <h4>Truque 2: Os Agentes Ativadores Especiais (\\(\\text{PBr}_3\\) e \\(\\text{SOCl}_2\\))</h4>
                    <p>Para evitar altas temperaturas e rearranjos indesejados de carbocátions em álcoois primários e secundários, usamos reagentes limpos de substituição:</p>
                    <ul>
                        <li><strong>\\(\\text{PBr}_3\\) (Tribrometo de Fósforo):</strong> Transforma álcoois primários e secundários em Brometos de Alquila através de um mecanismo \\(S_N2\\) puro, resultando na inversão de configuração (inversão de Walden).</li>
                        <li><strong>\\(\\text{SOCl}_2\\) (Cloreto de Tionila):</strong> Converte álcoois em Cloretos de Alquila. Sob as condições de laboratório mais comuns, essa reação ocorre de forma limpa, e os subprodutos são gases (\\(\\text{SO}_2\\) e \\(\\text{HCl}\\)) que simplesmente evaporam do balão de reação, facilitando muito o isolamento do produto!</li>
                    </ul>
                </div>

                <div id="topic-9-3" class="topic-content">
                    <h2>9. Álcoois, Éteres, Epóxidos e Tióis - Síntese e Abertura de Anel de Epóxidos.</h2>
                    <h3>💥 4. O Drama dos Epóxidos: Síntese e Abertura de Anel</h3>
                    <p>Como vimos, os epóxidos são pequenos anéis de três membros altamente tensionados. Vamos ver como criá-los e como aproveitar essa tensão para abrir o anel de forma controlada.</p>

                    <h4>🏗️ A) Síntese de Epóxidos</h4>
                    <p>Existem duas formas principais de construir essa estrutura cíclica:</p>
                    <ul>
                        <li><strong>Epoxidação Direta de Alcenos:</strong> Tratamos um alceno com um peroxiácido (um ácido carboxílico com um oxigênio extra, sendo o mais famoso o \\(m\\)-CPBA). A reação ocorre em uma única etapa coordenada (mecanismo concertado), transferindo o oxigênio diretamente para a ligação dupla. Como é simultâneo, a geometria original do alceno é preservada (um alceno cis gera um epóxido cis!).</li>
                        <li><strong>Via Haloidrina (Ataque Intramolecular):</strong> Primeiro, reagimos o alceno com bromo em água para formar uma haloidrina (uma molécula vizinha com –OH e –Br). Ao adicionarmos uma base, ela desprotona o –OH, transformando-o em um íon alcóxido (–\\(\\text{O}^-\\)). Esse oxigênio carregado faz um ataque nucleofílico interno (\\(S_N2\\) intramolecular), expulsando o bromo e fechando o anel de 3 membros.</li>
                    </ul>

                    <h4>🔨 B) Abertura do Anel: A Direção do Ataque</h4>
                    <p>Podemos abrir o anel do epóxido usando dois caminhos diferentes. A escolha do caminho altera drasticamente onde o nucleófilo vai atacar (regiosseletividade):</p>
                    <pre><code>       O  &lt;-- Oxigênio protonado ou neutro
      / \
  R-CH---CH2  &lt;-- Carbono mais substituído (esquerda) vs. menos substituído (direita)</code></pre>
                    
                    <h5>1. Abertura Catalisada por Ácido (Regida pela Carga Elétrica)</h5>
                    <ul>
                        <li><strong>O Mecanismo:</strong> O oxigênio do epóxido é protonado pelo ácido, gerando um intermediário com carga positiva. Essa carga positiva "puxa" fortemente os elétrons das ligações C–O para si.</li>
                        <li><strong>Onde ocorre o ataque?</strong> O nucleófilo ataca o carbono MAIS substituído (aquele que tem mais grupos alquila ligados a ele).</li>
                        <li><strong>🧠 Por que o cérebro deve lembrar disso?</strong> Embora o carbono mais substituído seja mais "apertado" (impedido), ele consegue suportar muito melhor a carga parcial positiva que se desenvolve no estado de transição (caráter de carbocátion estável). É uma decisão regida pela estabilidade da carga elétrica!</li>
                    </ul>

                    <h5>2. Abertura por Base ou Nucleófilos Fortes (Regida pelo Espaço Físico)</h5>
                    <ul>
                        <li><strong>O Mecanismo:</strong> Sem ácido, o oxigênio do epóxido permanece neutro e é um grupo de saída razoável apenas devido à imensa tensão do anel de 3 membros. Um nucleófilo forte (como um reagente de Grignard, um alcóxido ou íon hidróxido) ataca o epóxido diretamente por trás via mecanismo clássico \\(S_N2\\).</li>
                        <li><strong>Onde ocorre o ataque?</strong> O nucleófilo ataca o carbono MENOS substituído (o mais livre e com menos impedimento estérico).</li>
                        <li><strong>🧠 Por que o cérebro deve lembrar disso?</strong> Sem a protonação para enfraquecer as ligações C-O e criar cargas positivas parciais significativas, a molécula é puramente governada pelo impedimento físico. O nucleófilo escolhe o caminho mais fácil e espaçoso para atacar!</li>
                    </ul>

                    <h3>🧠 Desafio de Evocação Ativa (Consolidação de Aprendizagem)</h3>
                    <p>Para fortalecer as sinapses do seu cérebro, tente responder a estas perguntas sem olhar o texto:</p>
                    <ol>
                        <li>Por que o etanol ferve a uma temperatura muito maior (\\(78^\\circ\\text{C}\\)) do que o seu isômero éter metílico (\\(-24^\\circ\\text{C}\\)), se ambos possuem exatamente o mesmo peso molecular?</li>
                        <li>Se você tentar oxidar o 2-metilpropan-2-ol (um álcool terciário) com o forte reagente de Jones, qual produto carbonílico você espera obter?</li>
                        <li>No laboratório, você tem um epóxido assimétrico com um lado com um grupo metila e o outro livre. Se você adicionar metóxido de sódio (\\(\\text{NaOCH}_3\\), uma base forte/nucleófilo), em qual carbono o grupo metóxi vai se ligar preferencialmente?</li>
                    </ol>
                </div>

                <div id="topic-10-1" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Espectroscopia de Infravermelho (IV)</h2>
                    <p>Identificação de grupos funcionais.</p>
                </div>

                <div id="topic-10-2" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Ressonância Magnética Nuclear (\$^1H\$-RMN e \$^{13}C\$-RMN)</h2>
                    <p>Determinação da conectividade da estrutura carbônica.</p>
                </div>

                <div id="topic-10-3" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Espectrometria de Massas (EM)</h2>
                    <p>Massa molecular e padrões de fragmentação.</p>
                </div>

                <div id="topic-11-1" class="topic-content">
                    <h2>11. Aromáticos e Substituição Eletrofílica Aromática - Aromaticidade e Regra de Hückel.</h2>
                    <p>Aromaticidade e Regra de Hückel.</p>
                </div>

                <div id="topic-11-2" class="topic-content">
                    <h2>11. Aromáticos e Substituição Eletrofílica Aromática - Reações de Substituição Eletrofílica Aromática (SEAr)</h2>
                    <p>Nitração, sulfonação, halogenação e Alquilação/Acilação de Friedel-Crafts.</p>
                </div>

                <div id="topic-11-3" class="topic-content">
                    <h2>11. Aromáticos e Substituição Eletrofílica Aromática - Efeito dos Substituintes</h2>
                    <p>Direcionadores orto/para e meta, e ativação/desativação do anel.</p>
                </div>

                <div id="topic-12-1" class="topic-content">
                    <h2>12. Aldeídos e Cetonas (Adição Nucleofílica) - Estrutura e Reatividade do Grupo Carbonila.</h2>
                    <p>Estrutura e Reatividade do Grupo Carbonila.</p>
                </div>

                <div id="topic-12-2" class="topic-content">
                    <h2>12. Aldeídos e Cetonas (Adição Nucleofílica) - Adição Nucleofílica</h2>
                    <p>Formação de hemiacetais/acetais, iminas, enaminas e halidrilas.</p>
                </div>

                <div id="topic-12-3" class="topic-content">
                    <h2>12. Aldeídos e Cetonas (Adição Nucleofílica) - Reações com Reagentes de Grignard e Reduções.</h2>
                    <p>Reações com Reagentes de Grignard e Reduções.</p>
                </div>

                <div id="topic-13-1" class="topic-content">
                    <h2>13. Ácidos Carboxílicos e Derivados - Estrutura, Nomenclatura e Acidez dos Ácidos Carboxílicos.</h2>
                    <p>Estrutura, Nomenclatura e Acidez dos Ácidos Carboxílicos.</p>
                </div>

                <div id="topic-13-2" class="topic-content">
                    <h2>13. Ácidos Carboxílicos e Derivados - Derivados de Carbonila</h2>
                    <p>Haletos de acila, anidridos, ésteres e amidas.</p>
                </div>

                <div id="topic-13-3" class="topic-content">
                    <h2>13. Ácidos Carboxílicos e Derivados - Substituição Nucleofílica Acílica</h2>
                    <p>Interconversão entre os derivados.</p>
                </div>

                <div id="topic-14-1" class="topic-content">
                    <h2>14. Química de Enóis e Enolatos - Tautomerização Ceto-Enólica.</h2>
                    <p>Tautomerização Ceto-Enólica.</p>
                </div>

                <div id="topic-14-2" class="topic-content">
                    <h2>14. Química de Enóis e Enolatos - Halogenação na Posição Alfa.</h2>
                    <p>Halogenação na Posição Alfa.</p>
                </div>

                <div id="topic-14-3" class="topic-content">
                    <h2>14. Química de Enóis e Enolatos - Reações de Condensação</h2>
                    <p>Condensação Aldólica, Condensação de Claisen e Reações de Michael.</p>
                </div>

                <div id="topic-15-1" class="topic-content">
                    <h2>15. Aminas - Estrutura, Nomenclatura e Basicidade.</h2>
                    <p>Estrutura, Nomenclatura e Basicidade.</p>
                </div>

                <div id="topic-15-2" class="topic-content">
                    <h2>15. Aminas - Síntese e Reações de Aminas</h2>
                    <p>Alkilação, Eliminação de Hofmann e Reação de Diazotação.</p>
                </div>

                <div id="topic-16-1" class="topic-content">
                    <h2>16. Bioquímica e Biomoléculas (Introdução) - Carboidratos</h2>
                    <p>Estrutura, estereoquímica e reações dos monossacarídeos.</p>
                </div>

                <div id="topic-16-2" class="topic-content">
                    <h2>16. Bioquímica e Biomoléculas (Introdução) - Aminoácidos, Peptídeos e Proteínas</h2>
                    <p>Ponto isoelétrico e ligação peptídica.</p>
                </div>

                <div id="topic-16-3" class="topic-content">
                    <h2>16. Bioquímica e Biomoléculas (Introdução) - Lipídios e Ácidos Graxos.</h2>
                    <p>Lipídios e Ácidos Graxos.</p>
                </div>

                <div id="topic-16-4" class="topic-content">
                    <h2>16. Bioquímica e Biomoléculas (Introdução) - Ácidos Nucleicos (DNA e RNA).</h2>
                    <p>Ácidos Nucleicos (DNA e RNA).</p>
                </div>

            </section>
        </div>
    </main>` }} />
    </>
  );
}
