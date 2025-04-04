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
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Comments() {
    const { t } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n.language]);

    const commentsData = [
        { name: "Barno", img: barno, telegram: "@barno", text: "comments.text1" },
        { name: "Bonu", img: bonu, telegram: "@bonu_hamidova", text: "comments.text3" },
        { name: "Samiya", img: samiya, telegram: "@Samiya_smm", text: "comments.text2" },
        { name: "Nigora", img: nigora, telegram: "@nigora_dostva", text: "comments.text3" },
        { name: "Muxlisa", img: muhlisa, telegram: "@prsens", text: "comments.text1" },
        { name: "Lobar", img: lobar, telegram: "@hayot", text: "comments.text4" }
    ];

    return (
        <div id="comments" className="max-w-[1180px] mx-auto max-[770px]:px-5">
            <h1 data-aos="flip-up" className="text-gray-700 text-5xl max-[770px]:text-4xl max-[570px]:text-3xl max-[770px]:py-[25px] text-center py-[30px] font-bold pb-5">
                {t("header.Comments")}
            </h1>
            <div className="relative w-full mx-auto max-[770px]:px-5">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={40}
                    speed={3000}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".swiper-pagination", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active bg-amber-500" }}
                    breakpoints={{
                        990: { slidesPerView: 3 },
                        770: { slidesPerView: 2 },
                        570: { slidesPerView: 1 },
                        100: { slidesPerView: 1 },
                    }}
                    className="w-full mx-5"
                >
                    {commentsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-[350px] max-[770px]:w-full max-[770px]:mr-5 h-[250px] border border-[#0db4b4] rounded-2xl p-5">
                                <div className="flex items-start gap-5">
                                    <div className="w-[100px] h-[100px] rounded-full">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <h2 className="leading-[22px] text-3xl font-bold text-[#088080]">{item.name}</h2>
                                        <p className="pt-3 text-md font-medium">Telegram: {item.telegram}</p>
                                    </div>
                                </div>
                                <p className="pt-5 text-gray-700 text-md leading-[19px]">{t(item.text)}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination mb-[0]"></div>
            </div>
        </div>
    );
}

export default Comments;
