import re

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'r', encoding='utf-8') as f:
    org_html = f.read()

# Extract header and footer
head = org_html[:org_html.find('<aside class="sidebar">')]
footer = org_html[org_html.find('</main>'):]

menu_items = [
    {
        "title": "1. Segurança, Boas Práticas e Organização",
        "subs": [
            "Regras de Segurança no Laboratório: Uso de Equipamentos de Proteção Individual (EPIs) e Coletiva (EPCs).",
            "Manuseio e Descarte de Resíduos Químicos: Simbologia de risco, rotulagem e Ficha de Informações de Segurança de Produtos Químicos (FISPQ/GHS).",
            "Identificação de Vidrarias, Equipamentos e Reagentes.",
            "Caderno de Laboratório: Registro de experimentos, observações e dados brutos."
        ]
    },
    {
        "title": "2. Técnicas Básicas de Medição e Tratamento de Dados",
        "subs": [
            "Uso de Balança Semianalítica e Analítica: Técnicas de pesagem e calibração.",
            "Medição e Transferência de Volumes: Manipulação de pipetas (graduadas e volumétricas), provetas, buretas e balões volumétricos.",
            "Erros de Medição, Algarismos Significativos e Cálculo de Incertezas.",
            "Determinação Experimental da Densidade de sólidos e líquidos."
        ]
    },
    {
        "title": "3. Operações Fundamentais de Separação e Purificação",
        "subs": [
            "Filtração Simples e Filtração a Vácuo.",
            "Decantação e Centrifugação.",
            "Evaporação e Cristalização/Recristalização.",
            "Destilação Simples e Fracionada.",
            "Extração Líquido-Líquido com funil de separação."
        ]
    },
    {
        "title": "4. Preparo e Padronização de Soluções",
        "subs": [
            "Cálculo de Reagentes (massa e volume necessários).",
            "Solução Padrão e Padrão Primário.",
            "Preparo de Soluções Por Diluição e Mistura.",
            "Técnicas de Homogeneização."
        ]
    },
    {
        "title": "5. Propriedades Químicas e Reatividade (Físico-Química Prática Básica)",
        "subs": [
            "Identificação de Funções Inorgânicas (ensaios de chama, solubilidade e formação de precipitados).",
            "Medição de pH: Uso de papéis indicadores e pHmetro digital.",
            "Análise Térmica Básica: Curvas de aquecimento/resfriamento e determinação de ponto de fusão/ebulição.",
            "Estudo Qualitativo de Reações de Oxirredução (Redox) e Combustão."
        ]
    },
    {
        "title": "6. Volumetria e Análise Quantitativa Básica",
        "subs": [
            "Montagem do Sistema de Titulação e uso correto da bureta.",
            "Titulação Ácido-Base (Volumetria de Neutralização): Uso de indicadores visuais (ex.: fenolftaleína).",
            "Curvas de Titulação e Determinação de Ponto de Equivalência.",
            "Titulação de Oxirredução (ex.: Permanganimetria) e Volumetria de Complexometria (ex.: determinação de dureza da água com EDTA)."
        ]
    },
    {
        "title": "7. Cinética e Equilíbrio Químico Experimantal",
        "subs": [
            "Fatores que Afetam a Velocidade das Reações: Temperatura, concentração, superfície de contato e catalisadores.",
            "Verificação Prática do Princípio de Le Chatelier (deslocamento de equilíbrio por variação de concentração e temperatura)."
        ]
    },
    {
        "title": "8. Síntese e Caracterização Química Introdutória",
        "subs": [
            "Síntese de um Composto Inorgânico ou Orgânico Simples (ex.: síntese da aspirina, obtenção do sabão por saponificação ou síntese de sais de coordenação).",
            "Rendimento Reacional e Grau de Pureza: Rendimento teórico, real e percentual."
        ]
    }
]

sidebar = """<aside class="sidebar">
                <h3>Tópicos de Laboratório</h3>
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

head = head.replace("Química Orgânica - Química Total", "Laboratório - Química Total")
head = head.replace("Tópicos de Química Orgânica", "Tópicos de Laboratório")

with open('/Users/rcorreas/Desktop/QT/laboratorio.html', 'w', encoding='utf-8') as f:
    f.write(head + sidebar + content + footer)

print("Generated laboratorio.html")
