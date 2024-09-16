import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';
const Details4 = () => {
    const [news, setNews] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Details";
        setLoading(true);
        // fetching data
        axios.get(`http://localhost:5000/breakingnewsbn/id/${id}`)
            .then(res => {
                setNews(res.data);  // Set news if found in the first API
            })
            .catch(error => {
               console.error(error);
            });
            setLoading(false); 
    }, []);


    if (loading) {
        return <div>Loading...</div>;  // Display loading message or spinner
    }
    
    return (
        <div className="m-4 p-6 border shadow-md rounded">
            <h1 className="text-3xl font-bold">{news.title}</h1>
            <p className="text-gray-500">{news.date}</p>
            <img src={news.image} alt={news.title} className="w-full mt-4 rounded" />
            <p className="mt-4">{news.long_description}</p>
            <p className="text-sm text-gray-600 mt-2">Category: {news.category}</p>
        </div>
    );
};

export default Details4;
