import os

html_path = f"legacy/calculadoras.html"
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

start_main = content.find('<main class="main-content layout-sidebar">')
end_main = content.find('</main>') + 7
main_content = content[start_main:end_main]

escaped_html = main_content.replace('`', '\\`').replace('$', '\\$')

# Read calculadoras.js to inject inside useEffect
with open('legacy/calculadoras.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Remove DOMContentLoaded wrap
js_content = js_content.replace("document.addEventListener('DOMContentLoaded', () => {", "")
js_content = js_content[:js_content.rfind('});')]

page_code = f"""'use client';

import React, {{ useEffect }} from 'react';
import Script from 'next/script';

export default function Calculadoras() {{
  useEffect(() => {{
    {js_content}
  }}, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="lazyOnload" />
      <div dangerouslySetInnerHTML={{{{ __html: `{escaped_html}` }}}} />
    </>
  );
}}
"""

os.makedirs(f"src/app/calculadoras", exist_ok=True)
with open(f"src/app/calculadoras/page.tsx", 'w', encoding='utf-8') as f:
    f.write(page_code)
