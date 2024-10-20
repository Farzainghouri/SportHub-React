// Signup.jsx
import React, { useState } from "react";
import { auth, db } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore";
import { FaRunning } from 'react-icons/fa';
import { signInWithGoogle } from '../Firebase/Firebase';

export default function Signup() {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
<<<<<<< HEAD
                navigate("/Index");
=======
                navigate("/profilemaking");
>>>>>>> 23146aba9d27b05daf76904865aa74018c7da481
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const signUpDatabase = () => {
        if (Email != "" && password != "") {
            createUserWithEmailAndPassword(auth, Email, password)
                .then(async (res) => {
                    setIsloading(true);
                    const uid = res.user.uid
                    localStorage.setItem("user", uid)
                    setEmail("");
                    setPassword("");
                    const userData = { Email, uid, name };
                    console.log(" userData set hai", userData)
                    await setDoc(doc(db, "users", uid), userData);
                    window.location.href = "/login";

                })
                .catch((error) => {
                    alert(error.message);
                    setIsloading(false)
                });
        } else {
            alert("Enter values")
        }

    }

    return (
        <div className="min-h-screen bg-gray-500 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <FaRunning className="text-4xl text-blue-600" />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Create Your Sports Account
                </h2>

                <form className="space-y-4">
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
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        onClick={signUpDatabase}
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-red-500 hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>

                <div className="mt-6 flex justify-center">
                    <img
                        src="https://i.imgur.com/yczPzHD.png"
                        alt="Google Sign In"
                        className="w-40 h-auto cursor-pointer"
                        onClick={handleGoogleSignIn} // Add the click event directly to the image
                    />
                </div>
            </div>
        </div>
    );
}
