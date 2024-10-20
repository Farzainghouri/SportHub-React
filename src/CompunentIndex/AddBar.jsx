
import '../routes/Index'; // Import Tailwind CSS first
;
import SellLogo from '../assets/sell.jpg'
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export  default function Component() {
    const navigate = useNavigate();

    const ad = () =>{
        navigate("/Add");
    }

  return (
   <div className='w-full h-14 z-50 bottom-0 bg-white fixed'>
    <button onClick={ad} className='flex justify-center w-full'>
    
    <img src={SellLogo} alt="" className='h-16 absolute bottom-6  rounded-full'/>

    
    </button>
   </div>
  );
}
