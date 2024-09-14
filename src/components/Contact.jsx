import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendToWhatsApp = () => {
        const { name, email, whatsapp, message } = formData;
        const yourWhatsAppNumber = "8801886969684"; // Replace this with your WhatsApp number
        const whatsappURL = `https://api.whatsapp.com/send?phone=${yourWhatsAppNumber}&text=Hello,%0A%0AMy%20Name:%20${name}%0AEmail:%20${email}%0AWhatsApp:%20${whatsapp}%0AMessage:%20${message}%0A%0AThank%20You!`;
        
        window.open(whatsappURL, '_blank');
    };
    

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
                <form className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* WhatsApp Number Field */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp">
                            WhatsApp Number
                        </label>
                        <input
                            type="text"
                            name="whatsapp"
                            placeholder="Your WhatsApp Number"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 h-32 resize-none"
                        ></textarea>
                    </div>

                    {/* Send Button */}
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={sendToWhatsApp}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200">
                            Send to WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
