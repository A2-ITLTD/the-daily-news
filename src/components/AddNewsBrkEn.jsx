import { useState } from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const key = import.meta.env.VITE_Imagebbkey;
const imageApi = `https://api.imgbb.com/1/upload?key=${key}`;

const AddNewsBrkEn = () => {

    const [formData, setFormData] = useState({
        newsNumber: '',
        title: '',
        category: 'Sports', // Default category
        categoryBn: '',
        short_description: '',
        long_description: '',
        date: '',
        image: null
    });

    const categories = [
        'Sports',
        'Business',
        'Entertainment',
        'Life&Living',
        'Youth',
        'Multimedia',
        'Politics'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        // Prepare the image for upload using FormData
        const imageFormData = new FormData();
        imageFormData.append('image', formData.image);

        try {
            // Upload image to imgbb
            const res = await axios.post(imageApi, imageFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            const imageUrl = res.data.data.display_url;
            console.log('Image URL:', imageUrl);

            // If image upload is successful, attach image URL to formData
            const finalFormData = {
                ...formData,
                image: imageUrl,
            };

            // Now post the formData with the uploaded image URL
            await axios.post('https://news-server-lilac.vercel.app/breakingnewsen', finalFormData)
                .then(response => {
                    if (response.data.insertedId) {
                        // Reset the form and show success message
                        toast.success('News added successfully!');
                        setFormData({
                            newsNumber: '',
                            title: '',
                            category: 'Sports',
                            categoryBn: '',
                            short_description: '',
                            long_description: '',
                            date: '',
                            image: null
                        });
                    }
                });
        } catch (error) {
            console.error('Error uploading image or submitting form:', error);
        }
    };
    return (
        <div className="bg-base-300 py-10">  
           <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Add New News</h2>
            <form onSubmit={handleSubmit}>
                {/* News Number */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">News Number</label>
                    <input
                        type="text"
                        name="newsNumber"
                        value={formData.newsNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter news number"
                        required
                    />
                </div>

                {/* Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter news title"
                        required
                    />
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Category in Bangla */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Category (Bangla)</label>
                    <input
                        type="text"
                        name="categoryBn"
                        value={formData.categoryBn}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter category in Bangla"
                        
                    />
                </div>

                {/* Short Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Short Description</label>
                    <textarea
                        name="short_description"
                        value={formData.short_description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a short description"
                        required
                    />
                </div>

                {/* Long Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Long Description</label>
                    <textarea
                        name="long_description"
                        value={formData.long_description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a long description"
                        rows="5"
                        required
                    />
                </div>

                {/* Date */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
                    >
                        Submit Breaking News (EN)
                    </button>
                    
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddNewsBrkEn;