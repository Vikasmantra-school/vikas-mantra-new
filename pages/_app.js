import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import '../styles/globals.css'
import Nav from '../components/Header/Nav'
import Footer from '../components/Footer/Footer'
// import {Anime} from '../components/Animation/Anime';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



function MyApp({ Component, pageProps }) {

  function Anime(){
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
