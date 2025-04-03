import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

import barno from "../assets/barno.jpg";
import bonu from "../assets/bonu.jpg";
import lobar from "../assets/lobar.jpg";
import muhlisa from "../assets/muhlisa.webp";
import nigora from "../assets/nigora.jpg";
import samiya from "../assets/samiya.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Comments() {
    const {t,i18n} =useTranslation()
    const [language, setLanguage] = useState(i18n.language);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once:false,
            });
        }, []);
    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n.language]);

  return (
    <div id="comments" className="max-w-[1180px] mx-auto">
        <h1 data-aos="flip-up" className="text-gray-700 text-5xl max-[770px]:text-4xl max-[570px]:text-3xl max-[770px]:py-[25px] text-center py-[30px] font-bold pb-5">{t("header.Comments")}</h1>
        <div className="relative w-full mx-auto max-[770px]:px-5">
        <Swiper
            modules={[Autoplay]}
            loop={true} // Slider tugamaydigan bo'lsin
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={40}
            speed={1000} // Slayd o'tish tezligi (1 soniya)
            autoplay={{
                delay: 2000, // Hech qanday kechikish bo'lmasin
                disableOnInteraction: false,
                // pauseOnMouseEnter: true, // Hover bo'lganda ham to'xtamasin
            }}
            breakpoints={{
                990: {
                  slidesPerView: 3,
                },
                770: {
                  slidesPerView: 2,
                },
                570: {
                  slidesPerView: 1,
                },
                100: {
                  slidesPerView: 1,
                },
              }}
            className="w-full gap-5"
        >
          <SwiperSlide>
            <div className="w-[350px] h-[250px] border border-[#0db4b4] rounded-2xl p-5">
                <div className="flex items-start gap-5">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={barno} alt="barno" className="w-full h-full object-cover rounded-[50%]" />
                    </div>
                    <div className="">
                        <h2 className=" leading-[22px] text-3xl font-bold text-[#088080]">Barno</h2>
                        <p className="pt-3 text-md font-medium">Telegram : @barno</p>
                    </div>
                </div>
                <p className="pt-5 text-gray-700 text-md leading-[19px]">{t("comments.text1")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] h-[250px] border border-[#0db4b4] rounded-2xl p-5">
                <div className="flex items-start gap-5">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={bonu} alt="barno" className="w-full h-full object-cover rounded-[50%]" />
                    </div>
                    <div className="">
                        <h2 className=" leading-[22px] text-3xl font-bold text-[#088080]">Bonu</h2>
                        <p className="pt-3 text-md font-medium">Telegram : @bonu_hamidova</p>
                    </div>
                </div>
                <p className="pt-5 text-gray-700 text-md leading-[19px]">{t("comments.text3")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] h-[250px] border border-[#0db4b4] rounded-2xl p-5">
                <div className="flex items-start gap-5">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={samiya} alt="barno" className="w-full h-full object-cover rounded-[50%]" />
                    </div>
                    <div className="">
                        <h2 className=" leading-[22px] text-3xl font-bold text-[#088080]">Samiya</h2>
                        <p className="pt-3 text-md font-medium">Telegram : @Samiya_smm</p>
                    </div>
                </div>
                <p className="pt-5 text-gray-700 text-md leading-[19px]">{t("comments.text2")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] h-[250px] border border-[#0db4b4] rounded-2xl p-5">
                <div className="flex items-start gap-5">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={nigora} alt="barno" className="w-full h-full object-cover rounded-[50%]" />
                    </div>
                    <div className="">
                        <h2 className=" leading-[22px] text-3xl font-bold text-[#088080]">Nigora</h2>
                        <p className="pt-3 text-md font-medium">Telegram : @nigora_dostva</p>
                    </div>
                </div>
                <p className="pt-5 text-gray-700 text-md leading-[19px]">{t("comments.text3")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] h-[250px] border border-[#0db4b4] rounded-2xl p-5">
                <div className="flex items-start gap-5">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={muhlisa} alt="barno" className="w-full h-full object-cover rounded-[50%]" />
                    </div>
                    <div className="">
                        <h2 className=" leading-[22px] text-3xl font-bold text-[#088080]">Muxlisa</h2>
                        <p className="pt-3 text-md font-medium">Telegram : @prsens</p>
                    </div>
                </div>
                <p className="pt-5 text-gray-700 text-md leading-[19px]">{t("comments.text1")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[350px] h-[250px] border border-[#0db4b4] rounded-2xl p-5">
                <div className="flex items-start gap-5">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={lobar} alt="barno" className="w-full h-full object-cover rounded-[50%]" />
                    </div>
                    <div className="">
                        <h2 className=" leading-[22px] text-3xl font-bold text-[#088080]">Lobar</h2>
                        <p className="pt-3 text-md font-medium">Telegram : @hayot</p>
                    </div>
                </div>
                <p className="pt-5 text-gray-700 text-md leading-[19px]">{t("comments.text4")}</p>
            </div>
          </SwiperSlide>
        </Swiper>     
        </div>
    </div>
  )
}

export default Comments
