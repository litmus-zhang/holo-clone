import { useState } from "react";
import Button from "./Button";
import { header, text } from "./styles";


const ABOUT = [
  {
    title: "Count on reliable connectivity",
    body: "Trust that devices will stay connected with redundant coverage spanning 470+ networks in 200+ countries.",
    btnText: "Learn about connectivity",
    imageUrl: "https://cdn.sanity.io/images/14xthjfi/production/4c1b6349a1055911532d157000548cebf8394e63-1412x790.png?w=654&h=366&auto=format",
  },
  {
    title: "Deploy with a single IoT SIM",
    body: "Tailor coverage and future-proof devices with eUICC SIMs that securely connect to the best network available",
    btnText: "Discover IoT SIMs",
    imageUrl: "https://cdn.sanity.io/images/14xthjfi/production/b7a0248d17227a7ffb0e96392d02e0effeabbde5-1412x790.png?w=654&h=366&auto=format",
  },
  {
    title: "Monitor and optimize your fleet",
    body: "See the full picture of your IoT deployment and take action with our easy-to-use Dashboard or REST API.",
    btnText: "Dive into the Dashboard",
    imageUrl: "https://cdn.sanity.io/images/14xthjfi/production/7d669274945d1ad4541f02b8fa026c7994880bb0-1412x790.png?w=654&h=366&auto=format",
  },
  {
    title: "Access plans to fit your needs",
    body: "Unlock the right data plan for your business with pay-as-you-go, monthly, and custom options.",
    btnText: "Compare pricing",
    imageUrl: "https://cdn.sanity.io/images/14xthjfi/production/773b2549c07b46998f2accafbab1c639bd7af7c7-1412x790.png?w=654&h=366&auto=format",

  },
]

export default function About() {
  const [active, setActive] = useState(false)

  const toggle = () =>{
    setActive(!active)
  }
  return (
    <div className="py-10 my-4">
      <h1 className={`text-center ${header}`}>A solution built to navigate the complexities of IoT</h1>
      <div>
        {
          ABOUT.map((item, i) => <Section key={i} {...item} />)
        }
      </div>
    </div>
  )
}

interface SectionProps {
  title: string
  body: string
  btnText: string
  imageUrl: string
  active?: boolean
}
const Section = (props: SectionProps) => {
  const { title, body, btnText, imageUrl, active } = props
  const toggle = () => {
    return !active
  }
  console.log("active",active)
const Content = active === true ? "hidden" : ""
const Text = active === true ? "text-primary" : ""

  return (
    <div onClick={toggle} className="flex p-4 justify-between cursor-pointer">

      <div className="border-l-2 border-primary flex flex-col justify-between h-fit gap-4 px-4">
<div className="flex flex-col h-full justify-between gap-6">
<h1 className={Text}>{title}</h1>
        <p className={text + " " + Content}>{body}</p>
        <div className={Content}>
          <Button
            type="button"
            variant="outline"
            text={btnText}
          />
        </div>
      </div>
</div>

      <div>
        <img src={imageUrl} alt="connectivity" />
      </div>
    </div>
  )
}
