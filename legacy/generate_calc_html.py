import re

with open('/Users/rcorreas/Desktop/QT/index.html', 'r', encoding='utf-8') as f:
    org_html = f.read()

# Extract header and footer
head = org_html[:org_html.find('<main class="main-content">')]
footer = org_html[org_html.find('</main>'):]

# Fix the active link in the menu
head = head.replace('<a href="index.html" class="active">Home</a>', '<a href="index.html">Home</a>')
head = head.replace('<a href="#">Calculadoras</a>', '<a href="calculadoras.html" class="active">Calculadoras</a>')
head = head.replace('<title>Química Total</title>', '<title>Calculadoras - Química Total</title>')

# Tailwind CSS via CDN for the calculator part, but scoped or just use the classes
# We can just add Tailwind CDN to the head
tailwind_script = '<script src="https://cdn.tailwindcss.com"></script>\n'
head = head.replace('</head>', tailwind_script + '</head>')


content = """
    <main class="main-content" style="padding-top: 40px; padding-bottom: 40px;">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px; font-size: 36px; color: var(--primary-color);">Calculadoras Químicas</h2>
            
            <div class="w-full max-w-4xl mx-auto p-6 bg-[#0D1117] text-[#F0F6FC] rounded-xl border border-[#30363D]" style="font-family: ui-sans-serif, system-ui, sans-serif;">
              <!-- Navegação entre Abas -->
              <div class="flex gap-4 border-b border-[#30363D] pb-4 mb-6">
                <button id="tab-molaridade" class="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#238636] text-white">
                  Molaridade (M)
                </button>
                <button id="tab-diluicao" class="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]">
                  Diluição ($C_1V_1 = C_2V_2$)
                </button>
              </div>

              <!-- ABA 1: MOLARIDADE -->
              <div id="content-molaridade" class="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <!-- PAINEL DE RESULTADO -->
                <div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] flex flex-col justify-between">
                  <div>
                    <span class="text-xs uppercase font-mono tracking-wider text-[#8B949E]">Concentração Molar</span>
                    <div class="text-4xl font-mono font-bold text-[#58A6FF] mt-2">
                      <span id="mol-result">0.1000</span> <span class="text-lg text-[#F0F6FC]">mol/L</span>
                    </div>
                  </div>

                  <div class="mt-6 pt-4 border-t border-[#30363D] text-xs font-mono text-[#8B949E]">
                    <p class="font-semibold text-[#F0F6FC] mb-1">Fórmula utilizada:</p>
                    <p class="bg-[#0D1117] p-2 rounded border border-[#30363D] text-center text-[#58A6FF]">
                      M = m / (MM × V)
                    </p>
                  </div>
                </div>
              </div>

              <!-- ABA 2: DILUIÇÃO -->
              <div id="content-diluicao" class="grid grid-cols-1 md:grid-cols-2 gap-6 hidden">
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
                    <div class="text-4xl font-mono font-bold text-[#238636] mt-2">
                      <span id="dil-result">120.00</span> <span class="text-lg text-[#F0F6FC]">mL</span>
                    </div>
                  </div>

                  <div class="mt-6 pt-4 border-t border-[#30363D] text-xs font-mono text-[#8B949E]">
                    <p class="font-semibold text-[#F0F6FC] mb-1">Fórmula utilizada:</p>
                    <p class="bg-[#0D1117] p-2 rounded border border-[#30363D] text-center text-[#238636]">
                      V₂ = (C₁ × V₁) / C₂
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    </main>

    <script src="calculadoras.js"></script>
"""

# Reconstruct HTML
html = head + content + footer

with open('/Users/rcorreas/Desktop/QT/calculadoras.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Generated calculadoras.html")
