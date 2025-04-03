import React, { useEffect } from 'react'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import { BsLightningCharge } from 'react-icons/bs'
import { PiMedalDuotone } from 'react-icons/pi'
import { MdOutlineHandshake } from 'react-icons/md'
import Why_after from "../assets/why.img.png"
import AOS from "aos";
import "aos/dist/aos.css";

function Why_us() {
      const {t,i18n} =useTranslation()

       useEffect(() => {
            AOS.init({
              duration: 1000,
              once: false, 
            });
          }, []);
  return (
    <div>
      <div id="Why_us" className="max-w-[1180px] mx-auto px-3 pt-5">
        <div className="border-b-2 border-gray-600">
            <h1 data-aos="flip-up" className="text-gray-700 text-5xl font-bold pb-2 max-[770px]:text-4xl">{t("why.title")}</h1>
        </div>
        <div data-aos="fade-right" className="pt-[50px]  flex items-start justify-center gap-9 pb-[80px] max-[770px]:pb-[40px] max-[770px]:flex-col">
            <div className="w-[32%] h-full rounded-md max-[770px]:w-full max-[770px]:p-3 max-[770px]:border-[#70f2e5] max-[770px]:border ">
                <BsLightningCharge className="text-[#04A2BA] text-4xl"/>
                <h1 className="text-3xl pt-2 font-bold leading-[35px]">{t("why.title1")}</h1>
                <p className="text-xl pt-5 font-medium text-gray-500 leading-[28px]">{t("why.text1")}</p>
            </div>
            <div className="w-[31%] h-full rounded-md max-[770px]:w-full max-[770px]:p-3 max-[770px]:border-[#70f2e5] max-[770px]:border">
                <PiMedalDuotone className="text-[#04A2BA] text-4xl"/>
                <h1 className="text-3xl pt-2 font-bold leading-[35px]">{t("why.title2")}</h1>
                <p className="text-xl pt-5 font-medium text-gray-500 leading-[28px]">{t("why.text2")}</p>
            </div>
            <div className="w-[31%] h-full rounded-md max-[770px]:w-full max-[770px]:p-3 max-[770px]:border-[#70f2e5] max-[770px]:border">
                <MdOutlineHandshake className="text-[#04A2BA] text-4xl"/>
                <h1 className="text-3xl pt-2 font-bold leading-[35px]">{t("why.title3")}</h1>
                <p className="text-xl pt-5 font-medium text-gray-500 leading-[28px]">{t("why.text3")}</p>
            </div>
        </div>
        <div className="why-bg z-[-2] w-full h-[560px] mb-9 rounded-xl relative">
            <div className="z-[-1] absolute w-full h-[560px] bg-[#09ac71a9] rounded-xl">
            </div>
            <div className="max-[770px]:hidden">
                <div className="w-[390px] h-[390px] right-[2px] top-[200px] border-white rounded-[50%] border-[80px] absolute z-10"></div>
                <div className="w-[450px] h-[450px] right-[-25px] top-[170px] border-white rounded-[50%] border-[5px] absolute z-10"></div>
                <div className="w-[510px] h-[510px] right-[-55px] top-[140px] border-white rounded-[50%] border-[5px] absolute z-10"></div>
                <img src={Why_after} alt="" className="z-10 w-[670px] h-[460px] absolute bottom-0 right-0" />
            </div>
            <div data-aos="fade-right" className="ml-[40px] max-[770px]:ml-0 pt-[40px] w-[40%] max-[770px]:w-full max-[770px]:px-5">
                <h1 className="w-full text-white text-5xl font-bold max-[770px]:text-4xl max-[570px]:text-3xl">{t("why.b-title")}</h1>
                <p className="w-full py-8 text-white text-xl font-medium">{t("why.b-text")}</p>
                <div className="">
                    <a href="tell+998950003080" className="text-white text-4xl font-bold">{t("why.number")}</a>
                </div>
                <div className="">
                    <a href="tell+998950003080" className="text-white text-4xl font-bold">{t("why.number")}</a>
                </div>
                <button className="z-40 cursor-pointer border-2 mt-5 border-[#f6a627] hover:bg-amber-50 text-white hover:text-[#f6a627] px-8 py-[8px] bg-[#f6a627] rounded-4xl text-xl font-bold">
                        <a href="#aloqa" className="">{t("header.Contact")}</a>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Why_us
