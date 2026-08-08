import re

with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove references brackets like [60], [1, 60], etc.
# Pattern: optional whitespace, left bracket, digits, (optional comma, optional space, digits) repeated, right bracket
html = re.sub(r'\s*\[\d+(?:,\s*\d+)*\]', '', html)

# 2. Remove "Desafio Prático" and "Referências" blocks
section_to_remove = """                    <h3>🧠 Desafio Prático (Evocação Ativa)</h3>
                    <p><em>Responda rápido para fixar na memória:</em></p>
                    <ol>
                        <li>Qual alcano ferve em temperatura mais alta: o octano ou o hexano? Por quê?</li>
                        <li>Por que a conformação <em>gauche</em> do butano é menos estável que a conformação <em>anti</em>?</li>
                        <li>Durante a oscilação do anel do ciclo-hexano, o que acontece com um grupo metila que estava em posição axial?</li>
                    </ol>
                    
                    <p><strong>Referências de Estudo Genuínas baseadas nas fontes:</strong></p>
                    <ul>
                        <li><em>Solomons, T. W. G., Química Orgânica Vol 1</em>.</li>
                        <li><em>Clayden, J., Organic Chemistry</em>.</li>
                        <li><em>Russel, J. B., Química Geral Vol 1 & 2</em>.</li>
                    </ul>"""

# Wait, the references had periods after the brackets in some cases?
# Let's check original text: 
# <li><em>Solomons, T. W. G., Química Orgânica Vol 1</em> [10, 22].</li>
# So after removal, it will be: <li><em>Solomons, T. W. G., Química Orgânica Vol 1</em>.</li>

if section_to_remove in html:
    html = html.replace(section_to_remove, "")
else:
    print("Could not find exact block to remove. Trying regex for removal.")
    # Fallback if there's any mismatch (e.g. whitespace)
    match = re.search(r'                    <h3>🧠 Desafio Prático.*?</ul>', html, flags=re.DOTALL)
    if match:
        html = html.replace(match.group(0), "")
        print("Removed using regex fallback.")
    else:
        print("Still couldn't find the block.")

# Write back
with open('/Users/rcorreas/Desktop/QT/quimica-organica.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Fix applied successfully")
