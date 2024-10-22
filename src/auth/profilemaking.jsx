import React, { useState,useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { collection, addDoc, getDocs} from "firebase/firestore"
import {db, storage} from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
import looder from '../assets/loder.gif'
const Profilemaking = () => {
    const [data, setData] = useState([]);
    const [hide , sethide] = useState("hidden")
const [show , setshow] = useState("block")

    const fetchDataa = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "ProfileData"));
            const dataArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(dataArray);
           
       
       
      } catch (error) {
        console.error("Error fetching data: ", error);
      }

     
    };
    // const check = ()=>{
    //   
    // }    
    const check = setTimeout(() => {
        timer()
      }, .500);

      const timer =()=>{ 
        let email = localStorage.getItem("email")
        data.forEach((item) => {
            
            if (email === item.email) {
                alert("You Already Make Profile")
                navigate("/Index");
                
            }
            
          }
         
        )
        
        ;}
    
        
const [pic , setPic] = useState({})
const navigate = useNavigate();


useEffect(() => {
    
    fetchDataa()
        
     
  
    }, []);


// const check = ()=>{
   

//     // console.log("TCL: login -> userId", userId)
   
// }
const [formData, setFormData] = useState({
    Username: "",
    // email: "",
    image: null,
  });
  
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };
  
  const handleImageChange = (e) => {

    setImage(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
        
    var ul = e.target.files[0];
    setPic(ul) // Storing selected file for preview/upload
    console.log(pic);
    
    setFormData({
      ...formData,
      image : e.target.files[0]
    });
  };
  const storageRef = ref(storage, "ProfilePic/"+pic.name)
  
    const [image, setImage] = useState(null);

    const handleSaveProfile = (e) => {
        sethide("block")
        setshow("hidden")
        e.preventDefault();
        console.log("Form Data: ", formData);
        uploadBytes(storageRef, pic).then((snapshot) => {
          console.log('Uploaded a blob or file!');
          getDownloadURL(storageRef)
        .then((url) => {
            console.log("pic url", url);
  let email = localStorage.getItem("email")

            try {
              const docRef =  addDoc(collection(db, "ProfileData"), {
                  name: formData.Username,
                  Url : url,
                  email : email,
                
                });
                console.log("Document written with ID: ", docRef.id);
                fetchDataa()
                sethide("hidden")
                setshow("block")

                
               
              } catch (e) {
                console.error("Error adding document: ", e);
              }
      
        }).catch((err) => console.log(err));
        
        }
        
      );

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
                            className="w-28 h-28 rounded-full object-cover"
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
                        <label htmlFor='img' className="block text-sm font-medium text-gray-600">
                            Upload Profile Picture
                        </label>
                        <input
                        id='img'
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          
                        />
                    </div>

                    <div>
                        <label htmlFor='name' className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            autoComplete="name"
                            id='name'
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            name="Username"
                            value={formData.Username}
                          
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* <div>
                        <label htmlFor='email' className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            autoComplete="email"
                            id='email'
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            name="email"
                            value={formData.email}
                      
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div> */}

                 

<button
           
            type="submit"
            className="w-full flex justify-center items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <img src={looder} className={`rounded-full ${hide}`} width="40px" />
            <p className={` ${show}`}>
            Submit

            </p>
          </button>
                </form>
            </div>
        </div>
    );
};

export default Profilemaking;
