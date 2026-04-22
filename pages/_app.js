"use client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Nav from "../components/Header/Nav";
import { Footer } from "../components/Footer/Footer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
// import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";
import PopupModal from "../components/Popup/PopupModal";
import { Router } from "react-router-dom";
import ChengalpattuNav from "../components/Header/ChengalpattuNav";

// import { GoogleTagManager } from "@next/third-parties/google";

import Script from "next/script";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import PopupSingleModal from "../components/Popup/PopupSingleModal";

gsap.registerPlugin(CSSRulePlugin);
function MyApp({ Component, pageProps }) {
  function Anime() {
    const parentTrigger2 = document.querySelectorAll(".AnimeStarts");
    parentTrigger2.forEach(fadeInAfter);
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
          },
        }
      );

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
          },
        }
      );

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
          },
        }
      );

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
          },
        }
      );

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
          },
        }
      );

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
          },
        }
      );

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
          },
        }
      );
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
          },
        }
      );
    }

    const parentTrigger = document.querySelectorAll(".AnimeStarts");
    parentTrigger.forEach(fadeIn);
    function fadeIn(elem) {
      let text = elem.querySelectorAll(".AnimeElement");

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
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }

  useEffect(() => {
    Anime();

    // ✅ only import Bootstrap on client side
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js")
        .then(() => console.log("✅ Bootstrap loaded safely"))
        .catch((err) => console.error("❌ Bootstrap load failed", err));
    }
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSRulePlugin);

  const router = useRouter();

  const isMambakkamPage = router.asPath.startsWith("/mambakkam-site");
  const isRouterReady = router.isReady;
  const showHeader =
    router.pathname === "/campaign" || router.pathname === "/thankyou"
      ? false
      : true;

  let NavComponent = Nav;
  // if(router.pathname.startsWith("/chengalpattu-site")){
  //   NavComponent = ChengalpattuNav;
  // }

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.style.overflow = "";
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* <PopupModal /> */}
      {/* <PopupSingleModal /> */}
      {/* {isMambakkamPage && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-9K3MZFRQVM');
        `,
            }}
          />
        </>
      )} */}

      {showHeader && <NavComponent />}

      <Component {...pageProps} />

      {showHeader && <Footer />}
      <ScrollToTop />

      {/* <Analytics /> */}
    </>
  );
}

export default MyApp;
