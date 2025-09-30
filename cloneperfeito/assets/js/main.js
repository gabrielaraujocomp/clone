// Static mode: remove marcações de hidratação/ocultamento do Framer
document.addEventListener('DOMContentLoaded', () => {
  // remove atributos de hidratação
  document.querySelectorAll('[data-framer-hydrate],[data-framer-hydrate-v2],[data-framer-ssr]').forEach(el => {
    el.removeAttribute('data-framer-hydrate');
    el.removeAttribute('data-framer-hydrate-v2');
    el.removeAttribute('data-framer-ssr');
  });

  // remove classes hidden-* e garante visibilidade
  document.querySelectorAll('[class*="hidden-"], .ssr-variant').forEach(el => {
    el.className = el.className.replace(/hidden-[^\s"]+/g, '').replace(/\bssr-variant\b/g, '').trim();
    el.style.opacity = '1';
    el.style.visibility = 'visible';
    el.style.filter = 'none';
    if (getComputedStyle(el).display === 'none') el.style.display = 'block';
  });
});
