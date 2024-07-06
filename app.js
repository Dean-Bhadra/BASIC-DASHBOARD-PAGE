document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('main section');
  
    function navigateTo(target) {
      navLinks.forEach(link => link.removeAttribute('aria-current'));
      contentSections.forEach(section => section.hidden = true);
  
      const targetSection = document.getElementById(target);
      const targetLink = document.querySelector(`nav a[href="#${target}"]`);
  
      if (targetSection && targetLink) {
        targetSection.hidden = false;
        targetLink.setAttribute('aria-current', 'page');
        history.pushState(null, '', `#${target}`);
      }
    }
  
    function handleNavClick(event) {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('href').substring(1);
      navigateTo(target);
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
  
    function handleInitialLoad() {
      const hash = window.location.hash.substring(1);
      navigateTo(hash || 'about');
    }
  
    handleInitialLoad();
    window.addEventListener('popstate', handleInitialLoad);
  });