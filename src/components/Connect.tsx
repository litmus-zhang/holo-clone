import { header, text } from './styles'
import Button from './Button'

const TAGS = [
  {
    title: "Contact",
  body: "Our team of experts is here to answer your IoT questions. ",
  btnText: "Get in touch",
  icon: "https://www.hologram.io/static/0d181f0641dd9664669aa1df53b35873/contact.svg"
  },
  {
    title: "Blog",
  body: "Read IoT insights, trends, and tips from the team at Hologram.",
  btnText: "Read the blog",
  icon: "https://www.hologram.io/static/72a93ff7e45c81761861461f35a3624e/blog.svg"
  },
  {
    title: "Support",
  body: "Find everything you need to launch or troubleshoot your IoT deployment.",
  btnText: "Visit help center",
  icon: "https://www.hologram.io/static/f71fc5108100f306e60b00f7b5dcb28c/support.svg"
  },
]

const TEXT = [
{ text:  "Talk to an IoT expert"},
  {text:"Receive a free SIM"},
 {text: "Customize your plan"}
]

export default function Connect() {
  return (
    <div className='flex flex-col justify-center py-10'>
      <h1 className={`text-center my-4 ${header}`}>Connect with Hologram</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {
          TAGS.map((tag,i) =>  <Card key={i} {...tag} />)
        }
      </div>
      <div className="flex justify-between items-center border border-black shadow-3xl p-10 my-40 w-5/6 mx-auto">

      <div className="">
        <h1 className={`font-light text-xl`}>
        Get started with Hologram today
        </h1>
        <ul className='flex my-3 gap-2 flex-wrap'>
          {
            TEXT.map((item,i)=> (<Bullet key={i} {...item} />))
          }
        </ul>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button text="Sign up free" variant='outline' type="button" />
        <Button text="Contact sales" variant='solid' type="button" />
      </div>
      </div>
    </div>
  )


}

interface ConnectProps {
  title: string
  body: string
  btnText: string
  icon: string
}
interface  BulletProps {
  text: String
}
const Bullet = (props: BulletProps) =>  {
  const {text} = props
  return (
    <li className='flex gap-2 items-center p-2'>
    <svg width="10" height="9" viewBox="0 0 10 9" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.8.1a.5.5 0 0 1 .1.7l-6 8a.5.5 0 0 1-.7535.0535l-3-3a.5.5 0 1 1 .707-.707L3.446 7.7387 9.1.2a.5.5 0 0 1 .7-.1Z" fill="#099FC3"></path></svg>
      <span>{text}</span>
    </li>
  )
}
const Card = (props: ConnectProps) => {
  const { title, body, btnText, icon } = props
  return (
    <div className="border border-black flex flex-col justify-between p-6 gap-2 w-[350px]">
      <div className="">
        <img src={icon} alt="" />
      </div>
      <h1 className="font-light text-xl">{title}</h1>

      <p className={text}>{body}</p>
      <div className="">
      <Button
        type='button'
        text={btnText}
        variant='outline'
      />
      </div>
      
    </div>
  )
}