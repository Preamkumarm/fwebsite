import bg1 from "../assests/bg-1.webp";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import Categories from "./Categories";
import Container from "./Container";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {

  
  return (
    <div>
    <Navbar/>
    
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center bg-[#FFFFE4]"
      style={{ backgroundImage: `url(${bg1})` }} 
    >
      
      <div className="mt-96 -mr-96  bg-opacity-50 p-8 rounded-lg text-center">
        
        <button
          className="px-9 py-4 ml-24 bg-green-900 hover:bg-gray-600 text-white font-semibold rounded transition duration-300 relative"
        >
          <Link to={"/shop"}>Shop Now</Link>
        </button>
      </div>
    </div>
    <div>
<Aboutus/>
<Container/>
<Categories/>
<Footer/>
    </div>
    </div>
  );
}

export default Home;
