import React from 'react'
import Logo from "../assets/logo.png"

function Footer() {
  return (
    <div className="max-w-[1180px] h-[290px] max-[770px]:h-[220px] p-[120px] max-[770px]:p-[30px] pt-[70px] mx-auto flex items-center justify-start max-[770px]:items-start max-[770px]:justify-start max-[770px]:flex-col max-[770px]:gap-5 gap-[70px]">
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
