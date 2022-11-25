export const timeline = () => {
  console.log('hi')
  let learningDivs = document.querySelectorAll('.learningDivs')
  window.addEventListener('scroll', Scroll, false)

  function Scroll() {
    learningDivs.forEach((lds) => {
      let sectionTop = lds.getBoundingClientRect().top
      var ids = lds.getAttribute('id')
      var id = document.getElementById(ids + '-li')

      if (id.previousElementSibling !== null && sectionTop < 60) {
        id.previousElementSibling.children[0].classList.add('green')
        id.previousElementSibling.children[0].classList.remove('grey')
        id.classList.add('green')
        id.classList.remove('grey')
      } else if (id.previousElementSibling !== null && sectionTop > 30) {
        id.previousElementSibling.children[0].classList.remove('green')
        id.previousElementSibling.children[0].classList.add('grey')
        id.classList.remove('green')
        id.classList.add('grey')
      } else {
      }
    })
  }
}
