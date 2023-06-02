import { hero_header } from './styles'
import { text } from './styles'

const NICHES = [
  {
    text: "retail",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "mobility",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "industrial",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "manufacturing",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "fleet management",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "Logistics",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "Smart agriculture",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "Autonomous/Robotics",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
    text: "Point of Sale",
    imageUrl: "https://images.unsplash.com/photo-1577807486021-ef50073416cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  
]
export default function Niche() {
  return (
    <div className='bg-white p-20 grid gap-4 grid-cols-4 grid-rows-3'>
      <div className="col-span-2">
      <MainCard/>
      </div>
      {
        NICHES.map((niche,i) => <NicheCard key={i} {...niche}/>)
      }
    </div>
  )
}

const MainCard = () => {
  return (
    <div className="bg-black text-white p-6 flex flex-col  gap-4 h-full place-content-end">
      <h1 className={`place-self-end ${hero_header}`}>
      Let’s build the future, together 
      </h1>
      <p className={text}>
      From patient monitoring to asset tracking, Hologram connects IoT fleets of every kind and size.
      </p>
    </div>
  )
}
interface NicheProps {
  text: string
  imageUrl : string
}

const NicheCard = (prop: NicheProps) => {
  const {text, imageUrl} = prop
  return (
    <div className="relative text-center">
        <img className='-z-1' src={imageUrl} alt="" />
      
      <p className='absolute bottom-4 rounded z-1 flex text-primary  text-center w-full mx-auto justify-center  whitespace-nowrap bg-white px-4 py-2 capitalize'>{text}</p>
    </div> 
  )
}