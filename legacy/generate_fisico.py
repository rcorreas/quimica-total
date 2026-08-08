import re

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'r', encoding='utf-8') as f:
    org_html = f.read()

# Extract header and footer
head = org_html[:org_html.find('<aside class="sidebar">')]
footer = org_html[org_html.find('</main>'):]

menu_items = [
    {
        "title": "1. Gases e Estado Gaseoso",
        "subs": [
            "Gases Ideais: Leis dos gases (Boyle, Charles, Avogadro) e equação de estado do gás ideal ($PV = nRT$).",
            "Misturas de Gases: Lei das pressões parciais de Dalton e frações molares.",
            "Gases Reais: Desvios da idealidade, fator de compressibilidade ($Z$) e Equação de Van der Waals.",
            "Teoria Cinético-Molecular dos Gases: Distribuição de velocidades de Maxwell-Boltzmann, energia cinética e efusão/difusão."
        ]
    },
    {
        "title": "2. Primeira Lei da Termodinâmica",
        "subs": [
            "Conceitos Fundamentais: Sistema (aberto, fechado, isolado), vizinhança, estado e funções de estado.",
            "Trabalho, Calor e Energia Interna ($\Delta U$).",
            "Processos Reversíveis e Irreversíveis.",
            "Entalpia ($\Delta H$) e Capacidades Caloríficas ($C_p$ e $C_v$).",
            "Termoquímica: Lei de Hess, entalpia padrão de formação, de reação e de ligação."
        ]
    },
    {
        "title": "3. Segunda e Terceira Leis da Termodinâmica",
        "subs": [
            "A Segunda Lei e Entropia ($S$): Definição macroscópica e interpretação microscópica (estatística de Boltzmann).",
            "Ciclo de Carnot e Eficiência Térmica.",
            "Energia Livre de Gibbs ($G$) e Energia Livre de Helmholtz ($A$): Critérios de espontaneidade e equilíbrio.",
            "A Terceira Lei da Termodinâmica: Entropia absoluta e o zero absoluto.",
            "Relações Fundamentais e Equações de Maxwell."
        ]
    },
    {
        "title": "4. Termodinâmica de Substâncias Puras e Transições de Fase",
        "subs": [
            "Pressão de Vapor e Diagramas de Fase (substância pura).",
            "Equação de Clapeyron e Equação de Clausius-Clapeyron.",
            "Regra das Fases de Gibbs."
        ]
    },
    {
        "title": "5. Termodinâmica de Misturas e Soluções",
        "subs": [
            "Grandezas Molares Parciais: Potencial químico ($\mu$).",
            "Soluções Ideais: Lei de Raoult e Lei de Henry.",
            "Propriedades Coligativas: Abaixamento ebulioscópico, crioscópico, tonoscópico e pressão osmótica.",
            "Soluções Reais: Atividade, coeficiente de atividade e fugacidade.",
            "Diagramas de Fase Binários: Misturas líquidas, destilação fracionada e azeótropos."
        ]
    },
    {
        "title": "6. Equilíbrio Químico",
        "subs": [
            "A Condição Termodinâmica do Equilíbrio Químico ($\Delta G^\circ$).",
            "Constantes de Equilíbrio ($K_p$, $K_c$ e $K_a$).",
            "Efeito da Temperatura: Equação de van 't Hoff.",
            "Efeito da Pressão, Concentração e Princípio de Le Chatelier."
        ]
    },
    {
        "title": "7. Eletroquímica",
        "subs": [
            "Condutividade Eletrólitica: Condutância molar, Lei de Kohlrausch e atividade de íons em solução (Teoria de Debye-Hückel).",
            "Células Galvânicas e Células Eletrolíticas.",
            "Potencial Padrão de Eletrodo e Equação de Nernst.",
            "Aplicações: Pilhas, baterias, corrosão, eletrólise e titulações potenciométricas."
        ]
    },
    {
        "title": "8. Cinética Química",
        "subs": [
            "Velocidade de Reação e Leis de Velocidade Integradas (ordem 0, 1, 2 e pseudorregra).",
            "Meia-Vida ($t_{1/2}$).",
            "Mecanismos de Reação: Reações elementares, aproximação do estado estacionário e etapa determinante da velocidade.",
            "Dependência da Temperatura: Equação de Arrhenius e Energia de Ativação.",
            "Teorias de Velocidade de Reação: Teoria das Colisões e Teoria do Estado de Transição (Complexo Ativado).",
            "Catálise: Catálise homogênea, heterogênea e cinética enzimática (Michaelis-Menten)."
        ]
    },
    {
        "title": "9. Fenômenos de Superfície e Colóides",
        "subs": [
            "Tensão Superficial e Capilaridade.",
            "Adsorção em Superfícies Sólidas: Isotermas de adsorção de Langmuir e Freundlich.",
            "Química de Colóides: Agentes tensoativos, micelas, emulsões e efeito Tyndall."
        ]
    },
    {
        "title": "10. Introdução à Química Quântica (Físico-Química Molecular)",
        "subs": [
            "A Crise da Física Clássica: Radiação de corpo negro, efeito fotoelétrico e espectros atômicos.",
            "Dualidade Onda-Partícula e Princípio da Incerteza de Heisenberg.",
            "A Equação de Schrödinger: Função de onda e interpretação probabilística (Born).",
            "Modelos Simples: Partícula na caixa, oscilador harmônico (vibração) e rotor rígido (rotação).",
            "Átomo de Hidrogênio e introdução aos orbitais moleculares."
        ]
    },
    {
        "title": "11. Espectroscopia Molecular",
        "subs": [
            "Interação da Radiação com a Matéria e Absorção/Emissão.",
            "Espectroscopia Rotacional (Micro-ondas): Comprimento de ligação.",
            "Espectroscopia Vibracional (Infravermelho e Raman): Modos de vibração e forças de ligação.",
            "Espectroscopia Eletrônica (UV-Visível): Transições eletrônicas e curvas de energia potencial."
        ]
    }
]

sidebar = """<aside class="sidebar">
                <h3>Tópicos de Físico-Química</h3>
                <ul class="sidebar-menu accordion-menu" id="sidebarMenu">
"""

for i, section in enumerate(menu_items):
    sidebar += f'                    <li class="menu-item has-submenu">\n'
    sidebar += f'                        <div class="menu-title">{section["title"]}</div>\n'
    sidebar += f'                        <ul class="submenu">\n'
    for j, sub in enumerate(section["subs"]):
        sidebar += f'                            <li data-target="topic-{i+1}-{j}">{sub.split(":")[0] if ":" in sub else sub}</li>\n'
    sidebar += f'                        </ul>\n'
    sidebar += f'                    </li>\n'

sidebar += """                </ul>
            </aside>
"""

content = """            <!-- Área de Conteúdo -->
            <div class="content-area">
"""

for i, section in enumerate(menu_items):
    for j, sub in enumerate(section["subs"]):
        title = sub.split(":")[0] if ":" in sub else sub
        desc = sub.split(":")[1].strip() if ":" in sub else "Conteúdo em desenvolvimento..."
        
        content += f'                <div id="topic-{i+1}-{j}" class="topic-content">\n'
        content += f'                    <h2>{section["title"]} - {title}</h2>\n'
        content += f'                    <p>{desc}</p>\n'
        content += f'                </div>\n\n'

content += """            </div>
        </div>
"""

head = head.replace("Química Orgânica - Química Total", "Físico-Química - Química Total")
head = head.replace("Tópicos de Química Orgânica", "Tópicos de Físico-Química")

with open('/Users/rcorreas/Desktop/QT/fisico-quimica.html', 'w', encoding='utf-8') as f:
    f.write(head + sidebar + content + footer)

print("Generated fisico-quimica.html")
