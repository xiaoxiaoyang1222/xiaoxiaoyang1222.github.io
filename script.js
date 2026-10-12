(() => {
  const button = document.getElementById('language');
  let language = 'zh';
  try { language = localStorage.getItem('zl-language') === 'en' ? 'en' : 'zh'; } catch {}
  function applyLanguage() {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
      const value = element.dataset[language];
      if (element.hasAttribute('data-html')) element.innerHTML = value;
      else element.textContent = value;
    });
    button.innerHTML = language === 'zh' ? 'EN <span>↗</span>' : '中文 <span>↗</span>';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  }
  button.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('zl-language', language); } catch {}
    applyLanguage();
  });
  applyLanguage();
  document.getElementById('year').textContent = new Date().getFullYear();
})();
