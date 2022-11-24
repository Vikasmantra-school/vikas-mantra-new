import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import '../styles/globals.css'
import Nav from '../components/Header/Nav'
import Footer from '../components/Footer/Footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


function MyApp({ Component, pageProps }) {

  function Anime() {

    // const text = new SplitType('.AnimeStarts', { types: 'lines' })

    // //store splitted lines in const line
    // const line = text.lines

    // line.forEach(eachDiv)

    // //create a func that add a class to every splitted div
    // function eachDiv(elem) {
    //   elem.classList.add('AnimeElement')
    // }

    const parentTrigger = document.querySelectorAll('.AnimeStarts')
    parentTrigger.forEach(fadeIn)
    function fadeIn(elem) {
      let text = elem.querySelectorAll('.AnimeElement')

      gsap.fromTo(
        text,
        {
          autoAlpha: 0,
          y: 50
        },
        {
          delay: 0.5,
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: elem,
            animation: text,
            toggleActions: 'play none none none',
            once: true,
          }
        }
      )
    }

    //image-animation

    // const parentTrigger2 = document.querySelectorAll('.AnimeStarts2')
    // parentTrigger2.forEach(fadeIn2)

    // function fadeIn2(elem) {
    //   let image = elem.querySelectorAll('.AnimeImage')

    //   gsap.fromTo(
    //     image,
    //     {
    //       autoAlpha: 0,
    //       y: 50
    //     },
    //     {
    //       delay: 0.5,
    //       duration: 1,
    //       autoAlpha: 1,
    //       y: 0,
    //       scrollTrigger: {
    //         trigger: elem,
    //         animation: text,
    //         toggleActions: 'play none none none',
    //         once: true,
    //       }
    //     }
    //   )
    // }
  }

  useEffect(() => {
    Anime()

    import('../node_modules/bootstrap/dist/js/bootstrap')
  }, [Anime])
  gsap.registerPlugin(ScrollTrigger)



  return (
    <>
      {/* <Anime /> */}

      <Nav />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default MyApp
