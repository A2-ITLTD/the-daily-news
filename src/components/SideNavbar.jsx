import { useTranslation } from "react-i18next";
import { LuNewspaper } from "react-icons/lu";
import sn1 from "../Images/sn1.png";
import sn2 from "../Images/sn2.png";
import sn3 from "../Images/sn3.png";
import sn4 from "../Images/sn4.png";
import sn5 from "../Images/sn5.png";

import sn6 from "../Images/sn6.png";
import sn7 from "../Images/sn7.png";
import sn8 from "../Images/sn8.png";
import sn9 from "../Images/sn9.png";
import sn10 from "../Images/sn10.png";

import alibaba from "../Images/alibaba_logo.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import youtube from "../Images/youtube.png";
import linkedin from "../Images/linkedin.png";
import pinterest from "../Images/pinterest.png";
const SideNavbar = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className="flex flex-col justify-end gap-3"> 
                <h1 className="btn btn-ghost w-fit text-2xl font-semibold">{t("LatestNews")}</h1> 
                {/* news 1 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn1} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn1title")}</h1>
                </div>
            </div>
            {/* news 2 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn2} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn2title")}</h1>
                </div>
            </div>
            {/* news 3 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn3} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn3title")}</h1>
                </div>
            </div>
            {/* news 4 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn4} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn4title")}</h1>
                </div>
            </div>
            {/* news 5 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn5} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn5title")}</h1>
                </div>
            </div>
            </div>
            {/* follow us */}
            <div className="my-16 flex flex-col justify-end gap-3 bg-base-200 p-5">
                <h1 className="btn btn-ghost w-fit text-2xl font-semibold">{t("FollowUs")}</h1>
                <div className="grid grid-cols-4 gap-6 items-center">
                    <img src={alibaba} className="w-16" />
                    <img src={facebook} className="w-16" />
                    <img src={instagram} className="w-16" />
                    <img src={whatsapp} className="w-16" />
                    <img src={twitter} className="w-16" />
                    <img src={youtube} className="w-16" />
                    <img src={linkedin} className="w-16" />
                    <img src={pinterest} className="w-16" />
                </div>
            </div>
            {/* Most Views */}
            <div className="flex flex-col justify-end gap-3"> 
                <h1 className="btn btn-ghost w-fit text-2xl font-semibold">Most Viewed</h1> 
                {/* news 6 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn6} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn6title")}</h1>
                </div>
            </div>
            {/* news 7*/}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn7} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn7title")}</h1>
                </div>
            </div>
            {/* news 8 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn8} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn8title")}</h1>
                </div>
            </div>
            {/* news 9 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn9} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn9title")}</h1>
                </div>
            </div>
            {/* news 10 */}
            <div className="flex items-center gap-5 bg-base-200 p-3">
                <img src={sn10} className="w-18 h-16 object-cover object-center" />
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-semibold text-blue-500">Date: 12 Sep 2024</p>
                    <h1 className="text-black font-bold">{t("sn10title")}</h1>
                </div>
            </div>
            </div>
            {/* news letter */}
            <div className="my-16 bg-blue-500 p-6 flex flex-col gap-5 items-start">
                <h1 className="btn btn-ghost text-3xl font-semibold text-white text-left">{t("Newsletter")}</h1> 
                <p className="text-base text-white">{t("Newslettertext")}</p>
                <form action="">
                    <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Email" />
                    <button className="bg-slate-300 rounded-md px-3 py-2">{t("Send")}</button>
                    </label>
                </form>
            </div>
            {/* categories */}
            <div  className="my-16 flex flex-col gap-5 items-start">
                <h1 className="btn btn-ghost text-3xl font-semibold text-left">{t("Categories")}</h1> 
                <div className="flex flex-col gap-3 w-full">
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("Sports")}</h1>
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("Business")}</h1>
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("Entertainment")}</h1>
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("LifeandLiving")}</h1>
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("Youth")}</h1>
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("Tech")}</h1>
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("Multimedia")}</h1>
                    <h1 className="flex items-center gap-4 bg-gray-200 w-auto p-4 text-xl font-semibold"><LuNewspaper /> {t("Politics")}</h1>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;