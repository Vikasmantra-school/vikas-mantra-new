export const timeline = () => {
  window.addEventListener('scroll', function () {
    let learningDivs = document.querySelectorAll('.learningDivs')

    learningDivs.forEach(function (elem) {
      let sectionTop = elem.getBoundingClientRect().top
      let timelineContent = elem.getAttribute('id')
      let timelineId = document.getElementById(timelineContent + '-li')

      if (timelineId.previousElementSibling != null && sectionTop < 60) {
        timelineId.previousElementSibling.children[0].classList.add('green')
        timelineId.previousElementSibling.children[0].classList.remove('grey')
        timelineId.classList.add('green')
        timelineId.classList.remove('grey')
      } else if (timelineId.previousElementSibling != null && sectionTop > 30) {
        timelineId.previousElementSibling.children[0].classList.remove('green')
        timelineId.previousElementSibling.children[0].classList.add('grey')
        timelineId.classList.remove('green')
        timelineId.classList.add('grey')
      }
    })
  })
}
