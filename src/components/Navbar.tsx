import Logo from './Logo'
import Button from './Button'

const NAVITEMS = [
    {
        title: "Solution",
        link: "/",
        children: ""
    },
    {
        title: "Pricing",
        link: "/",
        children: ""
    },
    {
        title: "Store",
        link: "/",
        children: ""
    },
]
export default function Navbar() {
  return (
    <header className='sticky top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white '>
        <Logo/>
        <nav className=''>
            <ul className='flex gap-4 items-center justify-center'>
                {
                    NAVITEMS.map((item,i) => <NavItem  key={i} {...item}/>)
                }
                <li className='flex gap-2'>
                    <Button
                    text='Sign in'
                    variant='outline'
                    size='sm'
                    />
                    <Button
                    text='Contact Sales'
                    variant='solid'
                    size='sm'
                    
                    />
                </li>
            </ul>
        </nav>
    </header>
  )
}

interface NavItemProps{
    title : string
    link?: string
    children? : React.ReactNode
}

const NavItem = (props: NavItemProps) =>{
 const { title, link, children} = props; 
    return (
        <div className="flex flex-col gap-2 hover:text-primary">
            <a href={link}>{title}</a>
            {/* <div className="hover:border-b-2 hover:py-4 hover:border-primary"></div> */}
            {children}
        </div>
    )
}
