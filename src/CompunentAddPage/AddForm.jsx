import React, { useState } from "react";
import { collection, addDoc} from "firebase/firestore"
import {db, storage} from "../Firebase/Firebase";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
const ProductForm = () => {
//   if (category.value !== "select catagory") {
  
    
// }





const [Add , setAddpic] = useState({})

const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    email: "",
    price: "",
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
     var ul = e.target.files[0];
     setAddpic(ul) // Storing selected file for preview/upload
    
    setFormData({
      ...formData,
      image : e.target.files[0]
    });
  };
  const storageRef = ref(storage, "img/"+Add.name)
  
  


  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    uploadBytes(storageRef, Add).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(storageRef)
    .then((url) => {
        console.log("pic url", url);
        try {
          const docRef =  addDoc(collection(db, "product"), {
              name: formData.title,
              price:  formData.price ,
              Url : url,
              email : formData.email,
              despt: formData.description,
              cata : formData.category,
            });
            console.log("Document written with ID: ", docRef.id);
            
           
          } catch (e) {
            console.error("Error adding document: ", e);
          }
  
    }).catch((err) => console.log(err));
    
    }
    
  );


    // Here you can further process the data, e.g., show an alert or preview
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">

      {/* <input type="file" name="" id="" onChange={e => console.log(e.target.files[0])} /> */}
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Product Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            id="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product title"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Product Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            id="description"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Category Selector */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            id="category"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select category</option>
            <option value="cricket">cricket</option>
            <option value="football">football</option>
            <option value="basketball">basketball</option>
            <option value="hockey">hockey</option>
            <option value="tennis">tennis</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            autoComplete="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Image Selection */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            id="image"
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none"
            accept="image/*"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            id="price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
