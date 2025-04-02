import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Home_img from "../assets/home.img.png"
import Home_bg from "../assets/home.bg.png"
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const {t,i18n} =useTranslation()

    useEffect(() => {
      AOS.init({
        duration: 1000, // Animatsiya davomiyligi (ms)
        once: true, // Faqat bir marta animatsiya qilish
      });
    }, []);
  return (
    <div id="home" className="">
      <div className="max-w-[1180px] pt-[120px] px-3 mx-auto flex items-center justify-between">
        <div data-aos="fade-right" className="w-[50%]">
          <h1 className="w-[90%] text-[80px] leading-[70px] font-bold font-archivo text-[#FEB640]">{t("home.title")}</h1>
          <p className="w-[73%] pt-[80px] leading-[25px] text-2xl font-medium ">{t("home.text")}</p>
          <div className="mt-[20px] ml-4 w-[250px] h-[250px]">
            <img src={Home_img} alt="" className="w-full h-full" />
          </div>
          <a href="#aloqa" className="">
            <button className="border-2 mt-5  cursor-pointer border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
              {t("header.Contact")}
            </button>
          </a>
        </div>
        <div className="w-[50%] h-[750px] mr-4 rounded-2xl">
          <img src={Home_bg} alt="" className="w-full h-full object-cover rounded-2xl"/>
        </div>
      </div>
    </div>
  )
}

export default Home
