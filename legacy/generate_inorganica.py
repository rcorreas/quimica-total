import re
import os

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'r', encoding='utf-8') as f:
    org_html = f.read()

# Extract header and footer
head = org_html[:org_html.find('<aside class="sidebar">')]
footer = org_html[org_html.find('</main>'):]

menu_items = [
    {
        "title": "1. Estrutura Atômica e Tabela Periódica",
        "subs": [
            "Modelos Atômicos e Mecânica Quântica: Orbitais atômicos, números quânticos e funções de onda.",
            "Configuração Eletrônica: Princípio de Aufbau, Regra de Hund e Princípio de Exclusão de Pauli.",
            "Periodicidade Química: Raio atômico/iônico, energia de ionização, afinidade eletrônica e eletronegatividade."
        ]
    },
    {
        "title": "2. Ligações Químicas e Geometria Molecular",
        "subs": [
            "Estruturas de Lewis e Cargas Formais.",
            "Teoria da Repulsão dos Pares de Eletrões da Camada de Valência (VSEPR): Previsão da geometria molecular.",
            "Teoria da Ligação de Valência (TLV) e Hibridização.",
            "Teoria dos Orbitais Moleculares (TOM): Moléculas diatômicas homonucleares e heteronucleares, ordem de ligação e diagramas de energia."
        ]
    },
    {
        "title": "3. Ácidos e Bases em Química Inorgânica",
        "subs": [
            "Conceitos Fundamentais: Brønsted-Lowry, Lewis e Usanovich.",
            "Tendências Periódicas de Acidez e Basicidade: Óxidos e hidróxidos metálicos e não-metálicos.",
            "Conceito de Ácidos e Bases Duros e Macios (HSAB / Pearson): Aplicações em estabilidade e reatividade de compostos."
        ]
    },
    {
        "title": "4. Química do Estado Sólido e Ligação Iônica",
        "subs": [
            "Estruturas Cristalinas: Células unitárias, empacotamento compacto e redes de Bravais.",
            "Energia de Rede Cristalina: Ciclo de Born-Haber e equação de Kapustinskii.",
            "Defeitos em Sólidos e Semicondutores: Defeitos pontuais (Schottky, Frenkel) e Teoria de Bandas em metais e isolantes."
        ]
    },
    {
        "title": "5. Reações de Oxirredução (Redox)",
        "subs": [
            "Estados de Oxidação e Balanceamento.",
            "Potenciais Padrão de Redução e Espontaneidade.",
            "Diagramas de Estabilidade: Diagramas de Latimer, Frost e Pourbaix."
        ]
    },
    {
        "title": "6. Química dos Elementos dos Grupos Principais (Blocos s e p)",
        "subs": [
            "Bloco s (Grupos 1 e 2): Propriedades, reagentes organometálicos simples (ex.: alquillítio) e aplicações.",
            "Bloco p (Grupos 13 a 18):",
            "Grupo 13 (Boro, Alumínio): Química de hidretos de boro (boranos) e ligação deficiente em elétrons.",
            "Grupo 14 (Carbono, Silício): Alótropos do carbono, silicatos e silicones.",
            "Grupo 15 (Nitrogênio, Fósforo): Oxoácidos, fosfatos e haletos.",
            "Grupo 16, 17 e 18: Química do enxofre, halogênios, interhalogênios e compostos de gases nobres."
        ]
    },
    {
        "title": "7. Introdução aos Compostos de Coordenação (Bloco d)",
        "subs": [
            "Estrutura e Nomenclatura: Ligantes (monodentados, polidentados/quelantes) e número de coordenação.",
            "Isomeria em Compostos de Coordenação: Isomeria estrutural e estereoisomeria (geométrica e óptica)."
        ]
    },
    {
        "title": "8. Teorias de Ligação em Compostos de Transição",
        "subs": [
            "Teoria do Campo Cristalino (TCC): Desdobramento dos orbitais d em geometrias octaédrica, tetraédrica e quadrática plana; energia de estabilização do campo cristalino (EECC); complexos de spin alto e spin baixo.",
            "Teoria do Campo Ligante (TCL): Aplicação dos orbitais moleculares aos complexos de coordenação e efeito da doação σ e receptividade π."
        ]
    },
    {
        "title": "9. Propriedades Magnéticas e Espectro Eletrônico",
        "subs": [
            "Magnetismo: Paramagnetismo, diamagnetismo e momento magnético efetivo.",
            "Espectroscopia UV-Visível em Complexos: Transições d-d, estados de termo espectroscópico, Diagramas de Tanabe-Sugano e regras de seleção (Laporte e spin).",
            "Transferência de Carga: Transições de transferência de carga ligante-metal (TCLM) e metal-ligante (TCML)."
        ]
    },
    {
        "title": "10. Cinética e Mecanismos de Reação de Coordenação",
        "subs": [
            "Labilidade e Inércia Termodinâmica vs. Cinética.",
            "Mecanismos de Substituição de Ligantes: Substituição em complexos octaédricos e quadráticos planos (Efeito Trans).",
            "Mecanismos de Transferência de Elétrons: Esfera interna e esfera externa."
        ]
    },
    {
        "title": "11. Química Organometálica",
        "subs": [
            "Regra dos 18 Elétrons e contagem formal de elétrons.",
            "Ligantes Característicos: Carbonilas (CO), olefinas, ciclopentadienil (Cp) e fosfinas.",
            "Reações Fundamentais: Adição oxidativa, eliminação redutiva, inserção migratória e ataque nucleofílico.",
            "Catálise Homogênea: Ciclos catalíticos (ex.: processo Monsanto, hidrogenação de Wilkinson)."
        ]
    },
    {
        "title": "12. Química Bioinorgânica (Tópico Avançado/Final)",
        "subs": [
            "Metais em Sistemas Biológicos: Papel do ferro, cobre, zinco e magnésio.",
            "Proteínas de Transporte e Armazenamento de Oxigênio: Hemoglobina e mioglobina.",
            "Metaloproteínas e Metaloenzimas: Citocromos, fotossíntese (clorofila) e fixação de nitrogênio."
        ]
    }
]

sidebar = """<aside class="sidebar">
                <h3>Tópicos de Química Inorgânica</h3>
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

head = head.replace("Química Orgânica", "Química Inorgânica")

with open('/Users/rcorreas/Desktop/QT/quimica-inorganica.html', 'w', encoding='utf-8') as f:
    f.write(head + sidebar + content + footer)

print("Generated quimica-inorganica.html")
