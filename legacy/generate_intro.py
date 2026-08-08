import re

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'r', encoding='utf-8') as f:
    org_html = f.read()

# Extract header and footer
head = org_html[:org_html.find('<aside class="sidebar">')]
footer = org_html[org_html.find('</main>'):]

menu_items = [
    {
        "title": "1. Introdução à Ciência Química e Matéria",
        "subs": [
            "O Método Científico e Segurança em Laboratório.",
            "Definição de Matéria e Energia.",
            "Estados Físicos da Matéria: Sólido, líquido e gasoso; mudanças de estado físico.",
            "Classificação da Matéria: Substâncias puras (simples e compostas) e misturas (homogêneas e heterogêneas).",
            "Propriedades da Matéria: Físicas, químicas, extensivas e intensivas.",
            "Métodos de Separação de Misturas: Filtração, destilação, decantação, centrifugação, entre outros."
        ]
    },
    {
        "title": "2. Medidas, Unidades e Tratamento de Dados",
        "subs": [
            "Sistema Internacional de Unidades (SI): Massa, volume, temperatura e densidade.",
            "Algarismos Significativos e Notação Científica.",
            "Análise Dimensional e Conversão de Unidades."
        ]
    },
    {
        "title": "3. Estrutura Atômica Fundamental",
        "subs": [
            "Evolução dos Modelos Atômicos: Dalton, Thomson, Rutherford e Bohr.",
            "Partículas Subatômicas: Prótons, nêutrons e elétrons.",
            "Número Atômico (Z) e Número de Massa (A).",
            "Isótopos, Isóbaros e Isótonos.",
            "Íons: Cátions e ânions."
        ]
    },
    {
        "title": "4. Tabela Periódica e Periodicidade",
        "subs": [
            "Organização da Tabela Periódica: Períodos, grupos/famílias e blocos (s, p, d, f).",
            "Classificação dos Elementos: Metais, não-metais e semimetais.",
            "Propriedades Periódicas: Raio atômico, energia de ionização, afinidade eletrônica e eletronegatividade."
        ]
    },
    {
        "title": "5. Ligação Química e Geometria Básica",
        "subs": [
            "Regra do Octeto e Estrutura de Lewis.",
            "Ligação Iônica: Formação de íons, forças eletrostáticas e propriedades dos compostos iónicos.",
            "Ligação Covalente: Compartilhamento de elétrons, polaridade das ligações.",
            "Ligação Metálica: Modelo do \\\"mar de elétrons\\\".",
            "Introdução à Geometria Molecular e Polaridade das Moléculas.",
            "Forças Intermoleculares: Ligações de hidrogênio, dipolo-dipolo e forças de dispersão de London."
        ]
    },
    {
        "title": "6. Funções Inorgânicas (Química Descritiva Básica)",
        "subs": [
            "Ácidos: Definição de Arrhenius, classificação e nomenclatura.",
            "Bases: Propriedades, classificação e nomenclatura.",
            "Sais: Reações de neutralização e nomenclatura.",
            "Óxidos: Óxidos ácidos, básicos, anfóteros e neutros."
        ]
    },
    {
        "title": "7. Relações Quantitativas e Estequiometria",
        "subs": [
            "Massa Atômica, Massa Molecular e Unidade de Massa Atômica (u).",
            "O Conceito de Mol e a Constante de Avogadro.",
            "Massa Molar (g/mol) e Volume Molar dos Gases.",
            "Fórmula Mínima, Centesimal e Molecular.",
            "Balanceamento de Equações Químicas.",
            "Cálculo Estequiométrico: Relações de massa, mol e volume.",
            "Reagente Limitante, Reagente em Excesso e Rendimento de Reação."
        ]
    },
    {
        "title": "8. Soluções e Unidades de Concentração",
        "subs": [
            "Conceito de Soluto, Solvente e Solubilidade.",
            "Classificação quanto à Solubilidade: Soluções insaturadas, saturadas e supersaturadas.",
            "Unidades de Concentração: Concentração comum (g/L), molaridade (mol/L), título/porcentagem e ppm.",
            "Diluição e Mistura de Soluções."
        ]
    },
    {
        "title": "9. Introdução à Termoquímica e Reatividade",
        "subs": [
            "Reações Exotérmicas e Endotérmicas.",
            "Variação de Entalpia (ΔH).",
            "Introdução à Cinética Química: Velocidade das reações e fatores que a afetam (temperatura, concentração, superfície de contato, catalisadores).",
            "Introdução ao Equilíbrio Químico e Escala de pH / pOH."
        ]
    }
]

sidebar = """<aside class="sidebar">
                <h3>Tópicos de Introdução à Química</h3>
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

head = head.replace("Química Orgânica - Química Total", "Introdução à Química - Química Total")
head = head.replace("Tópicos de Química Orgânica", "Tópicos de Introdução à Química")

with open('/Users/rcorreas/Desktop/QT/introducao-quimica.html', 'w', encoding='utf-8') as f:
    f.write(head + sidebar + content + footer)

print("Generated introducao-quimica.html")
