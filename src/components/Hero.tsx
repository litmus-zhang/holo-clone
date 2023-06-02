import Button from './Button'
import {  hero_header, text } from "./styles"

export default function Hero() {
  return (
    <div className="flex justify-between items-center gap-6 p-10">

    <div className='flex flex-col gap-4 p-4'>
        <h1 className={hero_header}>
        Cellular IoT connectivity that powers innovation
        </h1>
        <p className={text}>Hologram is your trusted partner for connecting and monitoring IoT devices, anywhere in the world. </p>
        <div className='flex gap-2 mt-4'>
        <Button type='button' text="Try Hologram free" variant="solid" />
        <Button type='button' text="Contact sales" variant="outline" />
        </div>
    </div>
    <div className="w-fit">
    <img
      src='https://cdn.sanity.io/images/14xthjfi/production/ad3fadf4486c4187eb9f5514ab2fe86c51bf4345-1000x1000.png?w=702&h=702&auto=format'
      className='object-cover'
      alt='hero image'
      />
    </div>
    
    </div>
  )
}
