import re

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'r', encoding='utf-8') as f:
    org_html = f.read()

head = org_html[:org_html.find('<aside class="sidebar">')]
footer = org_html[org_html.find('</main>'):]

head = head.replace('<a href="index.html" class="active">Home</a>', '<a href="index.html">Home</a>')
head = head.replace('<a href="materias.html" class="active">Matérias</a>', '<a href="materias.html">Matérias</a>')
head = head.replace('<a href="calculadoras.html">Calculadoras</a>', '<a href="calculadoras.html" class="active">Calculadoras</a>')
head = head.replace('<title>Química Orgânica - Química Total</title>', '<title>Calculadoras - Química Total</title>')
head = head.replace('</head>', '<script src="https://cdn.tailwindcss.com"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n</head>')

sidebar = """<aside class="sidebar">
    <h3>Módulos de Cálculo</h3>
    <ul class="sidebar-menu" id="calcSidebar">
        <li class="menu-item calc-menu-item active" data-target="calc-molaridade">Molaridade e Diluição</li>
        <li class="menu-item calc-menu-item" data-target="calc-ph">pH e pOH</li>
        <li class="menu-item calc-menu-item" data-target="calc-estequiometria">Estequiometria</li>
        <li class="menu-item calc-menu-item" data-target="calc-conversores">Conversores</li>
    </ul>
</aside>
"""

content = """<div class="content-area" style="font-family: ui-sans-serif, system-ui, sans-serif;">
    <h2 style="font-size: 32px; color: var(--primary-color); margin-bottom: 24px;">Hub de Calculadoras Científicas</h2>
    <div class="w-full max-w-4xl p-6 bg-[#0D1117] text-[#F0F6FC] rounded-xl border border-[#30363D]">
        
        <!-- SEC: MOLARIDADE E DILUICAO -->
        <div id="calc-molaridade" class="calc-section">
            <h3 class="text-xl font-bold mb-4 text-[#F0F6FC]">Molaridade e Diluição</h3>
            <!-- Navegação entre Abas internas -->
            <div class="flex gap-4 border-b border-[#30363D] pb-4 mb-6">
                <button id="tab-molaridade" class="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#238636] text-white">Molaridade (M)</button>
                <button id="tab-diluicao" class="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]">Diluição ($C_1V_1 = C_2V_2$)</button>
            </div>
            
            <div id="content-molaridade" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Conteudo Molaridade (mesmo de antes) -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Massa do Soluto (g)</label>
                    <input type="number" id="mol-massa" value="5.844" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm focus:border-[#58A6FF] outline-none" placeholder="Ex: 5.84" />
                  </div>
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Fórmula ou Massa Molar (g/mol)</label>
                    <div class="flex gap-2">
                      <input type="text" id="mol-formula" value="NaCl" class="w-1/2 bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm focus:border-[#58A6FF] outline-none" placeholder="Fórmula (ex: H2O)" />
                      <input type="number" id="mol-mm" value="58.44" class="w-1/2 bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm focus:border-[#58A6FF] outline-none" placeholder="Ex: 58.44" />
                    </div>
                    <div id="mol-formula-error" class="text-xs text-red-500 mt-1 hidden">Erro na fórmula</div>
                  </div>
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Volume da Solução</label>
                    <div class="flex gap-2">
                      <input type="number" id="mol-volume" value="1000" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm focus:border-[#58A6FF] outline-none" placeholder="Ex: 1000" />
                      <select id="mol-unit" class="bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 text-sm font-mono focus:border-[#58A6FF] outline-none text-white">
                        <option value="0.001">mL</option>
                        <option value="1">L</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] flex flex-col justify-between">
                  <div>
                    <span class="text-xs uppercase font-mono tracking-wider text-[#8B949E]">Concentração Molar</span>
                    <div class="text-4xl font-mono font-bold text-[#58A6FF] mt-2"><span id="mol-result">0.1000</span> <span class="text-lg text-[#F0F6FC]">mol/L</span></div>
                  </div>
                  <div class="mt-6 pt-4 border-t border-[#30363D] text-xs font-mono text-[#8B949E]">
                    <p class="font-semibold text-[#F0F6FC] mb-1">Fórmula utilizada:</p>
                    <p class="bg-[#0D1117] p-2 rounded border border-[#30363D] text-center text-[#58A6FF]">M = m / (MM × V)</p>
                  </div>
                </div>
            </div>

            <div id="content-diluicao" class="grid grid-cols-1 md:grid-cols-2 gap-6 hidden">
                <!-- Conteudo Diluicao (mesmo de antes) -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Concentração Inicial (C₁)</label>
                    <input type="number" id="dil-c1" value="12" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
                  </div>
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Volume Inicial (V₁) [mL]</label>
                    <input type="number" id="dil-v1" value="10" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
                  </div>
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Concentração Final Desejada (C₂)</label>
                    <input type="number" id="dil-c2" value="1" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
                  </div>
                </div>
                <div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] flex flex-col justify-between">
                  <div>
                    <span class="text-xs uppercase font-mono tracking-wider text-[#8B949E]">Volume Final (V₂) Necessário</span>
                    <div class="text-4xl font-mono font-bold text-[#238636] mt-2"><span id="dil-result">120.00</span> <span class="text-lg text-[#F0F6FC]">mL</span></div>
                  </div>
                  <div class="mt-6 pt-4 border-t border-[#30363D] text-xs font-mono text-[#8B949E]">
                    <p class="font-semibold text-[#F0F6FC] mb-1">Fórmula utilizada:</p>
                    <p class="bg-[#0D1117] p-2 rounded border border-[#30363D] text-center text-[#238636]">V₂ = (C₁ × V₁) / C₂</p>
                  </div>
                </div>
            </div>
        </div>
        
        <!-- SEC: pH e pOH -->
        <div id="calc-ph" class="calc-section hidden">
            <h3 class="text-xl font-bold mb-4 text-[#F0F6FC]">pH, pOH e Constantes</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Tipo de Soluto</label>
                    <select id="ph-tipo" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 text-sm font-mono focus:border-[#58A6FF] outline-none text-white">
                        <option value="acido_forte">Ácido Forte (ex: HCl)</option>
                        <option value="base_forte">Base Forte (ex: NaOH)</option>
                        <option value="acido_fraco">Ácido Fraco (ex: CH3COOH)</option>
                        <option value="base_fraca">Base Fraca (ex: NH3)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Concentração Inicial (mol/L)</label>
                    <input type="number" id="ph-conc" value="0.1" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
                  </div>
                  
                  <div id="ph-ka-container" class="hidden">
                    <label class="block text-xs font-mono text-[#8B949E] mb-1">Constante de Ionização (Ka ou Kb)</label>
                    <input type="number" id="ph-ka" value="1.8e-5" class="w-full bg-[#161B22] border border-[#30363D] rounded-lg px-3 py-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
                  </div>
                </div>

                <div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="text-xs uppercase font-mono tracking-wider text-[#8B949E]">pH</span>
                            <div class="text-3xl font-mono font-bold text-[#58A6FF] mt-1" id="ph-result">1.00</div>
                        </div>
                        <div>
                            <span class="text-xs uppercase font-mono tracking-wider text-[#8B949E]">pOH</span>
                            <div class="text-3xl font-mono font-bold text-[#D2A8FF] mt-1" id="poh-result">13.00</div>
                        </div>
                    </div>
                    <div class="flex justify-between border-t border-[#30363D] pt-4">
                        <div>
                            <span class="text-xs font-mono text-[#8B949E]">[H⁺]</span>
                            <div class="text-sm font-mono text-[#F0F6FC] mt-1" id="h-result">1.0e-1 M</div>
                        </div>
                        <div>
                            <span class="text-xs font-mono text-[#8B949E]">[OH⁻]</span>
                            <div class="text-sm font-mono text-[#F0F6FC] mt-1" id="oh-result">1.0e-13 M</div>
                        </div>
                    </div>
                  </div>
                  <div class="mt-6 pt-4 border-t border-[#30363D] text-xs font-mono text-[#8B949E]">
                    <p class="font-semibold text-[#F0F6FC] mb-1">Fórmulas (pH):</p>
                    <p class="bg-[#0D1117] p-2 rounded border border-[#30363D] text-center text-[#8B949E]">pH = -log[H⁺] | pH + pOH = 14</p>
                  </div>
                </div>
            </div>
        </div>
        
        <!-- SEC: Estequiometria -->
        <div id="calc-estequiometria" class="calc-section hidden">
            <h3 class="text-xl font-bold mb-4 text-[#F0F6FC]">Estequiometria e Rendimento</h3>
            <div class="grid grid-cols-1 gap-6">
                <div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] text-center">
                    <p class="text-[#8B949E]">Módulo de estequiometria avançada (cálculo de reagente limitante e rendimento via balanceamento) está em desenvolvimento.</p>
                </div>
            </div>
        </div>

        <!-- SEC: Conversores -->
        <div id="calc-conversores" class="calc-section hidden">
            <h3 class="text-xl font-bold mb-4 text-[#F0F6FC]">Conversores de Unidades</h3>
            <div class="grid grid-cols-1 gap-6">
                <div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] text-center">
                    <p class="text-[#8B949E]">Módulo de conversores (Temperatura, Pressão, Densidade) está em desenvolvimento.</p>
                </div>
            </div>
        </div>
        
    </div>
</div>
"""

html = head + sidebar + content + footer

with open('/Users/rcorreas/Desktop/QT/calculadoras.html', 'w', encoding='utf-8') as f:
    f.write(html)
