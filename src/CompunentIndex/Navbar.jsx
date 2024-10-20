import '../routes/Index'; // Import Tailwind CSS first

import logo from '../assets/logo/logoRed.png'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export  default function Component() {
 

    const as = () => {
      navigate("/Profilemaking");
     
    }
    const ca = () => {
      navigate("/Cricket");
     
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
    <Navbar fluid rounded className="bg-transparent  fixed z-20 w-full">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className=" h-[10vw] sm:h-[10vw]" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div>

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={as}>Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
          </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:bg-black bg-transparent  rounded-3xl backdrop-blur-lg md:backdrop-blur-none px-4 text-center">
        <Navbar.Link href="/" className=' md:text-white md:hover:text-red-500 rounded-tl-full  hover:bg-transparen  bg-gray-600   font-semibold text-2xl' active>
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
