import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import services1 from "../assets/services1.png";
import services2 from "../assets/dazmol.png";
import services3 from "../assets/parda.png";
import services4 from "../assets/why.bg.png";
import services5 from "../assets/sochiq.png";
import After from "../assets/after.jpg";
import Before from "../assets/before.jpg";
import Damas from "../assets/damas.jpg";
import Temir from "../assets/temir.png";
import Toza from "../assets/toza.png";
import Tozalovchi from "../assets/tozalovchi.png";
import Tozaman from "../assets/tozaman.png";

import CarSlider from './Clipwer';
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaFileContract, FaShippingFast } from 'react-icons/fa';
import { MdDeliveryDining, MdDryCleaning } from 'react-icons/md';
import { GiRedCarpet, GiVacuumCleaner } from 'react-icons/gi';

function Services() {
    const {t,i18n} =useTranslation()
    const [modal, setModal] = useState(false)
    const menyu = () => {
      setModal(!modal)
      }

     useEffect(() => {
          AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            once:false, // Faqat bir marta animatsiya qilish
          });
        }, []);
  return (
    <div>
      <div id="services" className="max-w-[1180px] mx-auto max-[800px]:px-5">
        <h1 data-aos="flip-up" className="text-gray-700 text-5xl font-bold pb-1 max-[770px]:text-4xl max-[570px]:text-3xl">{t("services.title")}</h1>
        {/* card */}
        <div  className="py-[60px] flex items-center justify-between max-[990px]:justify-center flex-wrap gap-7 px-[50px] max-[770px]:px-5">
            
            <div data-aos="fade-right" className="w-[450px] h-[430px] max-[770px]:w-full  max-[770px]:h-full max-[770px]:pb-5 bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services1} alt={t("services.card1")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl max-[770px]:text-3xl text-center font-bold pb-1">{t("services.card1")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>
            
            <div data-aos="fade-right" className="w-[450px] h-[430px] max-[770px]:w-full  max-[770px]:h-full max-[770px]:pb-5 bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services2} alt={t("services.card2")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl max-[770px]:text-3xl text-center font-bold pb-1">{t("services.card2")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>

            <div data-aos="fade-right" className="w-[450px] h-[430px] max-[770px]:w-full  max-[770px]:h-full max-[770px]:pb-5 bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services3} alt={t("services.card3")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl max-[770px]:text-3xl text-center font-bold pb-1">{t("services.card3")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>

            <div data-aos="fade-right" className="w-[450px] h-[430px] max-[770px]:w-full  max-[770px]:h-full max-[770px]:pb-5 bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services4} alt={t("services.card4")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl max-[770px]:text-3xl text-center font-bold pb-1">{t("services.card4")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>

            <div data-aos="fade-right" className="w-[450px] h-[430px] max-[770px]:w-full  max-[770px]:h-full max-[770px]:pb-5 bg-gray-100 rounded-2xl flex flex-col items-center
                    gap-5 shadow-md">
                <div className="w-full h-[207px]">
                    <img src={services5} alt={t("services.card1")} className="w-full h-full"/>
                </div>
                <h1 className="text-[#096b86] text-4xl max-[770px]:text-3xl text-center font-bold pb-1">{t("services.card5")}</h1>
                <div className="w-[171px] h-[50px]">
                    <button className="z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                    </button>
                </div>
            </div>
        </div>
        {/* befor after img */}
        <div className="flex items-center flex-col gap-5">
            <h1 data-aos="flip-up" className="text-gray-700 text-5xl  max-[770px]:text-4xl max-[570px]:text-3xl text-center font-bold pb-1">{t("services.title2")}</h1>
            <div className="w-[70%] h-[350px] max-[770px]:w-[100%] relative flex items-center justify-center">
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
        <div className="px-10">
            <h1 data-aos="flip-up" className="text-gray-700 py-[70px] text-5xl  max-[770px]:text-4xl max-[570px]:text-3xl text-center font-bold">{t("services.title3")}</h1>
            <CarSlider/>
        </div>
        {/* ish jarayoni */}
        <div className="px-10">
            <h1 data-aos="flip-up" className="text-gray-700 py-[70px] max-[770px]:py-[25px] text-5xl  max-[770px]:text-4xl max-[570px]:text-3xl text-center font-bold">{t("services.title4")}</h1>
            <div data-aos="zoom-in" className="grid grid-cols-4 max-[990px]:grid-cols-3 max-[770px]:grid-cols-2 max-[550px]:grid-cols-1 gap-8 pb-[50px] max-[770px]:pb-[25px]">
                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <BiSolidPhoneCall className="text-5xl text-[#08bbc2]"/>
                        <h2 className="text-xl font-medium">{t("services.works1")}</h2>
                    </div>
                    <p className="text-md pt-3 leading-[18px] text-center text-gray-500">{t("services.text1")}</p>
                </div>

                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <FaShippingFast className="text-5xl text-[#08bbc2]"/>
                        <h2 className="text-xl font-medium">{t("services.works2")}</h2>
                    </div>
                    <p className="text-md pt-3 leading-[18px] text-center text-gray-500">{t("services.text2")}</p>
                </div>

                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <FaFileContract className="text-5xl text-[#08bbc2]"/>
                        <h2 className="text-xl font-medium">{t("services.works3")}</h2>
                    </div>
                    <p className="pt-3 text-md leading-[18px] text-center text-gray-500">{t("services.text3")}</p>
                </div>

                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <GiRedCarpet className="text-5xl text-[#08bbc2]"/>
                        <h2 className="text-xl  font-medium">{t("services.works4")}</h2>
                    </div>
                    <p className="text-md pt-3 leading-[18px] text-center text-gray-500">{t("services.text4")}</p>
                </div>

                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <GiVacuumCleaner className="text-5xl text-[#08bbc2]"/>
                        <h2 className="text-xl font-medium">{t("services.works5")}</h2>
                    </div>
                    <p className="text-md pt-3 leading-[18px] text-center text-gray-500">{t("services.text5")}</p>
                </div>

                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <MdDryCleaning className="text-5xl text-[#08bbc2]"/>
                        <h2 className="text-xl font-medium">{t("services.works6")}</h2>
                    </div>
                    <p className="text-md pt-3 leading-[18px] text-center text-gray-500">{t("services.text6")}</p>
                </div>

                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <MdDeliveryDining className="text-5xl text-[#08bbc2]"/>
                        <h2 className="text-xl font-medium">{t("services.works7")}</h2>
                    </div>
                    <p className="text-md pt-3 leading-[18px] text-center text-gray-500">{t("services.text7")}</p>
                </div>

                <div className="w-full h-[160px] rounded-md shadow-lg bg-gray-100 p-5">
                    <div className="flex items-center justify-center gap-1">
                        <div className="w-[150px] h-[40px] ">
                            <button className="w-full h-full z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] bg-[#f6a627] rounded-xl text-md font-bold">
                                <a href="#aloqa" className="">{t("services.btn")}</a>
                            </button>
                        </div>
                    </div>
                    <p className="text-md pt-3 leading-[18px] text-center text-gray-500">{t("services.text8")}</p>
                </div>
            </div>
        </div>
        <div className="">
            <h1 data-aos="flip-up" className="text-gray-700 py-[70px] max-[770px]:py-[25px] text-5xl  max-[770px]:text-4xl max-[570px]:text-3xl font-bold">{t("services.title5")}</h1>
            <div className="grid grid-cols-3 gap-5 w-full h-full max-[770px]:grid-cols-1">
                <div className="w-full h-[570px] rounded-xl shadow-md relative overflow-hidden group">
                    <img src={Damas} alt="damas" className="w-full h-full object-cover rounded-xl transition-transform duration-100 group-hover:scale-[1.05] " />
                    <div className="bg-[#0f0f0e4c] w-full h-full flex absolute top-0 left-0 items-center justify-center
                        opacity-0 hover:opacity-100 rounded-xl">
                        <div className="w-[140px] h-[40px] ">
                            <button className="w-full h-full z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-[#0d0d0db4] text-white hover:text-[#f6a627] bg-[#f6a727d1] rounded-xl text-lg font-bold">
                                <a href="#aloqa" className="">{t("header.Contact")}</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="w-full h-[275px] rounded-xl shadow-md relative overflow-hidden group">
                        <img src={Temir} alt="damas" className="transition-transform duration-100 group-hover:scale-[1.05] w-full h-full object-cover rounded-xl" />
                        <div className="bg-[#0f0f0e4c] w-full h-full flex absolute top-0 left-0 items-center justify-center
                            opacity-0 hover:opacity-100 rounded-xl">
                            <div className="w-[140px] h-[40px] ">
                                <button className="w-full h-full z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-[#0d0d0db4] text-white hover:text-[#f6a627] bg-[#f6a727d1] rounded-xl text-lg font-bold">
                                    <a href="#aloqa" className="">{t("header.Contact")}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[275px] rounded-xl shadow-md relative overflow-hidden group">
                        <img src={Tozalovchi} alt="damas" className="transition-transform duration-100 group-hover:scale-[1.05] w-full h-full object-cover rounded-xl" />
                        <div className="bg-[#0f0f0e4c] w-full h-full flex absolute top-0 left-0 items-center justify-center
                            opacity-0 hover:opacity-100 rounded-xl">
                            <div className="w-[140px] h-[40px] ">
                                <button className="w-full h-full z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-[#0d0d0db4] text-white hover:text-[#f6a627] bg-[#f6a727d1] rounded-xl text-lg font-bold">
                                    <a href="#aloqa" className="">{t("header.Contact")}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="w-full h-[275px] rounded-xl shadow-md relative overflow-hidden group">
                        <img src={Toza} alt="damas" className="transition-transform duration-100 group-hover:scale-[1.05] w-full h-full object-cover rounded-xl" />
                        <div className="bg-[#0f0f0e4c] w-full h-full flex absolute top-0 left-0 items-center justify-center
                            opacity-0 hover:opacity-100 rounded-xl">
                            <div className="w-[140px] h-[40px] ">
                                <button className="w-full h-full z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-[#0d0d0db4] text-white hover:text-[#f6a627] bg-[#f6a727d1] rounded-xl text-lg font-bold">
                                    <a href="#aloqa" className="">{t("header.Contact")}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[275px] rounded-xl shadow-md relative overflow-hidden group">
                        <img src={Tozaman} alt="damas" className="transition-transform duration-100 group-hover:scale-[1.05] w-full h-full object-cover rounded-xl" />
                        <div className="bg-[#0f0f0e4c] w-full h-full flex absolute top-0 left-0 items-center justify-center
                            opacity-0 hover:opacity-100 rounded-xl">
                            <div className="w-[140px] h-[40px] ">
                                <button className="w-full h-full z-40 cursor-pointer border-2 border-[#f6a627] hover:bg-[#0d0d0db4] text-white hover:text-[#f6a627] bg-[#f6a727d1] rounded-xl text-lg font-bold">
                                    <a href="#aloqa" className="">{t("header.Contact")}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
