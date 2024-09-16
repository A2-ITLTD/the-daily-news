import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BreakingNewsBn = () => {
    const {t} = useTranslation();
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetching the news from the Express server on localhost:5000
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/breakingnewsbn');
                setNews(response.data); 
            } catch (error) {
                console.error("Error fetching the news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-semibold">{t("BreakingNews")}</h1>
                <div className="flex gap-5">
                    <Link to="/breakingnews"><button className="btn btn-ghost">English</button></Link>
                    <Link to="/breakingnewsbn"><button className="btn btn-ghost">Bangla</button></Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
            {news.map((item, index) => (
                <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                    {/* Image Section */}
                    <div 
                        className="lg:w-48 h-full flex-none bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})`, height: 'full' }}>
                    </div>
                    
                    {/* Content Section */}
                    <div className="bg-white p-6 flex flex-col justify-between leading-normal">
                        {/* Title and Category */}
                        <div className="mb-4">
                            <div className="text-gray-700 uppercase tracking-wide text-sm font-semibold">{item.category}</div>
                            <h2 className="text-gray-900 font-bold text-2xl mb-2">{item.title}</h2>
                        </div>
                        
                        {/* Description */}
                        <div className="mb-8">
                            <div className="text-gray-800 text-lg font-semibold mb-1">{item.short_description}</div>
                            <p className="text-gray-700 text-base">{item.long_description.slice(0, 100)}...</p>
                        </div>

                        {/* Date and Read Full Button */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">{item.date}</span>
                            <Link to={`/details4/${item._id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                            {t("ReadFullNews")}
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

    );
};

export default BreakingNewsBn;
