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
const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className="">  
            <footer className="footer bg-gray-800 py-10 px-4 md:px-24 text-white text-xl">
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
                </nav>
                <nav>
                    <h6 className="footer-title">{t("News")}</h6>
                    <Link to="/latestnews" className="link link-hover">{t("LatestNews")}</Link>
                    <Link  to="/breakingnews" className="link link-hover">{t("BreakingNews")}</Link>
                    <Link  to="/contact" className="link link-hover">{t("Contact")}</Link>
                    
                </nav>
                <nav>
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
            </footer>
            <hr className="border-1 border-slate-100" />
            <footer className="footer footer-center bg-gray-800 text-white text-xl p-5">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - {t("Copyrighttext")}</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;