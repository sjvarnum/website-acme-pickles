const btn = document.getElementById('btn-menu')
const nav = document.getElementById('menu')

function toggleMenu() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', toggleMenu)