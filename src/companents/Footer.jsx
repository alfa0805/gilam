import React from 'react'
import Logo from "../assets/logo.png"

function Footer() {
  return (
    <div className="max-w-[1180px] h-[290px] p-[120px] pt-[70px] mx-auto flex items-center justify-start gap-[70px]">
        <a href="#home" className="">
            <div className="w-[140px] h-[36px] ml-[23px] mt-1">
                <img src={Logo} alt="logo" className="w-full h-full" />
            </div>
        </a>
        <ul className="flex flex-col gap-4">
            <li className="">
                <h1 className="text-gray-900 font-medium">Uzbekiston, Tashkent City</h1>
            </li>
            <li className="">
                <a href="tell:+998950003080">
                    <p className="text-gray-600 font-medium">+998950003080</p>
                </a>
            </li>
            <li className="">
                <a href="tell:+998990603080">
                    <p className="text-gray-600 font-medium">+998990603080</p>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer
