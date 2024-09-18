import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
const BreakingNewsPanel = () => {
    const {t} = useTranslation();
    const [newsen, setNewsEn] = useState([]);
    const [newsbn, setNewsBn] = useState([]);


    useEffect(() => {
        // Fetching the news from the Express server on localhost:5000
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/breakingnewsen');
                setNewsEn(response.data); 
                const response2 = await axios.get('http://localhost:5000/breakingnewsbn');
                setNewsBn(response2.data);
            } catch (error) {
                console.error("Error fetching the news:", error);
            }
        };

        fetchNews();
    }, []);

    const handleDeleteEn = async (_id) => {
        try {

            const response = await axios.delete(`http://localhost:5000/breakingnewsen/delete/${_id}`);
            if (response.data && response.data.deletedCount === 1) {
                toast.success('Deleted successfully');
                const updatedNewsItems = newsen.filter(item => item._id !== _id);
                setNewsEn(updatedNewsItems);  
            } else {
                console.log('Failed to delete news item');
            }
        } catch (error) {
            console.error('Error deleting news item:', error);
        }
    };

    const handleDeleteBn = async (_id) => {
        try {

            const response = await axios.delete(`http://localhost:5000/breakingnewsbn/delete/${_id}`);
            if (response.data && response.data.deletedCount === 1) {
                toast.success('Deleted successfully');
                const updatedNewsItems2 = newsbn.filter(item => item._id !== _id);
                setNewsBn(updatedNewsItems2);  
            } else {
                console.log('Failed to delete news item');
            }
            } catch (error) {
                console.error('Error deleting news item:', error);
            }
    };

    return (
        <div >  
           <div>
                <div className="flex justify-between mb-5 items-center">
                <h1 className="text-2xl">Breaking News English</h1>
                <div className="flex items-center gap-5">
                    <Link to="/addnewsbrken">
                        <button className="py-3 px-6 bg-blue-500 text-white">Add News (En)</button>
                    </Link>
                    <Link to="/addnewsbrkbn">
                        <button className="py-3 px-6 bg-blue-500 text-white">Add News (Bn)</button>
                    </Link>
                </div>
                </div>
                <table class="table table-zebra w-full bg-base-200 rounded-none">
                            <thead>
                                <tr className='text-base'>
                                    <th>News No.</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Short Description</th>
                                    <th>Long Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                newsen.map(news => <tr className='text-black'>
                                        <td>{news.news_number}</td>
                                        <td><img src={news.image} alt="" /></td>
                                        <td>{news.title}</td>
                                        <td>{news.category}</td>
                                        <td>{news.date}</td>
                                        <td>{news.short_description}</td>
                                        <td>{news.long_description}</td>
                                        <td onClick={()=> handleDeleteEn(news._id)}><MdDelete className="text-red-500 text-3xl" /></td>
                                    </tr>)
                                }
                            </tbody>
                </table>
                {/* bangla */}
                <h1 className="text-2xl py-5">Breaking News Bangla</h1>
                <table class="table table-zebra w-full bg-base-200 rounded-none">
                            <thead>
                                <tr className='text-base'>
                                    <th>News No.</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Short Description</th>
                                    <th>Long Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                newsbn.map(news => <tr className='text-black'>
                                        <td>{news.news_number}</td>
                                        <td><img src={news.image} alt="" /></td>
                                        <td>{news.title}</td>
                                        <td>{news.category}</td>
                                        <td>{news.date}</td>
                                        <td>{news.short_description}</td>
                                        <td>{news.long_description}</td>
                                        <td onClick={()=> handleDeleteBn(news._id)}><MdDelete className="text-red-500 text-3xl" /></td>
                                    </tr>)
                                }
                            </tbody>
                </table>
           </div>
        </div>
    );
};

export default BreakingNewsPanel;