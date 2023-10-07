// This code will make the navigation bar sticky
const navBar = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
});
