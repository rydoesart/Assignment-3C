const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const navLinks = document.querySelectorAll('.menu-nav__link');
const main = document.querySelector('main');
const desktop = window.matchMedia('(min-width: 768px)');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }

  menuBtn.setAttribute('aria-expanded', showMenu);
  menuBtn.setAttribute('aria-label', showMenu ? 'Close navigation' : 'Open navigation');
  main.inert = showMenu;

  if (showMenu) {
    requestAnimationFrame(() => {
      if (showMenu) navLinks[0].focus();
    });
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (showMenu) toggleMenu();
  });
});

document.addEventListener('keydown', event => {
  if (!showMenu) return;

  if (event.key === 'Escape') {
    toggleMenu();
    menuBtn.focus();
  }

  if (event.key === 'Tab') {
    const lastLink = navLinks[navLinks.length - 1];

    if (event.shiftKey && document.activeElement === menuBtn) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      menuBtn.focus();
    }
  }
});

desktop.addEventListener('change', event => {
  if (showMenu) toggleMenu();
  if (!event.matches && nav.contains(document.activeElement)) menuBtn.focus();
});
