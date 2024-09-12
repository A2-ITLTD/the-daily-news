import { useTranslation } from "react-i18next";
import n1 from "../Images/n1.jpg";
import n2 from "../Images/n2.jpg";
import n3 from "../Images/n3.jpg";
import n4 from "../Images/n4.jpg";
import n5 from "../Images/n5.jpg";
const Banner = () => {
    const {t} = useTranslation();
    return (
        <div className="" >  
           {/* main news */}
           <section className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold">{t("n1title")}</h1>
                <img src={n1} className="h-[500px] w-full object-cover object-center" />
                <p className="text-base text-gray-500 text-justify">
                {t("n1shortdes")}
                <button className="text-blue-500 pl-2 font-bold">Read More</button>
                </p>
           </section>
           {/* feature news */}
           <section className="my-16 flex flex-col gap-3">
                <h1 className="text-3xl font-bold bg-blue-600 px-5 py-3 w-fit text-white">{t("featurednews")}</h1>
                <div className="grid grid-cols-4 gap-8">
                    <div className="relative">
                        <img src={n2}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n2title")}</p>
                    </div>
                    <div className="relative">
                        <img src={n3}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n3title")}</p>
                    </div>
                    <div className="relative">
                        <img src={n4}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n4title")}</p>
                    </div>
                    <div className="relative">
                        <img src={n5}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n5title")}</p>
                    </div>
                </div>
           </section>
        </div>
    );
};

export default Banner;