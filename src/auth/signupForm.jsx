/// Signup.jsx
import React, { useState,useEffect } from 'react';
import { auth, db } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { doc,setDoc  } from "firebase/firestore";
import { FaRunning } from 'react-icons/fa';
import { signInWithGoogle } from '../Firebase/Firebase';
import { useNavigate } from "react-router-dom";

export default function Signup() {
    // useEffect(() => {
    //     let email = localStorage.getItem("email")
    //     // console.log("TCL: login -> userId", userId)
    //     if (email == null) {
    //         navigate("/Profilemaking");
    //     }
    // }, [])
    
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/Profilemaking");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const signUpData = () => {
       
        if (Email != "" && password != "") {
            createUserWithEmailAndPassword(auth, Email, password)
                .then(async (res) => {
                    const uid = res.user.uid;
                    localStorage.setItem("user", uid);
                    setEmail("");
                    setPassword("");
                    const userData = { Email, uid, name };
                    await setDoc(doc(db, "users", name), userData);
                    setIsLoading(false);
                    navigate("/profilemaking");
                })
                .catch((error) => {
                    alert(error.message);
                    setIsLoading(false);
                });
        } else {
            alert("Enter values");
        }
    };

    return (
        <div className="min-h-screen bg-gray-500 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <FaRunning className="text-4xl text-blue-600" />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Create Your Sports Account
                </h2>

                <form className="space-y-4" onClick={handleGoogleSignIn}>
                    <div>
                        <label htmlFor='name' className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            autoComplete="name"
                            id='name'
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label htmlFor='email' className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            autoComplete="email"
                            id='email'
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor='pasrd' className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            autoComplete="password"
                            id='pasrd'
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
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing Up..." : "Sign Up"}
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