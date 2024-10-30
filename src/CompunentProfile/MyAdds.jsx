import {React, useState, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../Firebase/Firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default function MyAdds(){
    const [data, setData] = useState([]);
    let email = localStorage.getItem("email")
    // const deleteFieldInDocument = async (id) => {
    //     await deleteDoc(doc(db, "product", "MR7uARCHrk2rme4WEHRK"));
    //   };

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "product"));
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
  

    return(
        <div>
          <div className="flex justify-center items-center  h-20 mb-6">
               <h1 className="text-blod text-4xl font-serif">
                    YOUR ADS 
               </h1>
          </div>

<div className="h-10 w-full hidden p-2 my-4 bg-gray-300 justify-between sm:flex items-center" >
                   <div className="h-40 w-[25%] flex justify-center items-center ">
                       
                   </div>
                   <div className="h-40 w-[25%] flex justify-center items-center">
                        <h1 className="font-bold font-serif">
                            Product Name
                        </h1>
                   </div>
                   <div className="h-40 w-[25%] flex justify-center items-center">
                        <h1 className="font-bold font-serif">
                            Product Price
                        </h1>
                   </div>
                   <div className="h-40 w-[25%] flex justify-center items-center">
                       
                       <h1 className="font-bold font-serif">
                        Want To Delete
                         </h1>
                   </div>

                    </div>

                    
                    <div className="max-h-[80vh] overflow-scroll">


            {data.map(item => { 
             
             if (item.email == email) {
               
               
               return ( 

                    <div className="h-auto w-full p-2 my-4 bg-gray-300 flex flex-col sm:flex-row justify-between items-center" key={item.id}>
                    <div className="h-40 w-full sm:w-[25%] mb-4 sm:mb-0">
                      <img src={item.Url} alt={item.name} className="h-[100%] w-full sm:w-auto rounded-3xl object-cover" />
                    </div>
                    
                    <div className="h-auto w-full sm:w-[25%] flex justify-center items-center mb-4 sm:mb-0">
                      <h1 className="text-center sm:text-left">
                        {item.name}
                      </h1>
                    </div>
                  
                    <div className="h-auto w-full sm:w-[25%] flex justify-center items-center mb-4 sm:mb-0">
                      <h1 className="text-center sm:text-left">
                        $ {item.price}
                      </h1>
                    </div>
                  
                    <div className="h-auto w-full sm:w-[25%] flex justify-center items-center">
                      <button
                        className="bg-red-700 p-2 rounded-md text-white hover:bg-red-950"
                        onClick={(e) => {
                          const confirmDelete = window.confirm("Are you sure you want to delete this item?");
                          if (confirmDelete) {
                            deleteDoc(doc(db, "product", item.id));
                            fetchData()
                          } else {
                            alert("Action cancelled!");
                          }
                        }}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                  
 
)
}
}

)}
</div>

        </div>
    )
}


// <div className="h-40 w-full p-2 my-4 bg-gray-300 flex justify-between items-center" key={item.id}>
//                    <div className="h-40 w-[25%] ">
//                         <img src={item.Url} alt="" className="h-[100%] rounded-3xl" />
//                    </div>
//                    <div className="h-40 w-[25%] flex justify-center items-center">
//                         <h1>
//                             {item.name}
//                         </h1>
//                    </div>
//                    <div className="h-40 w-[25%] flex justify-center items-center">
//                         <h1>
//                            $ {item.price}
//                         </h1>
//                    </div>
//                    <div className="h-40 w-[25%] flex justify-center items-center">
//                         <button className="bg-red-700 p-2 rounded-md text-white hover:bg-red-950"
//                          onClick={(e) => {
//                              const confirmDelete = window.confirm("Are you sure you want to delete this item?");
//                              if (confirmDelete) {
//                                   deleteDoc(doc(db, "product", item.id));
//                                   fetchData();
//                              } else {
                            
//                                alert("Action cancelled!");
//                              }
//                         }}>
//                             DELETE
//                         </button>
//                    </div>

//                     </div>