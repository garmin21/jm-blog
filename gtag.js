export default () => {
  console.log('=========> 埋点', window)
  if (typeof window !== 'undefined') {
    // <!-- Google tag (gtag.js) -->
    const script = document.createElement('script');
    const script1 = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LYDB5TTVMB';
    script1.textContent = `
      window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-LYDB5TTVMB');
    `;
    document.head.appendChild(script);
    document.head.appendChild(script1);
  }
};
