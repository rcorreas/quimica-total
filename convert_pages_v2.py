import os

files_to_convert = [
    'introducao-quimica',
    'quimica-inorganica',
    'quimica-organica',
    'fisico-quimica',
    'laboratorio'
]

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
    
    # We will just inject this as raw HTML using dangerouslySetInnerHTML, 
    # but we need to escape backticks and $
    escaped_html = main_content.replace('`', '\\`').replace('$', '\\$')
    
    component_name = name.replace('-', ' ').title().replace(' ', '')
    
    page_code = f"""'use client';

import React, {{ useEffect }} from 'react';
import Script from 'next/script';

export default function {component_name}() {{
  useEffect(() => {{
    // Bind legacy accordion logic
    const menuTitles = document.querySelectorAll('.menu-title');
    menuTitles.forEach(title => {{
      const handler = () => {{
        const parentLi = title.parentElement;
        if (!parentLi) return;
        const submenu = parentLi.querySelector('.submenu') as HTMLElement;
        if (parentLi.classList.contains('expanded')) {{
          parentLi.classList.remove('expanded');
          if (submenu) submenu.style.display = 'none';
        }} else {{
          parentLi.classList.add('expanded');
          if (submenu) submenu.style.display = 'block';
        }}
      }};
      title.addEventListener('click', handler);
      // Clean up isn't strictly necessary for this one-off mount but good practice
    }});

    const subItems = document.querySelectorAll('.submenu li');
    const contents = document.querySelectorAll('.topic-content');

    subItems.forEach(item => {{
      const handler = () => {{
        subItems.forEach(li => li.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        item.classList.add('active');
        const targetId = item.getAttribute('data-target');
        if (targetId) {{
          const targetEl = document.getElementById(targetId);
          if (targetEl) targetEl.classList.add('active');
        }}

        if ((window as any).MathJax) {{
          (window as any).MathJax.typesetPromise();
        }}
      }};
      item.addEventListener('click', handler);
    }});
  }}, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="lazyOnload" />
      <div dangerouslySetInnerHTML={{{{ __html: `{escaped_html}` }}}} />
    </>
  );
}}
"""
    
    os.makedirs(f"src/app/materias/{name}", exist_ok=True)
    with open(f"src/app/materias/{name}/page.tsx", 'w', encoding='utf-8') as f:
        f.write(page_code)

print("Pages converted successfully!")
