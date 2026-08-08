import re

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update menu
old_menu = """                    <li class="menu-item has-submenu">
                        <div class="menu-title">3. Alcanos e Cicloalcanos (Hidrocarbonetos Saturados)</div>
                        <ul class="submenu">
                            <li data-target="topic-3-1">Nomenclatura IUPAC de alcanos e cicloalcanos.</li>
                            <li data-target="topic-3-2">Propriedades Físico-Químicas</li>
                            <li data-target="topic-3-3">Análise Conformacional</li>
                        </ul>
                    </li>"""

new_menu = """                    <li class="menu-item has-submenu">
                        <div class="menu-title">3. Alcanos e Cicloalcanos (Hidrocarbonetos Saturados)</div>
                        <ul class="submenu">
                            <li data-target="topic-3-0">A Química do Movimento</li>
                            <li data-target="topic-3-1">Nomenclatura IUPAC</li>
                            <li data-target="topic-3-2">Propriedades Físicas</li>
                            <li data-target="topic-3-3">Análise Conformacional</li>
                            <li data-target="topic-3-4">O Ciclo-hexano</li>
                        </ul>
                    </li>"""

html = html.replace(old_menu, new_menu)

old_content = """                <div id="topic-3-1" class="topic-content">
                    <h2>3. Alcanos e Cicloalcanos (Hidrocarbonetos Saturados) - Nomenclatura IUPAC de alcanos e cicloalcanos.</h2>
                    <p>Nomenclatura IUPAC de alcanos e cicloalcanos.</p>
                </div>

                <div id="topic-3-2" class="topic-content">
                    <h2>3. Alcanos e Cicloalcanos (Hidrocarbonetos Saturados) - Propriedades Físico-Químicas</h2>
                    <p>Ponto de ebulição, fusão e solubilidade.</p>
                </div>

                <div id="topic-3-3" class="topic-content">
                    <h2>3. Alcanos e Cicloalcanos (Hidrocarbonetos Saturados) - Análise Conformacional</h2>
                    <p>Conformações de projeção de Newman (escalonada, eclipsada, gauche) e conformações do ciclohexano (cadeira, barco, interações 1,3-diaxiais).</p>
                </div>"""

new_content = """                <div id="topic-3-0" class="topic-content">
                    <h2>🚗 A Química do Movimento: Alcanos e Cicloalcanos</h2>
                    <p>Os alcanos e cicloalcanos são a espinha dorsal do nosso mundo moderno. Eles estão presentes no gás de cozinha (GLP), na gasolina que move os carros, no óleo diesel, no asfalto e até mesmo na cera das velas. Mas o que torna essas moléculas, formadas exclusivamente por carbono e hidrogênio, tão especiais? Hoje vamos entender a "gramática" para dar nome a elas, como suas formas físicas determinam seu comportamento e como elas se contorcem e se dobram no espaço em 3D.</p>
                </div>
                
                <div id="topic-3-1" class="topic-content">
                    <h2>🏷️ 1. Nomenclatura IUPAC: Dando Nome aos Bois (ou melhor, aos Carbonos)</h2>
                    <p>A União Internacional de Química Pura e Aplicada (IUPAC) criou uma linguagem universal para que um químico no Brasil ou no Japão saiba exatamente de qual molécula estamos falando. Pense na nomenclatura como uma receita de três partes: <strong>Prefixo (número de carbonos) + Infixo (tipo de ligação) + Sufixo (grupo funcional)</strong>.</p>
                    
                    <h3>A) Alcanos de Cadeia Linear (Normais)</h3>
                    <p>Para alcanos de cadeia contínua e sem ramificações, usamos o sufixo <strong>-ano</strong> (que indica ligações simples) [60]. O prefixo indica o número total de carbonos [1, 60]:</p>
                    <ul>
                        <li><strong>1 Carbono:</strong> Met- + -ano = <strong>Metano</strong> (gás natural) [1, 66]</li>
                        <li><strong>2 Carbonos:</strong> Et- + -ano = <strong>Etano</strong> [1, 66]</li>
                        <li><strong>3 Carbonos:</strong> Prop- + -ano = <strong>Propano</strong> [1, 66]</li>
                        <li><strong>4 Carbonos:</strong> But- + -ano = <strong>Butano</strong> [1, 66]</li>
                    </ul>
                    <p><strong>🧠 Mnemônico Neurocognitivo:</strong> Para memorizar os quatro primeiros prefixos (que são históricos e não gregos), use a frase clássica:<br>
                    <strong>M</strong>aria <strong>E</strong>steve <strong>P</strong>arada <strong>B</strong>ebendo (<strong>M</strong>et-, <strong>E</strong>t-, <strong>P</strong>rop-, <strong>B</strong>ut-) [18, 60]!</p>
                    
                    <p>A partir de 5 carbonos, usamos prefixos gregos comuns: <strong>Pentano</strong> (5), <strong>Hexano</strong> (6), <strong>Heptano</strong> (7), <strong>Octano</strong> (8), <strong>Nonano</strong> (9) e <strong>Decano</strong> (10) [1, 66].</p>
                    
                    <h3>B) Grupos Alquila (Substituintes)</h3>
                    <p>Quando removemos um átomo de hidrogênio de um alcano normal, formamos um "ramo" ou <strong>grupo alquila</strong>, cujo nome troca o sufixo <em>-ano</em> por <strong>-ila</strong> ou <em>-il</em> [61, 67]. Os principais são:</p>
                    <ul>
                        <li><strong>Metila:</strong> \\(-CH_3\\) [1, 68]</li>
                        <li><strong>Etila:</strong> \\(-CH_2CH_3\\) [1, 68]</li>
                        <li><strong>Propila:</strong> \\(-CH_2CH_2CH_3\\) [1, 68]</li>
                        <li><strong>Isopropila (ou 1-metiletila):</strong> O ramo se liga pelo carbono do meio [19, 20, 68].</li>
                    </ul>
                    
                    <p>Para cadeias com 4 carbonos, os grupos ramificados mais importantes que você deve memorizar são [20, 68]:</p>
                    <ul>
                        <li><strong>Butila:</strong> Cadeia linear com ligação na ponta [20, 68].</li>
                        <li><strong>Isobutila (2-metilpropila):</strong> Liga-se pela ponta de uma estrutura em "Y" [20, 68].</li>
                        <li><strong>sec-Butila (1-metilpropila):</strong> Liga-se pelo carbono secundário (segundo carbono da cadeia de quatro) [20, 68].</li>
                        <li><strong>terc-Butila (1,1-dimetiletila):</strong> Um carbono central ligado a três grupos metila [20, 68]. É muito volumoso [45, 46]!</li>
                    </ul>
                    
                    <h3>C) Alcanos de Cadeia Ramificada: O Passo a Passo Sem Erros</h3>
                    <p>Para dar nome a alcanos ramificados, siga este protocolo em seu cérebro [18]:</p>
                    <ol>
                        <li><strong>Ache a Cadeia Principal:</strong> É a maior sequência <em>contínua</em> de átomos de carbono [18, 61]. Cuidado! Ela não precisa estar necessariamente em linha reta no papel [18].</li>
                        <li><strong>Numere os Carbonos:</strong> Comece a numerar pela extremidade que estiver <strong>mais próxima</strong> de qualquer ramificação [23, 67]. Isso garante que os grupos substituintes recebam os menores números possíveis (localizadores) [21, 67].</li>
                        <li><strong>Monte o Nome:</strong> Escreva os nomes das ramificações em <strong>ordem alfabética</strong>, precedidos pelos seus respectivos números localizadores [20]. Por fim, junte o nome da cadeia principal [18, 61].
                            <ul>
                                <li><em>Nota de Ordem Alfabética:</em> Prefixos de quantidade como <em>di-</em>, <em>tri-</em> e os prefixos estruturais hifenizados como <em>sec-</em> e <em>terc-</em> <strong>não</strong> contam para a ordem alfabética (terc-butila é considerado na letra <strong>B</strong>). O prefixo <strong>iso</strong> conta na letra <strong>I</strong> [20].</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h3>D) Cicloalcanos</h3>
                    <p>São hidrocarbonetos saturados fechados em anéis. Eles recebem o prefixo <strong>ciclo-</strong> antes do nome do alcano correspondente (ex: ciclopropano, ciclobutano, ciclopentano, ciclo-hexano) [62, 94].</p>
                    <ul>
                        <li>Se houver apenas um substituinte, não é necessário numerar [21].</li>
                        <li>Se houver dois ou mais, numeramos a partir do substituinte que vem primeiro na ordem alfabética, girando no sentido que dê os menores números possíveis para as outras posições [21].</li>
                    </ul>
                </div>
                
                <div id="topic-3-2" class="topic-content">
                    <h2>🌡️ 2. Propriedades Físicas: A Dança das Moléculas</h2>
                    <p>As propriedades físicas dependem diretamente das <strong>forças intermoleculares</strong>. Como os alcanos e cicloalcanos são formados apenas por carbono e hidrogênio, que possuem eletronegatividades muito próximas, eles são moléculas <strong>completamente apolares</strong> [13, 64].</p>
                    
                    <h3>A) Ponto de Ebulição (PE): Área de Contato é Tudo</h3>
                    <p>No estado líquido, as moléculas apolares são mantidas unidas pelas fracas <strong>Forças de Dispersão de London</strong> (ou forças de dispersão) [13, 65].</p>
                    <ul>
                        <li><strong>Efeito da Massa Molecular:</strong> Quanto mais longa a cadeia carbônica, maior é o tamanho e a área superficial da molécula [15, 24]. Uma área de superfície maior significa mais pontos de contato para que as forças de London atuem [15, 24]. Portanto, o PE aumenta regularmente com a massa molecular (o metano ferve a -161 °C, o pentano a 36 °C e o decano a 174 °C) [15, 66].</li>
                        <li><strong>Efeito das Ramificações (O Abraço vs. O Aperto de Mão):</strong> Se compararmos isômeros (moléculas com a mesma fórmula molecular), as ramificações tornam a molécula mais compacta e arredondada (esférica) [16, 24]. Isso diminui drasticamente a sua área superficial e, consequentemente, enfraquece as forças de dispersão [16, 24].
                            <ul>
                                <li><em>Exemplo Prático:</em> O <em>pentano</em> (linear) tem PE de 36,1 °C [14, 16], enquanto o <em>neopentano</em> (isômero altamente ramificado) ferve a apenas 9,5 °C [14, 16]!</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h3>B) Ponto de Fusão (PF): O Jogo de Tetris Molecular</h3>
                    <p>Ao contrário do ponto de ebulição, o ponto de fusão depende de quão bem as moléculas conseguem se "encaixar" ordenadamente no estado sólido (chamado de <strong>empacotamento cristalino</strong>) [25, 26].</p>
                    <ul>
                        <li>Alcanos com <strong>número par de carbonos</strong> se empacotam de forma mais eficiente no cristal [26]. Por isso, eles têm forças de atração maiores e pontos de fusão anormalmente mais altos do que os vizinhos de número ímpar [25, 26].</li>
                        <li><strong>Cicloalcanos</strong> possuem pontos de fusão muito superiores aos alcanos lineares correspondentes devido à sua simetria e rigidez de anel, que facilitam o encaixe cristalino [12, 26].</li>
                    </ul>
                    
                    <h3>C) Solubilidade e Densidade: Por que o Óleo Flutua?</h3>
                    <ul>
                        <li><strong>"Semelhante dissolve semelhante":</strong> Como são apolares, alcanos são insolúveis em água (que é polar) e muito solúveis em outros solventes orgânicos apolares [70].</li>
                        <li><strong>Densidade:</strong> Todos os alcanos e cicloalcanos têm densidade menor que 1,00 g/mL (a densidade da água) [26, 70]. É por isso que vazamentos de petróleo (rico em hidrocarbonetos) flutuam na água do mar [26, 70].</li>
                    </ul>
                </div>
                
                <div id="topic-3-3" class="topic-content">
                    <h2>🌀 3. Análise Conformacional: As Contorções das Moléculas</h2>
                    <p>As ligações simples carbono-carbono (ligações sigma, \\(\\sigma\\)) podem girar livremente [10, 30]. Essa rotação gera diferentes arranjos espaciais tridimensionais temporários chamados de <strong>conformações</strong> ou <strong>confôrmeros</strong> [27, 30].</p>
                    
                    <p>Para analisar essas conformações, usamos a <strong>Projeção de Newman</strong> [2, 27]:</p>
                    <ul>
                        <li>Nós olhamos diretamente ao longo do eixo da ligação C-C [2, 28].</li>
                        <li>O carbono da frente é representado por um <strong>ponto</strong> de onde saem três ligações [2, 28].</li>
                        <li>O carbono de trás é representado por um <strong>círculo maior</strong>, e suas ligações saem da borda desse círculo [2].</li>
                    </ul>
                    
                    <pre><code>
      H          H
       \        /   &lt;- ligações do carbono de trás saem do círculo
     H--O------O--H 
       / \    / \ 
      H   H  H   H   (Projeção de Newman)
                    </code></pre>
                    
                    <h3>A) Conformações do Etano (\\(CH_3-CH_3\\))</h3>
                    <p>Ao girarmos a ligação central do etano, passamos por duas conformações extremas [30]:</p>
                    <ol>
                        <li><strong>Conformação Escalonada (ou Alternada):</strong> Os átomos de hidrogênio do carbono da frente estão o mais longe possível dos hidrogênios de trás (ângulo diedro de 60°) [28, 29]. Esta é a conformação de <strong>menor energia</strong> e <strong>mais estável</strong>, pois minimiza as repulsões estéricas e torsional entre as nuvens eletrônicas das ligações C-H [30].</li>
                        <li><strong>Conformação Eclipsada:</strong> Os hidrogênios da frente ficam diretamente alinhados com os de trás (ângulo diedro de 0°) [30]. É a conformação de <strong>maior energia</strong> (instável) devido à repulsão estérica das nuvens eletrônicas que estão muito próximas [30].</li>
                    </ol>
                    
                    <h3>B) Conformações do Butano (\\(CH_3-CH_2-CH_2-CH_3\\))</h3>
                    <p>Ao analisar a rotação entre os carbonos C2 e C3 do butano, o "drama" aumenta porque agora temos dois grupos volumosos de metila (\\(-CH_3\\)) se movimentando [31]:</p>
                    <ul>
                        <li><strong>Conformação Anti (ou Anti-periplanar):</strong> Os dois grupos metila estão opostos (ângulo diedro de 180°) [3, 4]. É o estado de <strong>estabilidade máxima</strong> (mínimo global de energia) [5].</li>
                        <li><strong>Conformação Gauche (ou Sinclinal):</strong> Os dois grupos metila estão escalonados, mas próximos um do outro (ângulo diedro de 60°) [3, 4]. Embora seja escalonada, há uma pequena repulsão estérica de aproximadamente 3,8 kJ/mol entre as metilas, tornando-a um pouco menos estável que a conformação anti [44].</li>
                        <li><strong>Conformação Eclipsada (Sin-periplanar):</strong> Ocorre quando os dois grupos metila eclipsam diretamente um ao outro (ângulo diedro de 0°) [3, 4]. É o ponto de <strong>máxima energia</strong> e <strong>menor estabilidade</strong> de toda a rotação [31].</li>
                    </ul>
                </div>
                
                <div id="topic-3-4" class="topic-content">
                    <h2>🪑 4. O Ciclo-hexano e a "Cadeira" Perfeita</h2>
                    <p>Embora desenhemos cicloalcanos como figuras geométricas planas (como o hexágono) [94], na realidade de três dimensões eles se dobram para aliviar tensões de anel [32]. O <strong>ciclo-hexano</strong> é o mais estável de todos [33, 40] e adota duas conformações principais:</p>
                    
                    <h3>A) Cadeira vs. Barco</h3>
                    <ul>
                        <li><strong>Conformação em Cadeira (A Campeã de Estabilidade):</strong> É a forma mais estável [33, 40]. Nela, todos os ângulos de ligação C-C são exatamente de 109,5° (livre de tensão angular) [34] e todas as ligações C-H estão perfeitamente escalonadas quando vistas em projeção de Newman (livre de tensão torsional) [34]. Mais de 99% das moléculas de ciclo-hexano estão nesta forma a qualquer instante [39]!</li>
                        <li><strong>Conformação em Barco (A Tensa):</strong> Pode ser visualizada puxando-se uma das extremidades da cadeira para cima [36]. Ela é muito menos estável devido a duas tensões:
                            <ol>
                                <li><strong>Tensão Torsional:</strong> As ligações C-H nas laterais do barco ficam eclipsadas [36, 37].</li>
                                <li><strong>Interação Mastro (ou Flagpole):</strong> Os hidrogênios das duas pontas do barco (C1 e C4) ficam tão próximos que se repelem fortemente [36, 37].</li>
                            </ol>
                            <ul>
                                <li><em>Barco Torcido:</em> O barco pode se flexionar ligeiramente para formar o <strong>barco torcido</strong>, aliviando parte dessas tensões [5, 37].</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <pre><code>
  H            H               H   H 
   \          /                 \ /  &lt;- interações "mastro" no barco
    C________C                   C--C
   / \      / \                 / \/ \
  C   C____C   C               C______C
 /              \             /        \
C                C           C          C
  (CADEIRA - Estável)            (BARCO - Instável)
                    </code></pre>
                    
                    <h3>B) Ligações Axiais e Equatoriais</h3>
                    <p>Na conformação em cadeira, as 12 ligações C-H apontam para duas direções distintas no espaço [40, 41]:</p>
                    <ol>
                        <li><strong>Ligações Axiais (6 no total):</strong> São perpendiculares ao plano médio do anel, apontando diretamente para cima ou para baixo, alternando-se em cada carbono vizinho [41].</li>
                        <li><strong>Ligações Equatoriais (6 no total):</strong> Projetam-se para fora a partir do perímetro ("equador") do anel [41].</li>
                    </ol>
                    
                    <h3>C) Oscilação do Anel (Ring-Flip) e o Efeito de Substituintes</h3>
                    <p>O ciclo-hexano realiza um movimento constante de interconversão rápida chamado de <strong>oscilação do anel</strong> (ou ring-flip) [7, 41, 42]. Nesse movimento, a cadeira "A" se transforma na cadeira "B" [7].</p>
                    <ul>
                        <li><strong>O Grande Efeito:</strong> Durante a oscilação, <strong>todas as ligações axiais viram equatoriais e todas as equatoriais viram axiais</strong> [42]!</li>
                    </ul>
                    
                    <p>Se colocarmos um grupo substituinte no ciclo-hexano (como o metilciclo-hexano), as duas cadeiras possíveis não serão iguais em energia [43]:</p>
                    <ul>
                        <li><strong>Substituinte na posição Axial:</strong> É instável [43]. O grupo axial sofre repulsão estérica dos hidrogênios axiais vizinhos do mesmo lado do anel. Esse fenômeno é conhecido como <strong>interação 1,3-diaxial</strong> [44] (que equivale espacialmente a uma tensão gauche do butano [44]).</li>
                        <li><strong>Substituinte na posição Equatorial:</strong> É altamente estável [43]. Fora do anel, o grupo tem bastante espaço livre e não sofre interações de repulsão [44].</li>
                        <li><strong>Grupos Volumosos:</strong> Um grupo gigante como o <strong>terc-butila</strong> é tão volumoso que sua interação 1,3-diaxial seria devastadora para a molécula [45, 46]. Por isso, o anel fica "travado" com o terc-butila na <strong>posição equatorial</strong> em 99,99% do tempo [45, 46].</li>
                    </ul>
                    
                    <h3>🧠 Desafio Prático (Evocação Ativa)</h3>
                    <p><em>Responda rápido para fixar na memória:</em></p>
                    <ol>
                        <li>Qual alcano ferve em temperatura mais alta: o octano ou o hexano? Por quê? [15, 23, 24]</li>
                        <li>Por que a conformação <em>gauche</em> do butano é menos estável que a conformação <em>anti</em>? [44]</li>
                        <li>Durante a oscilação do anel do ciclo-hexano, o que acontece com um grupo metila que estava em posição axial? [42]</li>
                    </ol>
                    
                    <p><strong>Referências de Estudo Genuínas baseadas nas fontes:</strong></p>
                    <ul>
                        <li><em>Solomons, T. W. G., Química Orgânica Vol 1</em> [10, 22].</li>
                        <li><em>Clayden, J., Organic Chemistry</em> [1].</li>
                        <li><em>Russel, J. B., Química Geral Vol 1 & 2</em> [5, 63].</li>
                    </ul>
                </div>"""

html = html.replace(old_content, new_content)

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated successfully")
