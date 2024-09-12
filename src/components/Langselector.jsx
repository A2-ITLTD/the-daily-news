import { useTranslation } from "react-i18next";

const Langselector = () => {
    const { i18n } = useTranslation();

    // Function to change the language
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Check if the current language is "bn"
    const isBangla = i18n.language === 'bn';

    return (
        <div>  
           {/* toggle */}
           <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text pr-5">EN</span>
                    <input 
                        type="checkbox" 
                        className="toggle"
                        onChange={() => changeLanguage(isBangla ? 'en' : 'bn')} // Toggle between 'en' and 'bn'
                        checked={isBangla} // Set checked based on the current language
                    />
                    <span className="label-text pl-5">BN</span>
                </label>
            </div>
        </div>
    );
};

export default Langselector;
