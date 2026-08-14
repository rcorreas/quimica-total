import re

with open("src/app/materias/quimica-organica/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = """                <div id="topic-10-1" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Espectroscopia de Infravermelho (IV)</h2>
                    <p>Identificação de grupos funcionais.</p>
                </div>

                <div id="topic-10-2" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Ressonância Magnética Nuclear (\$^\text{1}H\$-RMN e \$^\text{13}C\$-RMN)</h2>
                    <p>Determinação da conectividade da estrutura carbônica.</p>
                </div>

                <div id="topic-10-3" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Espectrometria de Massas (EM)</h2>
                    <p>Massa molecular e padrões de fragmentação.</p>
                </div>"""

# Let's check the exact string first
target_regex = r'<div id="topic-10-1".*?Espectrometria de Massas \(EM\).*?</div>'

replacement = """                <div id="topic-10" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural: Os Detetives Moleculares</h2>
                    <p>Imagine que você recebeu uma caixa lacrada contendo uma substância desconhecida. Você não pode abrir a caixa nem enxergar as moléculas diretamente — afinal, elas são pequenas demais para qualquer microscópio comum. Como os químicos descobrem a estrutura exata de uma molécula nova?</p>
                    <p>Eles usam a Espectroscopia e a Espectrometria! Nesta aula, vamos aprender a decifrar as três principais ferramentas que funcionam como os "detetives moleculares" da química orgânica.</p>
                </div>

                <div id="topic-10-1" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Espectroscopia de Infravermelho (IV)</h2>
                    <h3>O Identificador de Digitais</h3>
                    <p>A espectroscopia de infravermelho não usa raios-X nem luz visível, mas sim ondas de calor (infravermelho).</p>

                    <h4>🧠 A Sacada Física: Moléculas Dançarinas</h4>
                    <p>As ligações químicas covalentes entre os átomos não são estacas rígidas; elas se comportam como molas flexíveis. Essas molas estão constantemente vibrando. Quando jogamos luz infravermelha sobre uma molécula, as ligações absorvem essa radiação e começam a vibrar ainda mais forte (em movimentos de estiramento ou deformação angular).</p>
                    <p>Como cada tipo de ligação precisa de uma quantidade de energia muito específica para vibrar, a radiação absorvida funciona como uma impressão digital de qual grupo funcional está presente. Essa absorção é medida em uma escala chamada número de onda (cm⁻¹).</p>

                    <h4>🗺️ O Mapa de Digitais do IV (As Bandas Clássicas):</h4>
                    <p>Para o seu cérebro memorizar sem esforço, foque nos três sinais mais famosos que aparecem no espectro de IV:</p>
                    <ul>
                        <li><strong>A "Língua" da Hidroxila (O—H):</strong> Álcoois e ácidos carboxílicos apresentam uma banda de absorção muito larga e arredondada entre 3200 e 3600 cm⁻¹. Ela é larga porque as moléculas de álcool fazem ligações de hidrogênio entre si, criando uma vasta distribuição de frequências.</li>
                        <li><strong>A "Espada" da Carbonila (C=O):</strong> Se houver uma ligação dupla carbono-oxigênio (presente em aldeídos, cetonas, ésteres e ácidos carboxílicos), você verá um pico extremamente forte, profundo e estreito entre 1630 e 1780 cm⁻¹. Ele corta o gráfico como uma espada!</li>
                        <li><strong>O "Pente" de Estiramento C—H:</strong> Os picos de ligações C—H variam dependendo da hibridização do carbono:
                            <ul>
                                <li>C—H de carbono \\(sp^3\\) (alcanos): Abaixo de 3000 cm⁻¹ (2800–3000 cm⁻¹).</li>
                                <li>C—H de carbono \\(sp^2\\) (alcenos/aromáticos): Logo acima de 3000 cm⁻¹ (3000–3100 cm⁻¹).</li>
                                <li>C—H de carbono \\(sp\\) (alcinos): Um pico estreito e forte em torno de 3300 cm⁻¹.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div id="topic-10-2" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Ressonância Magnética Nuclear (\\(^1\\text{H}\\)-RMN e \\(^{13}\\text{C}\\)-RMN)</h2>
                    <h3>O Google Maps da Molécula</h3>
                    <p>A RMN é a técnica mais poderosa da química orgânica. Ela nos permite mapear a conectividade, ou seja, quem está ligado a quem na estrutura carbônica. Ela usa o mesmo princípio das máquinas de ressonância magnética dos hospitais.</p>

                    <h4>🧲 O Princípio do Ímã</h4>
                    <p>Alguns núcleos atômicos, como os de Hidrogênio (\\(^1\\text{H}\\)) e Carbono-13 (\\(^{13}\\text{C}\\)), agem como pequenos ímãs que ficam girando em torno de seu próprio eixo. Quando colocamos a amostra dentro de um campo magnético superforte e aplicamos ondas de rádio, esses pequenos "ímãs nucleares" entram em ressonância e absorvem energia.</p>

                    <h4>A) RMN de Próton (\\(^1\\text{H}\\)-RMN): Decifrando o Código dos Hidrogênios</h4>
                    <p>Quando analisamos um espectro de RMN de Hidrogênio, nosso cérebro deve procurar três pistas fundamentais:</p>
                    <ul>
                        <li><strong>Número de Sinais (Bairros Diferentes):</strong> Cada pico ou conjunto de picos representa um ambiente químico único na molécula. Hidrogênios que estão no mesmo ambiente (equivalentes) produzem um único sinal.</li>
                        <li><strong>Deslocamento Químico (\\(\\delta\\), em ppm) (Blindagem Eletrônica):</strong> Nos diz se o hidrogênio está perto de átomos "ladrões de elétrons" (como Oxigênio ou Cloro):
                            <ul>
                                <li><em>Blindado (Campo Alto/Direita - ppm baixo):</em> Hidrogênios cercados por uma nuvem eletrônica densa (como os de alcanos) ficam protegidos do campo magnético. O sinal aparece perto de 0 a 2 ppm.</li>
                                <li><em>Desblindado (Campo Baixo/Esquerda - ppm alto):</em> Se um átomo eletronegativo puxar a nuvem eletrônica para longe do hidrogênio, ele fica desprotegido (desblindado). O sinal é empurrado para a esquerda (ppm maior, ex: 3 a 5 ppm para ligados a oxigênios, ou até 9-10 ppm para aldeídos).</li>
                            </ul>
                        </li>
                        <li><strong>Integração (Tamanho da População):</strong> A área da curva de cada sinal é proporcional ao número de hidrogênios que produzem aquele sinal. Se um pico tem área 3 e outro tem área 2, sabemos que o primeiro vem de um grupo \\(-\\text{CH}_3\\) (3 H) e o segundo de um \\(-\\text{CH}_2-\\) (2 H).</li>
                        <li><strong>Desdobramento ("A Fofoca dos Vizinhos" - Regra do \\(N+1\\)):</strong> Devido ao acoplamento spin-spin com os hidrogênios dos carbonos vizinhos, os sinais se dividem em vários picos:
                            <ul>
                                <li>Se um carbono tem \\(N\\) hidrogênios vizinhos (no carbono do lado), o sinal dele se dividirá em \\(N + 1\\) picos.</li>
                                <li>Exemplo: Se o vizinho tem 2 hidrogênios, o sinal do seu átomo será um tripleto (\\(2+1=3\\)). Se não tiver nenhum vizinho, será um simpleto (\\(0+1=1\\)).</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>B) RMN de Carbono-13 (\\(^{13}\\text{C}\\)-RMN): A Espinha Dorsal</h4>
                    <p>Diferente do hidrogênio, no espectro comum de \\(^{13}\\text{C}\\) desacoplado, cada carbono diferente produz apenas um único pico bem definido (sem desdobramentos complexos).</p>
                    <p>Para saber quantos hidrogênios estão pendurados em cada carbono, os químicos usam uma técnica chamada DEPT, que classifica os picos de carbono diretamente em \\(\\text{CH}_3\\), \\(\\text{CH}_2\\), \\(\\text{CH}\\) ou carbono quaternário (\\(\\text{C}\\)).</p>
                </div>

                <div id="topic-10-3" class="topic-content">
                    <h2>10. Métodos Espectroscópicos e Análise Estrutural - Espectrometria de Massas (EM)</h2>
                    <h3>A Balança de Alta Precisão</h3>
                    <p>Diferente das anteriores, a Espectrometria de Massas não é uma técnica espectroscópica (ela não usa luz ou ondas eletromagnéticas). Ela funciona como uma balança de precisão atômica que pesa e quebra as moléculas.</p>

                    <h4>💥 O Bombardeio de Elétrons</h4>
                    <p>A amostra é vaporizada e bombardeada por um feixe de elétrons de alta energia. Esse impacto arranca um elétron da nossa molécula neutra, transformando-a em um cátion radicalar carregado positivamente, conhecido como Íon Molecular (\\(M^{+\\bullet}\\)).</p>

                    <p><strong>Mágica da Balança:</strong> Molécula (M) + \\(e^-\\) → <strong>\\(M^{+\\bullet}\\) (Íon Molecular)</strong> + 2\\(e^-\\)</p>

                    <p>O espectrômetro mede a razão massa/carga (\\(m/z\\)). Como a carga (\\(z\\)) quase sempre é +1, o valor de \\(m/z\\) do íon molecular nos dá diretamente a massa molecular exata da substância!</p>

                    <h4>✂️ O Padrão de Fragmentação (Caindo em Pedaços)</h4>
                    <p>O íon molecular é altamente energético e instável, quebrando-se rapidamente em pedaços menores (carbocátions e radicais livres).</p>
                    <ul>
                        <li>Apenas os fragmentos carregados positivamente (cátions) são detectados pela máquina (os radicais neutros são invisíveis para o detector).</li>
                        <li>A molécula sempre prefere se quebrar nos pontos que geram os carbocátions mais estáveis (como terciários ou alílicos estabilizados por ressonância).</li>
                        <li><strong>O Pico Base:</strong> O fragmento mais estável e abundante de todos recebe a altura máxima de 100% no gráfico, e todos os outros picos são medidos em relação a ele.</li>
                    </ul>

                    <h4>👥 O Efeito Isótopo (Cloro e Bromo)</h4>
                    <p>Alguns elementos têm isótopos naturais muito abundantes que deixam assinaturas visuais incríveis no espectro de massas:</p>
                    <ul>
                        <li><strong>Cloro (\\(^{35}\\text{Cl}\\) e \\(^{37}\\text{Cl}\\)):</strong> Apresenta dois picos para o íon molecular (\\(M^{+\\bullet}\\) e \\(M+2\\)) com uma proporção de altura de 3:1.</li>
                        <li><strong>Bromo (\\(^{79}\\text{Br}\\) e \\(^{81}\\text{Br}\\)):</strong> Apresenta dois picos para o íon molecular (\\(M^{+\\bullet}\\) e \\(M+2\\)) com uma proporção de altura quase igual de 1:1.</li>
                    </ul>
                </div>"""

new_content = re.sub(target_regex, replacement, content, flags=re.DOTALL)

with open("src/app/materias/quimica-organica/page.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"File modified. Content replaced: {content != new_content}")
