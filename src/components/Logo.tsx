import React from 'react'

interface LogoProps{
    variant? : string
}
export default function Logo(props: LogoProps) {
    const {variant} = props;
    const color = variant === "white" ? "text-white" : "text-black"
  return (
    <div className={`text-xl font-bold ${color}`}>Logo</div>
  )
}
