import { product,desc1 } from "../data";
import pic11 from "../assests/pic11.webp"
import Footer from "./Footer";
function Detail() {
    return (
        <div className="w-full h-full">
            <div className="bg-[#EC9C1F] w-56 h-12  py-1 mt-5 ml-24 rounded-t-lg ">
            <h1 className=" ml-3  text-xl font-semibold ">
                Product Description
            </h1>
            </div>

            
            <div className="w-4/5 h-full bg-[#38395C] ml-24 mb-20 -mt-2 rounded-sm ">
            
                {
                    product.map(function(item,index){
                        return <div key={index}>
                            <li className="ml-12 mt-2 text-white leading-8 font-semibold ">{item.desc}</li>
                        </div>
                    })
                }
            
            <img src={pic11} alt="" className="w-3/4 ml-16 mt-8 "/>

            <h1 className="mt-6 ml-16 font-semibold text-white text-xl mb-2 ">More Information</h1>
            <div>
                {
                    desc1.map(function(item,index){
                        return <li key={index} className="ml-12 leading-8 font-semibold text-white">{item.desc}</li>
                    })
                }
            </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Detail;
