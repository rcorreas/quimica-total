import os
import re

files_to_convert = [
    'introducao-quimica',
    'quimica-inorganica',
    'quimica-organica',
    'fisico-quimica',
    'laboratorio'
]

def html_to_jsx(html):
    html = html.replace('class="', 'className="')
    # handle style attributes roughly
    def replace_style(match):
        style_str = match.group(1)
        # simplistic conversion for style="display: none" -> style={{display: 'none'}}
        rules = style_str.split(';')
        jsx_rules = []
        for r in rules:
            if ':' not in r: continue
            k, v = r.split(':', 1)
            k = k.strip()
            # camelCase the key
            parts = k.split('-')
            k = parts[0] + ''.join(p.capitalize() for p in parts[1:])
            v = v.strip().replace("'", '"')
            jsx_rules.append(f"{k}: '{v}'")
        return 'style={{' + ', '.join(jsx_rules) + '}}'
    
    html = re.sub(r'style="([^"]+)"', replace_style, html)
    # self closing tags
    html = re.sub(r'<img([^>]+)(?<!/)>', r'<img\1 />', html)
    html = re.sub(r'<input([^>]+)(?<!/)>', r'<input\1 />', html)
    html = re.sub(r'<br([^>]*)(?<!/)>', r'<br />', html)
    return html

for name in files_to_convert:
    html_path = f"legacy/{name}.html"
    if not os.path.exists(html_path):
        continue
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_main = content.find('<main class="main-content layout-sidebar">')
    end_main = content.find('</main>') + 7
    
    if start_main == -1:
        continue
        
    main_content = content[start_main:end_main]
    jsx_content = html_to_jsx(main_content)
    
    page_code = f"""'use client';
import React, { { useEffect, useState } } from 'react';
import Script from 'next/script';

export default function {name.replace('-', ' ').title().replace(' ', '')}() {{
  const [activeTopic, setActiveTopic] = useState('topic-1-1');
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['menu-1']);

  const toggleMenu = (menuId: string) => {{
    if (expandedMenus.includes(menuId)) {{
      setExpandedMenus(expandedMenus.filter(m => m !== menuId));
    }} else {{
      setExpandedMenus([...expandedMenus, menuId]);
    }}
  }};

  useEffect(() => {{
    if (window.MathJax) {{
      window.MathJax.typesetPromise();
    }}
  }}, [activeTopic]);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="lazyOnload" />
      <div dangerouslySetInnerHTML={{{{ __html: `{jsx_content.replace('`', '\\`').replace('$', '\\$').replace('{', '&#123;').replace('}', '&#125;')}` }}}} />
    </>
  );
}}
"""
    
    os.makedirs(f"src/app/materias/{name}", exist_ok=True)
    with open(f"src/app/materias/{name}/page.tsx", 'w', encoding='utf-8') as f:
        f.write(page_code)

print("Pages converted successfully!")
