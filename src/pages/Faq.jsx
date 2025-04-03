import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1180px] mx-auto flex items-start justify-between pt-5 border-t-2 mt-5">
            <h1 className="text-gray-700 text-5xl font-bold pb-5">{t("header.Faq")}</h1>
            <div className="w-3xl">
                {t("faqs", { returnObjects: true }).map((faq, index) => (
                    <div key={index} className={`w-full border border-[#eab926] rounded-md px-5 transition-all duration-300 ${
                        openIndex === index ? "my-4 shadow-lg" : ""
                    }`}>
                        <button
                            className="w-full flex justify-between items-center text-left py-4 text-2xl font-bold text-gray-500"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <FaChevronUp className="text-[15px] text-[#eab926]" />
                            ) : (
                                <FaChevronDown className="text-[15px] text-[#eab926]" />
                            )}
                        </button>
                        {openIndex === index && (
                            <p className="text-gray-600 text-lg pb-4">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
