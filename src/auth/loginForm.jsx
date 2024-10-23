import React from "react";
import { auth } from "../Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaRunning } from 'react-icons/fa';
import { signInWithGoogle } from '../Firebase/Firebase';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    

    const handleGoogleSignIn = () => {
        let uid = localStorage.getItem("user")
        signInWithGoogle()
            .then(() => {
                navigate("/Simpleloder")
            // if(uid !== null ){;}
            // else(navigate("/Signup") )
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const navigate = useNavigate();

    useEffect(() => {
        let userId = localStorage.getItem("user")
        console.log("TCL: login -> userId", userId)
        if (userId !== null) {
            navigate("/Index");
        } else {
            navigate("/Login");
        }
    }, [])
    
    const [Email, setEmail] = useState("");
const [password, setPassword] = useState("");
    
const loginToDatabase = () => {
        console.log(password); 

        if (Email != "" && password != "") {

            signInWithEmailAndPassword(auth, Email, password)
                .then((userCredential) => {
                    const uid = userCredential.user.uid
                    console.log("uid localStorage mai gayi", uid)
                    localStorage.setItem("user", uid)

                    console.log(userCredential)
                    
                    navigate("/Index");
                    setEmail("");
                    setPassword("");

                })
                .catch((error) => {
                    alert(error.message);
                    setIsloading(false)
                });
        } else {
            alert("enter fields")
        }
    };
    


    return (
        <div className="min-h-screen bg-gray-500 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <FaRunning className="text-4xl text-blue-600" />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Log In to Your Sports Account
                </h2>

                <form className="space-y-4" >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            autoComplete="name"
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                             autoComplete="password"
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        onSubmit={loginToDatabase}
                    >
                        Log In
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-red-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>

                <div className="mt-6 flex justify-center">
                    <img
                        src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                        alt="Google Sign In"
                        className="w-40 h-auto cursor-pointer"
                        onClick={handleGoogleSignIn} // Google sign-in via image
                    />
                </div>
            </div>
        </div>
    );
}
