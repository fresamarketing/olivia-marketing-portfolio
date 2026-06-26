const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const links = [...document.querySelectorAll('.nav-links a')];
const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

document.querySelector('#year').textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

links.forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const updateNavigation = () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
  const position = window.scrollY + 130;
  let current = sections[0].id;
  sections.forEach((section) => {
    if (position >= section.offsetTop) current = section.id;
  });
  links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};

window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();
