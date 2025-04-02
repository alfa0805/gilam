import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import services1 from "../assets/services1.png";
import services2 from "../assets/dazmol.png";
import services3 from "../assets/parda.png";
import services4 from "../assets/why.bg.png";
import services5 from "../assets/sochiq.png";
import After from "../assets/after.jpg";
import Before from "../assets/before.jpg";
import CarSlider from './Clipwer';

function Services() {
    const {t,i18n} =useTranslation()
    const [modal, setModal] = useState(false)
    const menyu = () => {
      setModal(!modal)
      }
  return (
    <div>
      <div className="max-w-[1180px] mx-auto">
        <h1 data-aos="flip-up" className="text-gray-700 text-5xl font-bold pb-1">{t("services.title")}</h1>
        {/* card */}
        <div data-aos="fade-right" className="py-[60px] flex items-center justify-between flex-wrap gap-7 px-[50px]">
            <div className="w-[450px] h-[430px] bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services1} alt={t("services.card1")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl text-center font-bold pb-1">{t("services.card1")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>
            <div className="w-[450px] h-[430px] bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services2} alt={t("services.card2")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl text-center font-bold pb-1">{t("services.card2")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>
            <div className="w-[450px] h-[430px] bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services3} alt={t("services.card3")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl text-center font-bold pb-1">{t("services.card3")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>
            <div className="w-[450px] h-[430px] bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services4} alt={t("services.card4")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl text-center font-bold pb-1">{t("services.card4")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>
            <div className="w-[450px] h-[430px] bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services5} alt={t("services.card1")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl text-center font-bold pb-1">{t("services.card5")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>
        </div>
        {/* befor after img */}
        <div className="flex items-center flex-col gap-5">
            <h1 data-aos="flip-up" className="text-gray-700 text-5xl text-center font-bold pb-1">{t("services.title2")}</h1>
            <div className="w-[70%] h-[350px] relative flex items-center justify-center">
                <div className="w-[200px] h-[50px]">
                    <button onClick={menyu} 
                        className="text-white text-xl font-bold w-[200px] h-[50px] text-center 
                        cursor-pointer border-2 mt-5 border-[#f6a627] hover:bg-[#ffffffb4] hover:text-[#f6a627] bg-[#f6a72786] rounded-4xl">
                        {modal? `${t("services.before")}`:`${t("services.after")}`}
                    </button>
                </div>
                <div className="w-[100%] h-[350px] absolute top-0 left-0 -z-10">
                    <img 
                        src={modal? Before:After} 
                        alt="img" 
                        className="w-full h-full object-cover rounded-xl" 
                    />
                </div>
            </div>
        </div>
        {/* Proect videolari */}
        <div className="">
            <h1 data-aos="flip-up" className="text-gray-700 py-[70px] text-5xl text-center font-bold">{t("services.title3")}</h1>
            <CarSlider/>
        </div>
      </div>
    </div>
  )
}

export default Services
