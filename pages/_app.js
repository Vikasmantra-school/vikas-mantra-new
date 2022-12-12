import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Nav from '../components/Header/Nav'
import { Footer } from '../components/Footer/Footer'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin'
import { Analytics } from '@vercel/analytics/react';


gsap.registerPlugin(CSSRulePlugin)
function MyApp({ Component, pageProps }) {

  function Anime() {

    const parentTrigger2 = document.querySelectorAll('.AnimeStarts')
    parentTrigger2.forEach(fadeInAfter)
    function fadeInAfter(elem) {

      const rule = CSSRulePlugin.getRule(".imgBgColor:after");
      gsap.fromTo(
        rule,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 8,
          delay: 0.8,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });

      const rule2 = CSSRulePlugin.getRule(".imgBgColor2:after");
      gsap.fromTo(
        rule2,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 4,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });

      const rule3 = CSSRulePlugin.getRule(".imgBgColorLeft:after");
      gsap.fromTo(
        rule3,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 4,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });

      const rule4 = CSSRulePlugin.getRule(".imgBgColorAdmission1:after");
      gsap.fromTo(
        rule4,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 4,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });

      const rule5 = CSSRulePlugin.getRule(".imgBgColorAdmission2:after");
      gsap.fromTo(
        rule5,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 4,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });

      const rule6 = CSSRulePlugin.getRule(".imgBgColorBlog1:after");
      gsap.fromTo(
        rule6,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 4,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });

      const rule7 = CSSRulePlugin.getRule(".imgBgColorBlog2:after");
      gsap.fromTo(
        rule7,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 4,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });
      const rule8 = CSSRulePlugin.getRule(".ContactImgBgColor:after");
      gsap.fromTo(
        rule8,
        {
          opacity: 0,
          y: 50,
        },
        {
          delay: 0.9,
          duration: 4,
          y: 0,
          cssRule: {
            opacity: "1",
          }
        });


    }

    const parentTrigger = document.querySelectorAll('.AnimeStarts')
    parentTrigger.forEach(fadeIn)
    function fadeIn(elem) {
      let text = elem.querySelectorAll('.AnimeElement')

      gsap.fromTo(
        text,
        {
          autoAlpha: 0,
          y: 50,
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
          },
        }
      )
    }

  }

  useEffect(() => {
    Anime()

    import('../node_modules/bootstrap/dist/js/bootstrap')
  }, [Anime])
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(CSSRulePlugin)

  return (
    <>
      {/* <Anime /> */}

      <Nav />

      <Component {...pageProps} />

      <Footer />

      <Analytics />
    </>
  )
}

export default MyApp
