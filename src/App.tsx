import About from './components/About'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Niche from './components/Niche'
import Partners from './components/Partners'
import Reviews from './components/Reviews'
import Stories from './components/Stories'

export default function App() {
  return (
    <div className='font-poppins'>
      <Navbar/>
      <Hero />
      <About />
      <Partners />
      <Niche />
      <Stories />
      <Reviews />
      <Connect />
      <Footer/>
    </div>
  )
}
