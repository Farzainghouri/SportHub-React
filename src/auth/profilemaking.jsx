import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Profilemaking = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSaveProfile = (e) => {
        e.preventDefault();
        // Add your save logic here (e.g., save to Firebase or backend)
        alert('Profile saved successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    {image ? (
                        <img
                            src={image}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    ) : (
                        <FaUserCircle className="text-7xl text-gray-400" />
                    )}
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Your Profile
                </h2>

                <form className="space-y-4" onSubmit={handleSaveProfile}>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Upload Profile Picture
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Bio</label>
                        <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about yourself"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                    >
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profilemaking;
