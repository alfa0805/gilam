import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.png";
import i18n from "../i18n";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function Header() {
    const {t,i18n} =useTranslation()
    const changeLanguage = (lang) => {
      console.log(lang);
      i18n.changeLanguage(lang)
    }
    const [modal, setModal] = useState(false)
      const menyu = () => {
        setModal(!modal)
      }
  return (
    <header className="shadow-md fixed w-full mx-auto bg-white z-50">
      <div className=" max-w-[1180px] h-[100px] px-5  mx-auto flex items-center justify-between">
        <a href="#home">
          <div className="w-[140px] h-[36px] ml-[23px] mt-1">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
        </a>
        <ul className="flex items-center justify-center font-archivo max-[1050px]:hidden">
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#home" className="">
                    <p className="text-lg font-bold ">{t("header.home")}</p>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#Why_us" className="">
                    <p className="text-lg font-bold ">{t("header.Why Us")}</p>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#services" className="">
                    <p className="text-lg font-bold ">{t("header.services")}</p>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#comments" className="">
                    <p className="text-lg font-bold ">{t("header.Comments")}</p>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#faq" className="">
                    <p className="text-lg font-bold font-archivo">{t("header.Faq")}</p>
                </a>
            </li>
        </ul>
        <div className="flex items-center gap-5 ml-[90px] max-[770px]:ml-[10px]">
          <select value={i18n.language} name="" id="" onChange={(e)=>changeLanguage(e?.target.value)}
                className="outline-0 text-gray-900 w-[100px] border-[1px] border-gray-700 hover:border-blue-500 rounded-md p-1">
                  <option className="opacity-5" value="uz">Uz</option>
                  <option className="" value="ru">Ru</option>
                  <option className="" value="en">En</option>
          </select>
          <a href="#aloqa" className="max-[770px]:hidden">
            <button className="border-2 border-[#FEB640]  cursor-pointer hover:bg-amber-50 text-white hover:text-[#FEB640] px-9 py-[4px] bg-[#FEB640] rounded-4xl text-xl font-bold">
              {t("header.Contact")}
            </button>
          </a>
        <button onClick={menyu} className=""><HiMenu className="min-[770px]:hidden text-3xl text-[#de8f10]"/></button>
        </div>
      </div>
      {
        modal?
        <div className="w-[250px] h-[380px] rounded-lg shadow-md absolute right-0 bg-white mt-1 flex items-center flex-col">
          <ul className="flex pt-7 flex-col items-center justify-center font-archivo gap-5">
            <div className=" absolute top-2 right-5">
                <button onClick={()=>menyu(false)}>
                  <RiCloseCircleLine  className="text-amber-500 text-3xl"/>
                </button>
            </div>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#home" className="">
                    <button onClick={()=>menyu(false)}>
                      <p className="text-lg font-bold ">{t("header.home")}</p>
                    </button>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#Why_us" className="">
                  <button onClick={()=>menyu(false)}>
                    <p className="text-lg font-bold ">{t("header.Why Us")}</p>
                  </button>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#services" className="">
                  <button onClick={()=>menyu(false)}>
                    <p className="text-lg font-bold ">{t("header.services")}</p>
                  </button>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#comments" className="">
                  <button onClick={()=>menyu(false)}>
                    <p className="text-lg font-bold ">{t("header.Comments")}</p>
                  </button>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#faq" className="">
                  <button onClick={()=>menyu(false)}>
                    <p className="text-lg font-bold font-archivo">{t("header.Faq")}</p>
                  </button>
                </a>
            </li>
          </ul>
          <a href="#aloqa">
            <button onClick={()=>menyu(false)} className="border-2 mt-5 border-[#FEB640]  cursor-pointer hover:bg-amber-50 text-white hover:text-[#FEB640] px-9 py-[4px] bg-[#FEB640] rounded-4xl text-xl font-bold">
              {t("header.Contact")}
            </button>
          </a>
        </div> :""
      }
    </header>
  )
}

export default Header
