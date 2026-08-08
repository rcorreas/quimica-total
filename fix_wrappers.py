import glob
import re

for filepath in glob.glob('src/app/materias/*/page.tsx'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace(
        '<div dangerouslySetInnerHTML={{ __html: `<main class="main-content layout-sidebar">',
        '<div className="flex-1 flex flex-col" dangerouslySetInnerHTML={{ __html: `<main class="main-content layout-sidebar">'
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Wrappers fixed in materias.")
