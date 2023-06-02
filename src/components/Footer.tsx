import { ReactNode } from "react";
import Logo from "./Logo";
import Button from "./Button";

const FOOTERITEMS = [
    {
        subTitle: "IoT Solution",
        children: [
            {
                text: "Cellular connectivity",
                href: "/"
            },
            {
                text: "Hyper SIM",
                href: "/"
            },
            {
                text: "Dashboard",
                href: "/"
            },
            {
                text: "Global IoT SIM card ",
                href: "/"
            },
            {
                text: "Preflight",
                href: "/"
            },
        ]
    },
    {
        subTitle: "Get Connected",
        children: [
            {
                text: "Pricing",
                href: "/"
            },
            {
                text: "Compatibility",
                href: "/"
            },
            {
                text: "Coverage",
                href: "/"
            },
            {
                text: "Why Hologram ",
                href: "/"
            },
        ]
    },
    {
        subTitle: "Support",
        children: [
            {
                text: "Help Center",
                href: "/"
            },
            {
                text: "Community",
                href: "/"
            },
            {
                text: "Github",
                href: "/"
            },
        ]
    },
    {
        subTitle: "Company",
        children: [
            {
                text: "About",
                href: "/"
            },
            {
                text: "Blog",
                href: "/"
            },
            {
                text: "Careers",
                href: "/"
            },
            {
                text: "Partnerships ",
                href: "/"
            },
        ]
    },
    {
        subTitle: "Social",
        children: [
            {
                text: "twitter",
                href: "/"
            },
            {
                text: "Facebook",
                href: "/"
            },
            {
                text: "Linkedin",
                href: "/"
            },
        ]
    }
]
export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer className="bg-black p-10 text-white flex flex-col gap-4">
            <Logo variant="white" />
            <div className="flex justify-between">
                {
                    FOOTERITEMS.map((item, i) => <FooterItems key={i} {...item} />)
                }

            </div>
            <div className="flex my-6 justify-between items-center">
                <ul className="flex gap-4">
                    <li>&copy;{date} BrandName </li>
                    <li>Terms </li>
                    <li>Privacy </li>
                    <li>Product Privacy Notices </li>

                </ul>
                <Button
                variant="outline"
                text="All systems operational"
                colorScheme="black"
                />
            </div>
        </footer>
    )
}

interface Iprops {
    text: string
    href: string
}
interface FooterProps {
    subTitle: string
    children?: Iprops[]
}
const FooterItems = (props: FooterProps) => {
    const { subTitle, children } = props;
    return (
        <div className="">
            <strong className="text-xl">{subTitle}</strong>
            <ul className="flex flex-col my-4 gap-3">
                {
                    children?.map((item, i) => <li key={i} className="hover:text-purple-300 capitalize"> <a href={item.href}>{item.text}</a> </li>)
                }

            </ul>
        </div>
    )
}