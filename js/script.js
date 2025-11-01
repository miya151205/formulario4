    const routes = {
      '#home': '<h1>Bienvenido a mi SPA</h1>',
      '#about': '<h1>Sobre mí</h1><p>Esta es la sección de información.</p>'
    };

    function router() {
      const hash = window.location.hash || '#home';
      document.getElementById('content').innerHTML = routes[hash];
    }

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
console.log("Router initialized");