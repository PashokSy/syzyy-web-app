const toggleBtn = document.getElementById('header-toggle');
const navBar = document.getElementById('navbar');

const links = document.querySelectorAll('.nav__link');

const toggleMenu = () => {
  navBar.classList.toggle('show-menu');
  toggleBtn.classList.toggle('bx-x');
};

const activateLink = function () {
  links.forEach((l) => l.classList.remove('active'));

  this.classList.add('active');
};

toggleBtn.addEventListener('click', toggleMenu);
links.forEach((l) => l.addEventListener('click', activateLink));
