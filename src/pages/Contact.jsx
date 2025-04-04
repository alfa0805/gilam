import Gilambg from "../assets/contactbg.png"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


function Contact() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      console.log(lang);
      i18n.changeLanguage(lang);
    };

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const BOT_TOKEN = "7519624691:AAGw5kc72DDVM3fE1iv4t_vwfXvJqzo8mQM"; // Bot tokenni shu yerga yoz
        const CHAT_ID = "1957552716"; // Chat ID ni shu yerga yoz
    
        const message = `📝 *Yangi xabar:*\n👤 *Ism:* ${formData.name}\n📞 *Telefon:* +998${formData.phone}\n💬 *Xabar:* ${formData.message}`;
    
        try {
          const response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "Markdown" }),
            }
          );
    
          if (response.ok) {
            setSuccess(true);
            setFormData({ name: "", phone: "", message: "" });
            setTimeout(() => setSuccess(false), 3000);
          } else {
            console.error("Xatolik yuz berdi!");
          }
        } catch (error) {
          console.error("Telegramga ulanib bo‘lmadi!", error);
        }
    
        setLoading(false);
      };
  return (
    <div id="aloqa" className="max-w-[1180px] relative mx-auto mt-[60px] max-[770px]:mt-[25px] rounded-xl h-[500px] faq flex items-center justify-around">
        <div className="rounded-lg w-[400px] max-[550px]:w-[300px] h-[400px] max-[770px]:h-[370px] bg-white p-5 shadow-lg">
                  <h2 className="text-[#03424c] text-4xl max-[770px]:text-3xl max-[570px]:text-3xl font-bold mb-[40px]">{t("contact.title")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("contact.input")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className=" placeholder:text-gray-500 shadow-md w-full p-3 bg-gray-200 text-gray-800 rounded-2xl outline-none"
                    />
                    <div className="flex shadow-md items-center bg-gray-200 text-white rounded-2xl">
                      <span className="pl-3 text-gray-500">+998</span>
                      <input
                        type="number"
                        name="phone"
                        placeholder="901234567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full text-gray-800 p-3 bg-transparent outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className={`w-full p-2 mt-[30px] shadow-lg text-white hover:text-amber-500 font-bold rounded-xl transition-all ${
                        loading ? "bg-gray-100 cursor-not-allowed" : "bg-amber-500 hover:bg-transparent border-2 border-amber-500"
                      }`}
                      disabled={loading}
                    >
                      {loading ? `${t("contact.loading")}`:`${t("contact.btn")}`}
                    </button>
                    {success  && 
                      <p className="w-full h-full bg-[#00000081] text-center absolute top-0 left-0 flex items-center justify-center">
                        <span className="w-[500px] max-[770px]:w-[350px] max-[770px]:text-2xl max-[550px]:w-[280px] max-[550px]:h-[50px] max-[550px]:py-[10px]
                           max-[550px]:text-xl h-[80px] py-5 rounded-md bg-white text-amber-500 text-3xl">
                            {t("contact.send")}
                            </span>
                      </p> 
                    }
                  </form>
        </div>
        <div className="w-[500px] h-[386px] border-b-2 max-[990px]:hidden">
            <img src={Gilambg} alt="" className="w-full h-full" />
        </div>
    </div>
  )
}

export default Contact
