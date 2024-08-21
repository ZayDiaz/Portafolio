// const btnOpen = document.querySelector('.btn--open')
// const btnClose = document.querySelector('.btn--close')
const menu = document.querySelector('.header__menu')

// btnOpen.addEventListener('click', function () {
//   menu.classList.toggle('show--menu')
// })

// btnClose.addEventListener('click', function () {
//   menu.classList.remove('show--menu')
// })

const headerNav = document.querySelector('.header__nav')

// Delegación de eventos
headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn--open')) {
    menu.classList.toggle('show--menu')
  }

  if (e.target.closest('.btn--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.closest('.list__link')) {
    menu.classList.remove('show--menu')

    const links = document.querySelectorAll('.list__link')

    for (const link of links) {
      link.classList.remove('active')
    }

    e.target.classList.add('active')
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    menu.classList.remove('show--menu')
  }
})

// BOM
const html = document.documentElement

// console.log(html.scrollHeight) // Altura de la página
// console.log(html.clientHeight) // Altura de la ventana
// console.log(html.scrollTop) // Altura que se ha desplazado el scroll

const progress = document.querySelector('.progress')

window.addEventListener('scroll', function (e) {
  const alturaPagina = html.scrollHeight - html.clientHeight

  const scrollActual = html.scrollTop

  const progreso = scrollActual / alturaPagina

  progress.style.width = Math.round(progreso * 100) + '%'

})

const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const input = this.elements

  const dataForm = {
    nombre: input.name.value,
    correo: input.email.value,
    mensaje: input.message.value
  }

  const URL = 'https:formsubmit.co/el/kivinu'
  const email = 'jaimediazzz2000@gmail.com'

  // CRUD -> Create, Read, Update, Delete
  // verbos:  POST,   GET,  PUT,    DELETE

  fetch(URL + email, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(dataForm)
  })
    .then(response => response.json())
    .then(data => {
      document.querySelector('.message--success').classList.remove('hidden')
      form.reset()

      setTimeout(() => {
        document.querySelector('.message--success').classList.add('hidden')
      }, 3000)
    })
    .catch(error => {
      document.querySelector('.message--error').classList.remove('hidden')

      setTimeout(() => {
        document.querySelector('.message--error').classList.add('hidden')
      }, 3000)
    })
})

const swiper = new Swiper('.reviews .swiper', {
  // Optional parameters
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button--next',
    prevEl: '.button--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
})

const SR = ScrollReveal()

SR.reveal('.hero__img', {
  duration: 1000,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.hero__content', {
  duration: 1000,
  origin: 'right',
  distance: '300px',
  // reset: true,
})

SR.reveal('.section__title', {
  duration: 1200,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.about__text', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',
  // reset: true,
})

SR.reveal('.portfolio__item:nth-child(even)', {
  duration: 1200,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.portfolio__item:nth-child(odd)', {
  duration: 1200,
  origin: 'right',
  distance: '300px',
  // reset: true,
})

SR.reveal('.swiper', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',
  // reset: true,
})

SR.reveal('.contact .container', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',
  // reset: true,
})

const loader = document.getElementById('loader')

window.addEventListener('load', function () {
  loader.classList.add('hidden')
})

// document.addEventListener('DOMContentLoaded', function () {
//   console.log(document.readyState)
// })

// console.log(document.readyState)