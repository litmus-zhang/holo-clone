import { text } from "./styles"

const REVIEWS = [
  {
    review: "Coverage is great. Billing is great. Hologram ticks all the boxes.",
    reviewer: "Lisa Seach",
    company: "FLEET SCHEDULING MANAGER",
    imageUrl: "https://cdn.sanity.io/images/14xthjfi/production/89621b7b5085ef6348d4ddb1f7652d05b1e47a6d-288x112.png?w=129&h=50&auto=format"
  },
  {
    review: "It felt like Hologram was the Stripe of SIM management",
    reviewer: "Tanguy Goretti",
    company: "CO-FOUNDER/CTO",
    imageUrl: "https://cdn.sanity.io/images/14xthjfi/production/be3dd2b124888be4868aa7d41578504de1f839c1-224x100.png?w=112&h=50&auto=format"
  },
]

export default function Reviews() {
  return (
    <div>
      <div className="bg-purple-200 p-10">
     <div className="flex flex-wrap justify-center gap-3">
     {
          REVIEWS.map((review, i) => <Card key={i} {...review} />)
        }
     </div>
      </div>
    </div>
  )
}

interface ReviewProps {
  review: string
  reviewer: string
  company: string
  imageUrl: string
}

const Card = (props: ReviewProps) => {
  const { review, reviewer, company, imageUrl } = props;
  return (
    <div className="bg-white w-[500px] p-8 shadow-[16px-16px_rgba(0,0,0,0)]">

      <div className="">
        <svg width="48" height="32" fill="none"><path d="m20.61 7.93-1-4.73C10.57 3.28 2 7.61 2 19v9.8h13.44V18.53H9.66c0-6.1 2.4-9.95 10.95-10.6Zm6.97 20.87h13.44V18.53h-5.78c0-6.1 2.4-9.95 10.95-10.6l-1-4.73c-9.05.08-17.61 4.41-17.61 15.8v9.8Z" fill="#fff" stroke="#00040F"></path>
        </svg>
        <h1 className="font-light text-2xl my-4">{review}</h1>

      </div>

      <div className="flex justify-between items-center">
        <div className="">
          <p>{reviewer}</p>
          <p className="uppercase">{company}</p>
        </div>

        <div className="">
          <img src={imageUrl} alt="company" />
        </div>

      </div>
    </div>
  )
}