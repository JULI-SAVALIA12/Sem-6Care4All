import React from 'react'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";


const Pincode = () => {
  return (
    <div>
        <Header />
        
        {/* Main pincode code section */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-24">
            <h1 className="text-2xl md:text-3xl font-bold main-text mb-8">
                Where do you need care?
            </h1>
            
            <div className="w-full max-w-md">
            <div className="mb-2 text-gray-600">Pincode code</div>
                <div className="flex justify-between items-center border rounded-lg text-xl focus:outline-none focus:border-[#2B3467] w-full p-3">
                    <input 
                        type="text"
                        className=""
                        placeholder="Enter Your Pincode"
                        maxLength={5}
                    />
                    <Link className=" text-gray-400">
                    <IoLocationOutline />
                    </Link>
                </div>
                
                <div className="text-gray-600 mt-2 text-sm">Allston, MA</div>
                
                <Link to="/childcareform" className="w-full block text-center btns border-green-600 border-3 rounded-full py-3 mt-6 text-lg font-medium">
                    Next
                </Link>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Pincode;
