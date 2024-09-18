import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    const {t} = useTranslation();
    return (
        <div>
            <h1 className="pb-5 text-3xl font-semibold">Click Button To Edit News</h1> 
            <div className="flex flex-col items-left w-full gap-10"> 
                <Link to="/breakingnewspanel" className="p-10 bg-base-300 text-3xl font-semibold">
                    <h1>{t("BreakingNews")}</h1>
                </Link>
                <Link to="/latestnewspanel"  className="p-10 bg-base-300 text-3xl font-semibold">
                    <h1>{t("LatestNews")}</h1>
                </Link>
            </div>
        </div>
    );
};

export default AdminPanel;