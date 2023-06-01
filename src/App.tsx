import About from './components/About'
import Connect from './components/Connect'
import Hero from './components/Hero'
import Niche from './components/Niche'
import Partners from './components/Partners'
import Reviews from './components/Reviews'
import Stories from './components/Stories'

export default function App() {
  return (
    <div className='font-poppins'>
      <Hero />
      <About />
      <Partners />
      <Niche />
      <Stories />
      <Reviews />
      <Connect />
    </div>
  )
}
