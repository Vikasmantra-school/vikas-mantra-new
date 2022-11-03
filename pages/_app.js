import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import '../styles/globals.css'
import Nav from '../components/Header/Nav'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../node_modules/bootstrap/dist/js/bootstrap')
  }, [])
  

  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />

      <Footer></Footer>
    </>
  )
}

export default MyApp
