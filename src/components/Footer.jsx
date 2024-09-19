import { useTranslation } from "react-i18next";
import alibaba from "../Images/alibaba_logo.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import youtube from "../Images/youtube.png";
import linkedin from "../Images/linkedin.png";
import pinterest from "../Images/pinterest.png";
import { Link } from "react-router-dom";
import sn1 from "../Images/sn1.png";
import sn2 from "../Images/sn2.png";
import sn3 from "../Images/sn3.png";
import sn4 from "../Images/sn4.png";
import sn5 from "../Images/sn5.png";
import logo from "../Images/logo.png"
const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className="">  
            <hr className="border-1 border-gray-700" />
            <footer className="footer bg-base-200 py-10 px-4 md:px-24 text-black text-xl">
                <nav>
                    <h6 className="footer-title">{t("Categories")}</h6>
                    <Link to={`/category/${t("Sports")}`} className="link link-hover">{t("Sports")}</Link>
                    <Link to={`/category/${t("Business")}`} className="link link-hover">{t("Business")}</Link>
                    <Link to={`/category/${t("Entertainment")}`} className="link link-hover">{t("Entertainment")}</Link>
                    <Link to={`/category/${t("LifeandLiving")}`} className="link link-hover">{t("LifeandLiving")}</Link>
                    <Link to={`/category/${t("Youth")}`} className="link link-hover">{t("Youth")}</Link>
                    <Link to={`/category/${t("Tech")}`} className="link link-hover">{t("Youth")}</Link>
                    <Link to={`/category/${t("Multimedia")}`} className="link link-hover">{t("Multimedia")}</Link>
                    <Link Link to={`/category/${t("Politics")}`} className="link link-hover">{t("Politics")}</Link>
                    <br />
                    <img src={logo} className="w-auto h-20" />
                </nav>
                <nav>
                    <h6 className="footer-title">{t("News")}</h6>
                    <Link to="/latestnews" className="link link-hover">{t("LatestNews")}</Link>
                    <Link  to="/breakingnews" className="link link-hover">{t("BreakingNews")}</Link>
                    <Link  to="/contact" className="link link-hover">{t("Contact")}</Link>
                    <br />
                    <h6 className="footer-title">{t("Social")}</h6>
                    <div className="grid grid-cols-4 gap-8">
                        <img src={alibaba} className="w-12" />
                        <img src={facebook} className="w-12" />
                        <img src={instagram} className="w-12" />
                        <img src={whatsapp} className="w-12" />
                        <img src={twitter} className="w-12" />
                        <img src={youtube} className="w-12" />
                        <img src={linkedin} className="w-12" />
                        <img src={pinterest} className="w-12" />
                    </div>
                    
                </nav>
                <nav className="items-center">
                    <div className="flex flex-col justify-center gap-3 w-96"> 
                        <h1 className="btn btn-ghost w-fit text-2xl font-semibold">{t("LatestNews")}</h1> 
                        {/* news 1 */}
                        <div className="flex items-center gap-5 bg-base-300 p-3 w-full">
                            <img src={sn1} className="w-18 h-16 object-cover object-center" />
                            <div className="flex flex-col gap-1 items-start text-sm">
                                <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                                <h1 className="text-black font-bold">{t("sn1title")}</h1>
                            </div>
                        </div>
                        {/* news 2 */}
                        <div className="flex items-center gap-5 bg-base-300 p-3">
                            <img src={sn2} className="w-18 h-16 object-cover object-center" />
                            <div className="flex flex-col gap-1 items-start  text-sm">
                                <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                                <h1 className="text-black font-bold">{t("sn2title")}</h1>
                            </div>
                        </div>
                        {/* news 3 */}
                        <div className="flex items-center gap-5 bg-base-300 p-3">
                            <img src={sn3} className="w-18 h-16 object-cover object-center" />
                            <div className="flex flex-col gap-1 items-start  text-sm">
                                <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                                <h1 className="text-black font-bold">{t("sn3title")}</h1>
                            </div>
                        </div>
                        {/* news 4 */}
                        <div className="flex items-center gap-5 bg-base-300 p-3">
                            <img src={sn4} className="w-18 h-16 object-cover object-center" />
                            <div className="flex flex-col gap-1 items-start  text-sm">
                                <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                                <h1 className="text-black font-bold">{t("sn4title")}</h1>
                            </div>
                        </div>
                
                    </div>
                </nav>
            </footer>
            <hr className="border-1 border-gray-700" />
            <footer className="footer footer-center bg-base-300 text-black text-xl p-5">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - {t("Copyrighttext")}</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;