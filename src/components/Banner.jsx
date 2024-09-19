import { useTranslation } from "react-i18next";
import n1 from "../Images/n1.jpg";
import n2 from "../Images/n2.jpg";
import n3 from "../Images/n3.jpg";
import n4 from "../Images/n4.jpg";
import n5 from "../Images/n5.jpg";
import n6 from "../Images/n6.png";
import n7 from "../Images/n7.png";
import n8 from "../Images/n8.png";
import n9 from "../Images/n9.png";
import n10 from "../Images/n10.jpeg";
import n11 from "../Images/n11.jpg";
import n12 from "../Images/n12.jpeg";
import n13 from "../Images/n13.jpg";
import n14 from "../Images/n14.png";
import { Link } from "react-router-dom";
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
                <Link to="/latestnews" className="text-blue-500 pl-2 font-bold">Read More</Link>
                </p>
           </section>
           {/* feature news */}
           <section className="my-16 flex flex-col gap-3">
                <h1 className="text-3xl font-bold bg-blue-600 px-5 py-3 w-fit text-white">{t("featurednews")}</h1>
                <div className="grid grid-cols-4 gap-8 py-5">
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
           {/* business news */}
           <section className="my-16 flex flex-col gap-3">
                {/* <h1 className="text-3xl font-bold bg-blue-600 px-5 py-3 w-fit text-white">{t("featurednews")}</h1> */}
                <h1 className="text-3xl font-bold bg-blue-600 px-5 py-3 w-fit text-white">{t("BusinessNews")}</h1>
                <div className="flex items-center gap-5 py-5">
                    <div className="flex flex-col gap-3 w-1/2">
                        <img src={n6} className="h-[300px] w-full" />
                        <p className="text-sm text-gray-500 italic">13 September 2024</p>
                        <h1 className="text-2xl font-bold">{t("n6title")}</h1>
                        <p className="text-base text-gray-500 text-justify">{t("n6shortdes")}</p>
                    </div>
                    <div className="flex flex-col gap-3 w-1/2">
                        <img src={n7} className="h-[300px] w-full" />
                        <p className="text-sm text-gray-500 italic">13 September 2024</p>
                        <h1 className="text-2xl font-bold">{t("n7title")}</h1>
                        <p className="text-base text-gray-500 text-justify">{t("n7shortdes")}.</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 py-5">
                    <div className="flex flex-col gap-3 w-1/2">
                        <img src={n8} className="h-[300px] w-full" />
                        <p className="text-sm text-gray-500 italic">13 September 2024</p>
                        <h1 className="text-2xl font-bold">{t("n8title")}</h1>
                        <p className="text-base text-gray-500 text-justify">{t("n8shortdes")}</p>
                    </div>
                    <div className="flex flex-col gap-3 w-1/2">
                        <img src={n9} className="h-[300px] w-full" />
                        <p className="text-sm text-gray-500 italic">13 September 2024</p>
                        <h1 className="text-2xl font-bold">{t("n9title")}</h1>
                        <p className="text-base text-gray-500 text-justify">{t("n9shortdes")}.</p>
                    </div>
                </div>
           </section>
           {/* feature news 2*/}
           <section className="my-16 flex flex-col gap-3">
                <h1 className="text-3xl font-bold bg-blue-600 px-5 py-3 w-fit text-white">{t("Sports")}</h1>
                <div className="grid grid-cols-4 gap-8 py-5">
                    <div className="relative">
                        <img src={n10}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n10title")}</p>
                    </div>
                    <div className="relative">
                        <img src={n11}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n11title")}</p>
                    </div>
                    <div className="relative">
                        <img src={n12}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n12title")}</p>
                    </div>
                    <div className="relative">
                        <img src={n13}  />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-50"></div>
                        <p className="absolute bottom-2 text-white px-2">{t("n13title")}</p>
                    </div>
                </div>
           </section>
           {/* last news */}
           <section className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold">{t("n14title")}</h1>
                <img src={n14} className="h-[500px] w-full object-cover object-center" />
                <p className="text-base text-gray-500 text-justify">
                {t("n14shortdes")}
                <Link to="/latestnews" className="text-blue-500 pl-2 font-bold">Read More</Link>
                </p>
           </section>
        </div>
    );
};

export default Banner;