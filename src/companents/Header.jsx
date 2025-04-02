import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.png";
import i18n from "../i18n";

function Header() {
    const {t,i18n} =useTranslation()
    const changeLanguage = (lang) => {
      console.log(lang);
      i18n.changeLanguage(lang)
    }
  return (
    <header className="shadow-md fixed w-full mx-auto bg-white z-50">
      <div className=" max-w-[1180px] h-[100px] pl-5 mx-auto flex items-center justify-between">
        <a href="#home" className="">
          <div className="w-[140px] h-[36px] ml-[23px] mt-1">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
        </a>
        <ul className="flex items-center justify-center font-archivo">
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
                <a href="#" className="">
                    <p className="text-lg font-bold ">{t("header.services")}</p>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#" className="">
                    <p className="text-lg font-bold ">{t("header.Comments")}</p>
                </a>
            </li>
            <li className="border-b-2 mb-0 px-3 border-white hover:border-b-2 hover:border-[#FEB640] hover:text-[#FEB640]">
                <a href="#" className="">
                    <p className="text-lg font-bold font-archivo">{t("header.Faq")}</p>
                </a>
            </li>
        </ul>
        <div className="flex items-center gap-5 ml-[90px] ">
          <select value={i18n.language} name="" id="" onChange={(e)=>changeLanguage(e?.target.value)}
                className="outline-0 text-gray-900 w-[100px] border-[1px] border-blue-400 rounded-md p-1 max-[900px]:hidden">
                  <option className="opacity-5" value="uz">Uz</option>
                  <option className="" value="ru">Ru</option>
                  <option className="" value="en">En</option>
          </select>
          <a href="#aloqa" className="">
            <button className="border-2 border-[#FEB640]  cursor-pointer hover:bg-amber-50 text-white hover:text-[#FEB640] px-9 py-[4px] bg-[#FEB640] rounded-4xl text-xl font-bold">
              {t("header.Contact")}
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
