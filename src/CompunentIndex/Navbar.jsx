import '../routes/Index'; // Import Tailwind CSS first
import React, { useEffect, useState } from "react";
import logo from '../assets/logo/logoRed.png'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import {db} from "../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { iterate } from 'localforage';
export  default function Component() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  const [UserName, setUsername] = useState(null);

  let email = localStorage.getItem("email")
  const fetching = async () => {
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
  
 
}
const check = setTimeout(() => {
  timer()
}, 1000);
const timer =()=>{ 
  let email = localStorage.getItem("email")
  data.forEach((item) => {
      
      if (email === item.email) {
        
        console.log("done");
        setImage(item.Url)
        setUsername(item.name)
          
      }
    });}
useEffect(() => {
  fetching();
  
}, []); // Delay the API call by 3 seconds
// useEffect(() => {

//   return () => clearTimeout(timer);
// }, []);

  const Dp = <FaUserCircle className="text-5xl text-gray-400" /> ;

    const as = () => {  
     
        navigate("/Profile");
      
     
    }
    const home = () => {
      navigate("/Index");
     
    }
    const ca = () => {
      navigate("/Cricket");
     
    }
    const logout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('email');
      
      navigate("/");
     
    }
    const ft = () => {
      navigate("/Football");
     
    }
    const bs = () => {
      navigate("/Basketball");
     
    }
    const ha = () => {
      navigate("/Hockey");
     
    }
    const ta = () => {
      navigate("/Tennis");
     
    }
    const navigate = useNavigate();

  return (
    <Navbar fluid rounded className="bg-transparent cursor-pointer  fixed z-20 w-full">
   
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className=" h-[10vw] sm:h-[10vw]" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div>

        <Dropdown
          arrowIcon={false}
          inline
          label={
            // <Avatar alt="User settings" img={Dp} rounded />
            image ? (
              <img
                  src={image}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
              />
          ) : (
              <FaUserCircle className="text-4xl text-gray-400" />
          )
          }
        >
          <Dropdown.Header>
            <span className="block text-lg uppercase">{UserName}</span>
            <span className="block truncate text-sm font-medium text-gray-400">{email}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={as}>Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
        </Dropdown>
          </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:bg-black bg-transparent  rounded-3xl backdrop-blur-lg md:backdrop-blur-none px-4 text-center">
        <Navbar.Link onClick={home}  className=' md:text-white md:hover:text-red-500 rounded-tl-full  hover:bg-transparen  bg-gray-600   font-semibold text-2xl' active>
          Home
        </Navbar.Link>
        <Navbar.Link onClick={ca}   className=' md:bg-transparent md:text-white md:hover:text-red-500 hover:text-red-600 text-white  bg-gray-600 hover:bg-gray-200 font-semibold text-2xl'>Cricket</Navbar.Link>
        <Navbar.Link onClick={ft} className=' md:bg-transparent md:text-white md:hover:text-red-500 hover:text-red-600 text-white bg-gray-600  hover:bg-gray-200 font-semibold text-2xl'>Football</Navbar.Link>
        <Navbar.Link onClick={bs} className=' md:bg-transparent md:text-white md:hover:text-red-500 hover:text-red-600 text-white  bg-gray-600 hover:bg-gray-200 font-semibold text-2xl'>Basketball</Navbar.Link>
        <Navbar.Link onClick={ha} className=' md:bg-transparent md:text-white md:hover:text-red-500 hover:text-red-600 text-white bg-gray-600 hover:bg-gray-200 font-semibold text-2xl'>Hockey</Navbar.Link>
        <Navbar.Link onClick={ta} className=' md:bg-transparent md:text-white md:hover:text-red-500 hover:text-red-600 text-white bg-gray-600 hover:bg-gray-200 font-semibold text-2xl rounded-bl-full	rounded-br-full	'>Tennis</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
