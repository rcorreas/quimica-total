import re

with open('/Users/rcorreas/Desktop/QT/calculadoras.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Substituir o placeholder de Estequiometria
esteq_placeholder = """<div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] text-center">
                    <p class="text-[#8B949E]">Módulo de estequiometria avançada (cálculo de reagente limitante e rendimento via balanceamento) está em desenvolvimento.</p>
                </div>"""

esteq_new = """      {/* Entrada da Equação (aA + bB -> cC) */}
      <div class="bg-[#161B22] p-4 rounded-lg border border-[#30363D] mb-6">
        <span class="block text-xs font-mono text-[#8B949E] mb-2">Equação Química Ajustada:</span>
        <div class="flex flex-wrap items-center gap-2 font-mono text-sm">
          <input type="number" id="esteq-coefA" value="1" class="w-12 bg-[#0D1117] border border-[#30363D] rounded p-1 text-center outline-none focus:border-[#58A6FF] text-white" />
          <input type="text" id="esteq-formA" value="N2" class="w-20 bg-[#0D1117] border border-[#30363D] rounded p-1 text-center text-[#58A6FF] outline-none focus:border-[#58A6FF]" />
          <span>+</span>
          <input type="number" id="esteq-coefB" value="3" class="w-12 bg-[#0D1117] border border-[#30363D] rounded p-1 text-center outline-none focus:border-[#58A6FF] text-white" />
          <input type="text" id="esteq-formB" value="H2" class="w-20 bg-[#0D1117] border border-[#30363D] rounded p-1 text-center text-[#58A6FF] outline-none focus:border-[#58A6FF]" />
          <span>&rarr;</span>
          <input type="number" id="esteq-coefC" value="2" class="w-12 bg-[#0D1117] border border-[#30363D] rounded p-1 text-center outline-none focus:border-[#58A6FF] text-white" />
          <input type="text" id="esteq-formC" value="NH3" class="w-20 bg-[#0D1117] border border-[#30363D] rounded p-1 text-center text-[#238636] outline-none focus:border-[#58A6FF]" />
        </div>
      </div>

      {/* Massas Iniciais */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label class="block text-xs font-mono text-[#8B949E] mb-1">Massa de <span id="label-formA">N2</span> (g)</label>
          <input type="number" id="esteq-massaA" value="28" class="w-full bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
        </div>
        <div>
          <label class="block text-xs font-mono text-[#8B949E] mb-1">Massa de <span id="label-formB">H2</span> (g)</label>
          <input type="number" id="esteq-massaB" value="10" class="w-full bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
        </div>
        <div>
          <label class="block text-xs font-mono text-[#8B949E] mb-1">Rendimento Reacional (%)</label>
          <input type="number" id="esteq-rendimento" value="100" class="w-full bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
        </div>
      </div>

      {/* Painel de Resultados */}
      <div id="esteq-resultado-container" class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#161B22] p-6 rounded-xl border border-[#30363D]">
          <div>
            <span class="text-xs uppercase font-mono tracking-wider text-[#8B949E]">Análise dos Reagentes</span>
            <div class="mt-2 space-y-2 font-mono text-sm">
              <p>Reagente Limitante: <span id="esteq-res-limitante" class="text-[#F85149] font-bold">N2</span></p>
              <p>Reagente em Excesso: <span id="esteq-res-excesso" class="text-[#238636] font-bold">H2</span></p>
              <p class="text-xs text-[#8B949E] pt-2">
                Mols iniciais: <span id="esteq-res-formA">N2</span> = <span id="esteq-res-molsA">1.000</span> mol | <span id="esteq-res-formB">H2</span> = <span id="esteq-res-molsB">4.960</span> mol
              </p>
            </div>
          </div>

          <div>
            <span class="text-xs uppercase font-mono tracking-wider text-[#8B949E]">Massa de Produto (<span id="esteq-res-formC">NH3</span>)</span>
            <div class="mt-2 font-mono">
              <div class="text-2xl font-bold text-[#238636]">
                <span id="esteq-res-massaReal">34.06</span> g <span class="text-xs text-[#8B949E]">(<span id="esteq-res-rendimentoLabel">100</span>% rendimento)</span>
              </div>
              <div class="text-xs text-[#8B949E] mt-1">
                Rendimento Teórico (100%): <span id="esteq-res-massaTeorica">34.06</span> g
              </div>
            </div>
          </div>
      </div>
      
      <div id="esteq-erro-container" class="text-center p-6 bg-[#161B22] rounded-xl border border-[#30363D] text-[#8B949E] font-mono text-sm hidden">
          Insira fórmulas válidas e valores de massa para obter a análise estequiométrica.
      </div>"""

# Substituir o placeholder de Conversores
conv_placeholder = """<div class="bg-[#161B22] p-6 rounded-xl border border-[#30363D] text-center">
                    <p class="text-[#8B949E]">Módulo de conversores (Temperatura, Pressão, Densidade) está em desenvolvimento.</p>
                </div>"""

conv_new = """      {/* Abas das Categorias */}
      <div class="flex gap-2 border-b border-[#30363D] pb-4 mb-6">
          <button id="conv-tab-pressao" class="conv-tab px-4 py-2 rounded-lg text-sm font-mono capitalize transition-all bg-[#58A6FF] text-[#0D1117] font-bold">Pressão</button>
          <button id="conv-tab-temp" class="conv-tab px-4 py-2 rounded-lg text-sm font-mono capitalize transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]">Temperatura</button>
          <button id="conv-tab-conc" class="conv-tab px-4 py-2 rounded-lg text-sm font-mono capitalize transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]">Concentração</button>
      </div>

      {/* PAINEL: PRESSÃO */}
      <div id="conv-panel-pressao" class="conv-panel grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-xs font-mono text-[#8B949E] mb-2">Valor de Entrada</label>
            <div class="flex gap-2">
              <input type="number" id="conv-pressao-val" value="1" class="w-full bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
              <select id="conv-pressao-unit" class="bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF] text-white">
                <option value="atm">atm</option>
                <option value="bar">bar</option>
                <option value="mmHg">mmHg</option>
                <option value="kPa">kPa</option>
              </select>
            </div>
          </div>

          <div class="bg-[#161B22] p-4 rounded-xl border border-[#30363D] space-y-2 font-mono text-sm">
              <div class="text-xs text-[#8B949E] uppercase tracking-wider mb-2">Valores Equivalentes</div>
              <div class="flex justify-between"><span>Atmosphera (atm):</span> <span id="conv-res-pressao-atm" class="text-[#58A6FF]">1.0000</span></div>
              <div class="flex justify-between"><span>Bar (bar):</span> <span id="conv-res-pressao-bar" class="text-[#58A6FF]">1.0133</span></div>
              <div class="flex justify-between"><span>Milímetros de Hg (mmHg):</span> <span id="conv-res-pressao-mmhg" class="text-[#58A6FF]">760.00</span></div>
              <div class="flex justify-between"><span>Kilopascal (kPa):</span> <span id="conv-res-pressao-kpa" class="text-[#58A6FF]">101.33</span></div>
          </div>
      </div>

      {/* PAINEL: TEMPERATURA */}
      <div id="conv-panel-temp" class="conv-panel grid grid-cols-1 md:grid-cols-2 gap-6 hidden">
          <div>
            <label class="block text-xs font-mono text-[#8B949E] mb-2">Valor de Entrada</label>
            <div class="flex gap-2">
              <input type="number" id="conv-temp-val" value="25" class="w-full bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
              <select id="conv-temp-unit" class="bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF] text-white">
                <option value="C">°C</option>
                <option value="K">K</option>
                <option value="F">°F</option>
              </select>
            </div>
          </div>

          <div class="bg-[#161B22] p-4 rounded-xl border border-[#30363D] space-y-2 font-mono text-sm">
              <div class="text-xs text-[#8B949E] uppercase tracking-wider mb-2">Valores Equivalentes</div>
              <div class="flex justify-between"><span>Celsius (°C):</span> <span id="conv-res-temp-c" class="text-[#238636]">25.00</span></div>
              <div class="flex justify-between"><span>Kelvin (K):</span> <span id="conv-res-temp-k" class="text-[#238636]">298.15</span></div>
              <div class="flex justify-between"><span>Fahrenheit (°F):</span> <span id="conv-res-temp-f" class="text-[#238636]">77.00</span></div>
          </div>
      </div>

      {/* PAINEL: CONCENTRAÇÃO */}
      <div id="conv-panel-conc" class="conv-panel grid grid-cols-1 md:grid-cols-2 gap-6 hidden">
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-mono text-[#8B949E] mb-1">Fórmula do Soluto</label>
              <input type="text" id="conv-conc-form" value="NaOH" class="w-full bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF]" placeholder="Ex: NaOH, H2SO4" />
            </div>
            <div>
              <label class="block text-xs font-mono text-[#8B949E] mb-1">Concentração Molar (mol/L)</label>
              <input type="number" id="conv-conc-val" value="1" class="w-full bg-[#161B22] border border-[#30363D] rounded p-2 font-mono text-sm outline-none focus:border-[#58A6FF]" />
            </div>
          </div>

          <div id="conv-res-conc-container" class="bg-[#161B22] p-4 rounded-xl border border-[#30363D] space-y-2 font-mono text-sm">
              <div class="text-xs text-[#8B949E] uppercase tracking-wider mb-2">
                Conversão (MM: <span id="conv-res-conc-mm">40.00</span> g/mol)
              </div>
              <div class="flex justify-between"><span>Concentração Comum:</span> <span class="text-[#58A6FF]"><span id="conv-res-conc-gl">40.00</span> g/L</span></div>
              <div class="flex justify-between"><span>Porcentagem m/v:</span> <span class="text-[#58A6FF]"><span id="conv-res-conc-porc">4.00</span> %</span></div>
              <div class="flex justify-between"><span>Partes por Milhão:</span> <span class="text-[#58A6FF]"><span id="conv-res-conc-ppm">40000</span> ppm</span></div>
          </div>
          <div id="conv-err-conc-container" class="bg-[#161B22] p-4 rounded-xl border border-[#30363D] font-mono text-xs text-[#8B949E] flex items-center justify-center hidden">
              Insira uma fórmula válida para converter as unidades de concentração.
          </div>
      </div>"""

html = html.replace(esteq_placeholder, esteq_new)
html = html.replace(conv_placeholder, conv_new)

with open('/Users/rcorreas/Desktop/QT/calculadoras.html', 'w', encoding='utf-8') as f:
    f.write(html)
