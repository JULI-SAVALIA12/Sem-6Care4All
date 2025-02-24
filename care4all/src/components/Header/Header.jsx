import React, { useEffect, useState } from 'react'
import '../../styles/style.scss'
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import logo from '../../assets/images/logo.png';
const Header = () => {

  const [scroll,setScroll] = useState(false)//jyare false hoi tyare header transparent rey 
  const [showServices, setShowServices] = useState(false); 
  const services = [
    { name: "Child Care", path: "/Childcare" },
    { name: "Senior Care", path: "/Seniorcare" },
    { name: "Pet Care", path: "/Petcare" },
    { name: "Personal Tutoring", path: "/personal-tutoring" },
    { name: "Physiotherapy", path: "/physiotherapy" },
    { name: "Housekeeping", path: "/housekeeping" }
  ];

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 60){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <>
      <header className={`bg-transparent py-7 px-7 sticky z-50 w-100 top-0 transition-all duration-300 ${scroll ? 'backdrop-blur-md bg-opacity-75 bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between col-12">
                <div className="logo font-serif font-bold main-text col-4">
                  <a href="#">
                    <img src={logo} className='h-20'></img>
                  </a>
                </div>
                <div className='col-6'>
                    <ul className="flex flex-wrap w-100 justify-between m-0 items-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">AboutUs</Link></li>
                        <li><Link to="/contactus">ContactUs</Link></li>
                        <li>
                            <a href="#">
                                <button className='rounded-pill px-4 py-2 accent-bg text-white'>Join Now</button>
                            </a>
                        </li>
                        <li className='relative'>
                        <button>
                        <CiMenuKebab  onClick={() => setShowServices(!showServices)}
                              className="p-1 hover:bg-gray-100 rounded-full text-4xl"/>
                        </button>
                        {showServices && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                {services.map((service, index) => (
                                  <Link
                                    key={index}
                                    to={service.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                        )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
