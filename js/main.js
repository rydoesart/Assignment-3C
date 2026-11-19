const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    showMenu = false;
  }

  menuBtn.setAttribute('aria-expanded', showMenu);
  menuBtn.setAttribute('aria-label', showMenu ? 'Close navigation' : 'Open navigation');
}
