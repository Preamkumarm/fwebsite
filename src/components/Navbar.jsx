import React, { useState, useEffect } from 'react';
import logo from "../assests/logo.avif";
import { signOut } from "firebase/auth";
import auth from "../config";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [navBg, setNavBg] = useState('transparent'); 
  const navigate=useNavigate()

  const handleLogout=()=>{
    signOut(auth).then(()=>{
      navigate("/")
    })
  }
 
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBg('bg-[#FFFFE4]'); 
    } else {
      setNavBg('transparent'); 
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`fixed z-50 w-screen px-10 md:px-16 lg:px-20 justify-center ${navBg} transition duration-300`}>
        <div className="hidden md:flex w-full h-full items-center justify-between px-4 md:px-0 max-w-6xl mx-auto">
          <div className="mr-auto">
            <div className="-ml-20 relative">
              <img src={logo} alt="" className="w-36 ml-20 mt-6 " />
            </div>
          </div>

          {/* Uncomment to add navigation links */}
          {/* <div className="flex items-center gap-6 mr-12 mb-5">
            <h4 className="cursor-pointer hover:text-blue-600 text-[#000] font-semibold">
              <Link to={"/home"}>Home</Link> 
            </h4>
            <h5 className="cursor-pointer hover:text-orange-500 text-[#000] font-semibold">
              <Link to={"/aboutus"}>About us</Link>  
            </h5>
            <h5 className="cursor-pointer hover:text-orange-500 text-[#000] font-semibold">
              <Link to={"/contact"}>Contact</Link>
            </h5>
          </div> */}
          <button onClick={handleLogout} className="p-2 rounded-lg text-center  bg-green-900 hover:bg-gray-600 text-white font-semibold  transition duration-300">LogOut</button>
        </div>

      </header>
    </div>
  );
}

export default Navbar;
