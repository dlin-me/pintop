const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

document.documentElement.classList.add('js');
menuToggle.hidden = false;

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});

window.matchMedia('(max-width: 800px)').addEventListener('change', closeMenu);
