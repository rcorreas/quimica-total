// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function Calculadoras() {
  useEffect(() => {
    // tabelaMassas.js
const PESOS_ATOMICOS = {
  H: 1.008, He: 4.0026, Li: 6.94, Be: 9.0122, B: 10.81, C: 12.011, N: 14.007,
  O: 15.999, F: 18.998, Ne: 20.180, Na: 22.990, Mg: 24.305, Al: 26.982,
  Si: 28.085, P: 30.974, S: 32.06, Cl: 35.45, K: 39.098, Ar: 39.948,
  Ca: 40.078, Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996, Mn: 54.938,
  Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546, Zn: 65.38, Ga: 69.723,
  Ge: 72.630, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798, Rb: 85.468,
  Sr: 87.62, Y: 88.906, Zr: 91.224, Nb: 92.906, Mo: 95.95, Tc: 98,
  Ru: 101.07, Rh: 102.91, Pd: 106.42, Ag: 107.87, Cd: 112.41, In: 114.82,
  Sn: 118.71, Sb: 121.76, Te: 127.60, I: 126.90, Xe: 131.29, Cs: 132.91,
  Ba: 137.33, La: 138.91, Ce: 140.12, Pr: 140.91, Nd: 144.24, Pm: 145,
  Sm: 150.36, Eu: 151.96, Gd: 157.25, Tb: 158.93, Dy: 162.50, Ho: 164.93,
  Er: 167.26, Tm: 168.93, Yb: 173.05, Lu: 174.97, Hf: 178.49, Ta: 180.95,
  W: 183.84, Re: 186.21, Os: 190.23, Ir: 192.22, Pt: 195.08, Au: 196.97,
  Hg: 200.59, Tl: 204.38, Pb: 207.2, Bi: 208.98, Th: 232.04, U: 238.03
};

function calcularMassaMolar(formula) {
  try {
    if (!formula || formula.trim() === '') {
      return { sucesso: false, massaMolar: 0, contagemElementos: {}, erro: 'Fórmula vazia' };
    }

    const partesHidrato = formula.replace(/\s+/g, '').split(/[\.\*]/);
    const contagemTotal = {};

    for (const parte of partesHidrato) {
      if (!parte) continue;

      const matchCoeficiente = parte.match(/^(\d+)(.+)$/);
      let multiplicador = 1;
      let subFormula = parte;

      if (matchCoeficiente) {
        multiplicador = parseInt(matchCoeficiente[1], 10);
        subFormula = matchCoeficiente[2];
      }

      const contagemParcial = parseSubFormula(subFormula);

      for (const [elem, qtd] of Object.entries(contagemParcial)) {
        contagemTotal[elem] = (contagemTotal[elem] || 0) + qtd * multiplicador;
      }
    }

    let massaMolar = 0;
    for (const [elemento, quantidade] of Object.entries(contagemTotal)) {
      const pesoAtomo = PESOS_ATOMICOS[elemento];
      if (!pesoAtomo) {
        throw new Error(`Elemento desconhecido: "${elemento}"`);
      }
      massaMolar += pesoAtomo * quantidade;
    }

    return {
      sucesso: true,
      massaMolar: parseFloat(massaMolar.toFixed(4)),
      contagemElementos: contagemTotal
    };

  } catch (err) {
    return {
      sucesso: false,
      massaMolar: 0,
      contagemElementos: {},
      erro: err.message || 'Erro ao processar fórmula'
    };
  }
}

function parseSubFormula(str) {
  let f = str;
  f = f.replace(/\[/g, '(').replace(/\]/g, ')');
  f = f.replace(/\{/g, '(').replace(/\}/g, ')');

  const regexParenteses = /\(([^()]+)\)(\d*)/;
  
  while (regexParenteses.test(f)) {
    f = f.replace(regexParenteses, (_, grupo, multStr) => {
      const multiplicador = multStr ? parseInt(multStr, 10) : 1;
      const mapaInterno = parseMapeamentoSimples(grupo);
      
      return Object.entries(mapaInterno)
        .map(([elem, qtd]) => `${elem}${qtd * multiplicador}`)
        .join('');
    });
  }

  return parseMapeamentoSimples(f);
}

function parseMapeamentoSimples(str) {
  const mapa = {};
  const regexElemento = /([A-Z][a-z]*)(\d*)/g;
  let match;
  let posVerificada = 0;
  
  while ((match = regexElemento.exec(str)) !== null) {
    if (match.index !== posVerificada) {
      throw new Error(`Sintaxe inválida próxima a "${str.slice(posVerificada)}"`);
    }

    const elemento = match[1];
    const quantidade = match[2] ? parseInt(match[2], 10) : 1;

    mapa[elemento] = (mapa[elemento] || 0) + quantidade;
    posVerificada = regexElemento.lastIndex;
  }

  if (posVerificada !== str.length) {
    throw new Error(`Sintaxe ou símbolo inválido em "${str.slice(posVerificada)}"`);
  }

  return mapa;
}


// Interação com o DOM


    // ==== SIDEBAR ====
    const menuItems = document.querySelectorAll('.calc-menu-item');
    const sections = document.querySelectorAll('.calc-section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(m => m.parentElement.classList.remove('expanded'));
            item.parentElement.classList.add('expanded');
            
            const targetId = item.getAttribute('data-target');
            sections.forEach(sec => {
                if (sec.id === targetId) sec.classList.remove('hidden');
                else sec.classList.add('hidden');
            });
        });
    });

    // ==== Abas Molaridade/Diluição ====
    const tabMolaridade = document.getElementById('tab-molaridade');
    const tabDiluicao = document.getElementById('tab-diluicao');
    const contentMolaridade = document.getElementById('content-molaridade');
    const contentDiluicao = document.getElementById('content-diluicao');

    function switchTab(mode) {
        if (mode === 'molaridade') {
            tabMolaridade.className = 'px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#238636] text-white';
            tabDiluicao.className = 'px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]';
            contentMolaridade.classList.remove('hidden');
            contentDiluicao.classList.add('hidden');
        } else {
            tabDiluicao.className = 'px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#238636] text-white';
            tabMolaridade.className = 'px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]';
            contentDiluicao.classList.remove('hidden');
            contentMolaridade.classList.add('hidden');
        }
    }

    tabMolaridade.addEventListener('click', () => switchTab('molaridade'));
    tabDiluicao.addEventListener('click', () => switchTab('diluicao'));

    // ==== Molaridade ====
    const m_massa = document.getElementById('mol-massa');
    const m_formula = document.getElementById('mol-formula');
    const m_mm = document.getElementById('mol-mm');
    const m_volume = document.getElementById('mol-volume');
    const m_unit = document.getElementById('mol-unit');
    const m_result = document.getElementById('mol-result');
    const m_formula_error = document.getElementById('mol-formula-error');

    function updateMolaridade() {
        const massa = parseFloat(m_massa.value);
        const mm = parseFloat(m_mm.value);
        const vol = parseFloat(m_volume.value);
        const unit = parseFloat(m_unit.value);

        if (isNaN(massa) || isNaN(mm) || isNaN(vol) || mm === 0 || vol === 0) {
            m_result.textContent = '---';
            return;
        }

        const volLitros = vol * unit;
        const conc = massa / (mm * volLitros);
        m_result.textContent = conc.toFixed(4);
    }

    m_formula.addEventListener('input', (e) => {
        const str = e.target.value;
        if (!str.trim()) {
            m_formula_error.classList.add('hidden');
            return;
        }
        
        const res = calcularMassaMolar(str);
        if (res.sucesso) {
            m_mm.value = res.massaMolar;
            m_formula_error.classList.add('hidden');
            updateMolaridade();
        } else {
            m_formula_error.textContent = res.erro;
            m_formula_error.classList.remove('hidden');
        }
    });

    [m_massa, m_mm, m_volume, m_unit].forEach(el => el.addEventListener('input', updateMolaridade));

    // ==== Diluição ====
    const d_c1 = document.getElementById('dil-c1');
    const d_v1 = document.getElementById('dil-v1');
    const d_c2 = document.getElementById('dil-c2');
    const d_result = document.getElementById('dil-result');

    function updateDiluicao() {
        const c1 = parseFloat(d_c1.value);
        const v1 = parseFloat(d_v1.value);
        const c2 = parseFloat(d_c2.value);

        if (isNaN(c1) || isNaN(v1) || isNaN(c2) || c2 === 0) {
            d_result.textContent = '---';
            return;
        }

        const v2 = (c1 * v1) / c2;
        d_result.textContent = v2.toFixed(2);
    }

    [d_c1, d_v1, d_c2].forEach(el => el.addEventListener('input', updateDiluicao));

    // ==== pH e pOH ====
    const ph_tipo = document.getElementById('ph-tipo');
    const ph_conc = document.getElementById('ph-conc');
    const ph_ka = document.getElementById('ph-ka');
    const ph_ka_container = document.getElementById('ph-ka-container');
    const ph_result = document.getElementById('ph-result');
    const poh_result = document.getElementById('poh-result');
    const h_result = document.getElementById('h-result');
    const oh_result = document.getElementById('oh-result');

    function updatePH() {
        const tipo = ph_tipo.value;
        const c = parseFloat(ph_conc.value);
        const k = parseFloat(ph_ka.value);

        if (isNaN(c) || c <= 0) {
            ph_result.textContent = '---'; poh_result.textContent = '---';
            h_result.textContent = '---'; oh_result.textContent = '---';
            return;
        }

        let h_conc = 0;
        let oh_conc = 0;

        if (tipo === 'acido_forte') {
            ph_ka_container.classList.add('hidden');
            h_conc = c;
            oh_conc = 1e-14 / h_conc;
        } else if (tipo === 'base_forte') {
            ph_ka_container.classList.add('hidden');
            oh_conc = c;
            h_conc = 1e-14 / oh_conc;
        } else if (tipo === 'acido_fraco') {
            ph_ka_container.classList.remove('hidden');
            if (isNaN(k) || k <= 0) return;
            // x^2 / (c - x) = Ka => x^2 + Ka*x - Ka*c = 0
            const a = 1;
            const b = k;
            const delta = Math.pow(b, 2) - 4 * a * (-k * c);
            h_conc = (-b + Math.sqrt(delta)) / (2 * a);
            oh_conc = 1e-14 / h_conc;
        } else if (tipo === 'base_fraca') {
            ph_ka_container.classList.remove('hidden');
            if (isNaN(k) || k <= 0) return;
            // x^2 / (c - x) = Kb
            const a = 1;
            const b = k;
            const delta = Math.pow(b, 2) - 4 * a * (-k * c);
            oh_conc = (-b + Math.sqrt(delta)) / (2 * a);
            h_conc = 1e-14 / oh_conc;
        }

        const ph = -Math.log10(h_conc);
        const poh = -Math.log10(oh_conc);

        ph_result.textContent = ph.toFixed(2);
        poh_result.textContent = poh.toFixed(2);
        h_result.textContent = h_conc.toExponential(2) + ' M';
        oh_result.textContent = oh_conc.toExponential(2) + ' M';
    }

    [ph_tipo, ph_conc, ph_ka].forEach(el => el.addEventListener('input', updatePH));

    // Inicializar cálculos
    updateMolaridade();
    updateDiluicao();
    updatePH();
    // ==== ESTEQUIOMETRIA ====
    const e_coefA = document.getElementById('esteq-coefA');
    const e_formA = document.getElementById('esteq-formA');
    const e_coefB = document.getElementById('esteq-coefB');
    const e_formB = document.getElementById('esteq-formB');
    const e_coefC = document.getElementById('esteq-coefC');
    const e_formC = document.getElementById('esteq-formC');
    
    const e_massaA = document.getElementById('esteq-massaA');
    const e_massaB = document.getElementById('esteq-massaB');
    const e_rendimento = document.getElementById('esteq-rendimento');
    
    const l_formA = document.getElementById('label-formA');
    const l_formB = document.getElementById('label-formB');

    const e_res_container = document.getElementById('esteq-resultado-container');
    const e_err_container = document.getElementById('esteq-erro-container');

    const e_res_limitante = document.getElementById('esteq-res-limitante');
    const e_res_excesso = document.getElementById('esteq-res-excesso');
    const e_res_formA = document.getElementById('esteq-res-formA');
    const e_res_molsA = document.getElementById('esteq-res-molsA');
    const e_res_formB = document.getElementById('esteq-res-formB');
    const e_res_molsB = document.getElementById('esteq-res-molsB');
    
    const e_res_formC = document.getElementById('esteq-res-formC');
    const e_res_massaReal = document.getElementById('esteq-res-massaReal');
    const e_res_rendLabel = document.getElementById('esteq-res-rendimentoLabel');
    const e_res_massaTeorica = document.getElementById('esteq-res-massaTeorica');

    function updateEstequiometria() {
        const cA = Math.max(1, parseFloat(e_coefA.value) || 1);
        const cB = Math.max(1, parseFloat(e_coefB.value) || 1);
        const cC = Math.max(1, parseFloat(e_coefC.value) || 1);
        
        const fA = e_formA.value || '';
        const fB = e_formB.value || '';
        const fC = e_formC.value || '';
        
        l_formA.textContent = fA;
        l_formB.textContent = fB;
        
        const mA = parseFloat(e_massaA.value);
        const mB = parseFloat(e_massaB.value);
        const rend = parseFloat(e_rendimento.value) || 100;
        
        const resA = calcularMassaMolar(fA);
        const resB = calcularMassaMolar(fB);
        const resC = calcularMassaMolar(fC);

        if (!resA.sucesso || !resB.sucesso || !resC.sucesso || isNaN(mA) || isNaN(mB)) {
            e_res_container.classList.add('hidden');
            e_err_container.classList.remove('hidden');
            return;
        }

        e_res_container.classList.remove('hidden');
        e_err_container.classList.add('hidden');

        const mmA = resA.massaMolar;
        const mmB = resB.massaMolar;
        const mmC = resC.massaMolar;

        const molsA = mA / mmA;
        const molsB = mB / mmB;

        const razaoA = molsA / cA;
        const razaoB = molsB / cB;

        let limitante = fA;
        let excesso = fB;
        let molsLimitante = molsA;
        let coefLimitante = cA;

        if (razaoB < razaoA) {
            limitante = fB;
            excesso = fA;
            molsLimitante = molsB;
            coefLimitante = cB;
        }

        const molsTeorico = (molsLimitante / coefLimitante) * cC;
        const massaTeorica = molsTeorico * mmC;
        const massaReal = massaTeorica * (rend / 100);

        e_res_limitante.textContent = limitante;
        e_res_excesso.textContent = excesso;
        e_res_formA.textContent = fA;
        e_res_molsA.textContent = molsA.toFixed(3);
        e_res_formB.textContent = fB;
        e_res_molsB.textContent = molsB.toFixed(3);
        
        e_res_formC.textContent = fC;
        e_res_massaReal.textContent = massaReal.toFixed(2);
        e_res_rendLabel.textContent = rend;
        e_res_massaTeorica.textContent = massaTeorica.toFixed(2);
    }

    [e_coefA, e_formA, e_coefB, e_formB, e_coefC, e_formC, e_massaA, e_massaB, e_rendimento].forEach(el => el.addEventListener('input', updateEstequiometria));

    // ==== CONVERSORES ====
    const convTabs = document.querySelectorAll('.conv-tab');
    const convPanels = document.querySelectorAll('.conv-panel');
    
    convTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            convTabs.forEach(t => {
                t.className = 'conv-tab px-4 py-2 rounded-lg text-sm font-mono capitalize transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]';
            });
            tab.className = 'conv-tab px-4 py-2 rounded-lg text-sm font-mono capitalize transition-all bg-[#58A6FF] text-[#0D1117] font-bold';
            
            const target = tab.id.replace('conv-tab-', 'conv-panel-');
            convPanels.forEach(p => {
                if (p.id === target) p.classList.remove('hidden');
                else p.classList.add('hidden');
            });
        });
    });

    const c_pressao_val = document.getElementById('conv-pressao-val');
    const c_pressao_unit = document.getElementById('conv-pressao-unit');
    const c_res_p_atm = document.getElementById('conv-res-pressao-atm');
    const c_res_p_bar = document.getElementById('conv-res-pressao-bar');
    const c_res_p_mmhg = document.getElementById('conv-res-pressao-mmhg');
    const c_res_p_kpa = document.getElementById('conv-res-pressao-kpa');

    function updatePressao() {
        const val = parseFloat(c_pressao_val.value);
        const unit = c_pressao_unit.value;
        if (isNaN(val)) return;

        let emAtm = val;
        if (unit === 'bar') emAtm = val / 1.01325;
        if (unit === 'mmHg') emAtm = val / 760;
        if (unit === 'kPa') emAtm = val / 101.325;

        c_res_p_atm.textContent = emAtm.toFixed(4);
        c_res_p_bar.textContent = (emAtm * 1.01325).toFixed(4);
        c_res_p_mmhg.textContent = (emAtm * 760).toFixed(2);
        c_res_p_kpa.textContent = (emAtm * 101.325).toFixed(2);
    }
    [c_pressao_val, c_pressao_unit].forEach(el => el.addEventListener('input', updatePressao));

    const c_temp_val = document.getElementById('conv-temp-val');
    const c_temp_unit = document.getElementById('conv-temp-unit');
    const c_res_t_c = document.getElementById('conv-res-temp-c');
    const c_res_t_k = document.getElementById('conv-res-temp-k');
    const c_res_t_f = document.getElementById('conv-res-temp-f');

    function updateTemp() {
        const val = parseFloat(c_temp_val.value);
        const unit = c_temp_unit.value;
        if (isNaN(val)) return;

        let emCelsius = val;
        if (unit === 'K') emCelsius = val - 273.15;
        if (unit === 'F') emCelsius = (val - 32) * (5 / 9);

        c_res_t_c.textContent = emCelsius.toFixed(2);
        c_res_t_k.textContent = (emCelsius + 273.15).toFixed(2);
        c_res_t_f.textContent = ((emCelsius * 9) / 5 + 32).toFixed(2);
    }
    [c_temp_val, c_temp_unit].forEach(el => el.addEventListener('input', updateTemp));

    const c_conc_form = document.getElementById('conv-conc-form');
    const c_conc_val = document.getElementById('conv-conc-val');
    const c_res_c_cont = document.getElementById('conv-res-conc-container');
    const c_err_c_cont = document.getElementById('conv-err-conc-container');
    const c_res_c_mm = document.getElementById('conv-res-conc-mm');
    const c_res_c_gl = document.getElementById('conv-res-conc-gl');
    const c_res_c_porc = document.getElementById('conv-res-conc-porc');
    const c_res_c_ppm = document.getElementById('conv-res-conc-ppm');

    function updateConc() {
        const val = parseFloat(c_conc_val.value);
        const form = c_conc_form.value;
        
        const resMM = calcularMassaMolar(form);
        if (!resMM.sucesso || isNaN(val)) {
            c_res_c_cont.classList.add('hidden');
            c_err_c_cont.classList.remove('hidden');
            return;
        }
        c_res_c_cont.classList.remove('hidden');
        c_err_c_cont.classList.add('hidden');

        const mm = resMM.massaMolar;
        const gL = val * mm;
        const porcMV = gL / 10;

        c_res_c_mm.textContent = mm.toFixed(2);
        c_res_c_gl.textContent = gL.toFixed(2);
        c_res_c_porc.textContent = porcMV.toFixed(2);
        c_res_c_ppm.textContent = (gL * 1000).toFixed(0);
    }
    [c_conc_form, c_conc_val].forEach(el => el.addEventListener('input', updateConc));

    // Inicializar os novos calculos
    updateEstequiometria();
    updatePressao();
    updateTemp();
    updateConc();

  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="lazyOnload" />
      <div className="flex-1 flex flex-col" dangerouslySetInnerHTML={{ __html: `<main class="main-content layout-sidebar">
        <div class="container sidebar-container">
            <!-- Menu Lateral -->
            <aside class="sidebar">
    <h3>Módulos de Cálculo</h3>
    <ul class="sidebar-menu" id="calcSidebar">
        <li class="menu-item expanded">
            <div class="menu-title calc-menu-item" data-target="calc-molaridade" style="border-radius: 8px;">Molaridade e Diluição</div>
        </li>
        <li class="menu-item">
            <div class="menu-title calc-menu-item" data-target="calc-ph" style="border-radius: 8px;">pH e pOH</div>
        </li>
        <li class="menu-item">
            <div class="menu-title calc-menu-item" data-target="calc-estequiometria" style="border-radius: 8px;">Estequiometria</div>
        </li>
        <li class="menu-item">
            <div class="menu-title calc-menu-item" data-target="calc-conversores" style="border-radius: 8px;">Conversores</div>
        </li>
    </ul>
</aside>
<div class="content-area" style="font-family: ui-sans-serif, system-ui, sans-serif;">
    <h2 style="font-size: 32px; color: var(--primary-color); margin-bottom: 24px;">Hub de Calculadoras Científicas</h2>
    <div class="w-full max-w-4xl p-6 bg-[#0D1117] text-[#F0F6FC] rounded-xl border border-[#30363D]">
        
        <!-- SEC: MOLARIDADE E DILUICAO -->
        <div id="calc-molaridade" class="calc-section">
            <h3 class="text-xl font-bold mb-4 text-[#F0F6FC]">Molaridade e Diluição</h3>
            <!-- Navegação entre Abas internas -->
            <div class="flex gap-4 border-b border-[#30363D] pb-4 mb-6">
                <button id="tab-molaridade" class="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#238636] text-white">Molaridade (M)</button>
                <button id="tab-diluicao" class="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]">Diluição (\$C_1V_1 = C_2V_2\$)</button>
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
                      {/* Entrada da Equação (aA + bB -> cC) */}
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
      </div>
            </div>
        </div>

        <!-- SEC: Conversores -->
        <div id="calc-conversores" class="calc-section hidden">
            <h3 class="text-xl font-bold mb-4 text-[#F0F6FC]">Conversores de Unidades</h3>
            <div class="grid grid-cols-1 gap-6">
                      {/* Abas das Categorias */}
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
      </div>
            </div>
        </div>
        
    </div>
</div>
</main>` }} />
    </>
  );
}
