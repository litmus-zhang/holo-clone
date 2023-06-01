import Button from "./Button";
import { header } from "./styles";

const STORIES = [
  {
    title: "Escavox",
    stats: "$20K",
    body: "Saved by monitoring unused SIM cards",
  },
  {
    title: "THL",
    stats: "$500K",
    body: "SRecovered with vehicle location tracking",
  },
  {
    title: "Intelligent Cargo Systems",
    stats: "Near-zero",
    body: "Signal drops across country borders",
  },
];
export default function Stories() {
  return <div className="bg-black w-full p-10">
    <h1 className={` text-center text-white ${header}`}>Real stories, real value</h1>
    <div className="flex p-6 gap-3 justify-center">
    {
        STORIES.map((story) => <Card {...story}/>
        )
    }
    </div>
  </div>;
}

interface CardProps {
  title: string;
  stats: string;
  body: string;
}

const Card  = (props: CardProps) =>  {
  const { title, stats, body } = props;
  return(
    <div className="bg-white p-4 flex flex-col">

<div className="">
<p>{title}</p>
    <hr className="bg-primary w-4 h-1" />
</div>
    <p
    className="text-primary text-5xl"
    >{stats}</p>
    <p className="text-xl">{body}</p>
    
    <div className="">
    <Button text="Read their story" type="button" />
    </div>
  </div>
  )
};
