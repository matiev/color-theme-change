/* light/dark theme, checkbox input
------------------------------------------ */
let input = document.querySelector('input');

let light = () => {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('data-theme', document.documentElement.getAttribute('data-theme'))
}
let dark = () => {
  document.documentElement.setAttribute('data-theme', 'dark'); 
  localStorage.setItem('data-theme', document.documentElement.getAttribute('data-theme'))
}

window.addEventListener('change', () => {
  if (!input.checked) {
    light();
  }
  else {
    dark();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('data-theme') || localStorage.getItem('data-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'));
    input.checked = false;
  }
  else {    
    document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'));
    input.checked = true;
  }
});

/* transition disabled first onload
------------------------------------------ */
(function() {
  document.body.classList.remove('no-transition');
})();