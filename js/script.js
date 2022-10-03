/* eslint-disable no-confusing-arrow */
// ============================== DARK THEME ==============================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
// uil uil-sun for the sun icon
const iconTheme = 'uil-sun';

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user has previously chosen a theme/icon
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate or deactivate the theme manually
themeButton.addEventListener('click', () => {
  // add or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // save the theme and current icon that the user has chosen in local storage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// ============================== MENU SHOW Y HIDDEN ==============================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// ======================== MENU SHOW ========================
// Opens navigation menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// ======================== MENU HIDE ========================
// Closes navigation menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// ======================== REMOVE MENU PROFILE ========================
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  // when a user clicks on nav__link, we remove the show-menu class
  // to remove the styling associated with that class
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

console.log('remove menu profile is working');
