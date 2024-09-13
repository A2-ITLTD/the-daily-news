import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import Langselector from "./Langselector";

const Navbar = () => {

    const {t} = useTranslation();

    return (
        <div >  
            {/* 1st navbar */}
           <div className="navbar flex flex-col justify-center bg-base-100 py-5">
                <a className="btn btn-ghost text-5xl font-bold">{t("websitename")}</a>
            </div>
            {/* 2nd navbar */}
            <div className="navbar bg-transparent border-[1px] border-gray-500 px-5 md:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>{t("Home")}</a></li>
                        <li>
                        <a>{t("Categories")}</a>
                        <ul className="p-2">
                            <li><a>{t("Sports")}</a></li>
                            <li><a>{t("Business")}</a></li>
                            <li><a>{t("Entertainment")}</a></li>
                            <li><a>{t("LifeandLiving")}</a></li>
                            <li><a>{t("Youth")}</a></li>
                            <li><a>{t("Youth")}</a></li>
                            <li><a>{t("Multimedia")}</a></li>
                            <li><a>{t("Politics")}</a></li>
                        </ul>
                        </li>
                        <li><a>{t("LatestNews")}</a></li>
                        <li><a>{t("BreakingNews")}</a></li>
                        <li><a>{t("Contact")}</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">{t("websitename")}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                    <li><a>{t("Home")}</a></li>
                    <li>
                        <details>
                        <summary>{t("Categories")}</summary>
                        <ul className="p-2">
                            <li><a>{t("Sports")}</a></li>
                            <li><a>{t("Business")}</a></li>
                            <li><a>{t("Entertainment")}</a></li>
                            <li><a>{t("LifeandLiving")}</a></li>
                            <li><a>{t("Youth")}</a></li>
                            <li><a>{t("Tech")}</a></li>
                            <li><a>{t("Multimedia")}</a></li>
                            <li><a>{t("Politics")}</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>{t("LatestNews")}</a></li>
                    <li><a>{t("BreakingNews")}</a></li>
                    <li><a>{t("Contact")}</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Langselector></Langselector>
                </div>
            </div>
        </div>
    );
};

export default Navbar;