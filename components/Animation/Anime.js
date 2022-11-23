import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Anime = () => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

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
                trigger: text,
                animation: text,
                toggleActions: 'play none none none',
                once: true,
              }
            }
          )
        }
      }, [])

    return (
        <>
        
        </>
    )
}

export default Anime;