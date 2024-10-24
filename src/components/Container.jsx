import { herobg } from "../data"
import pic10 from "../assests/pic10.webp"
function Container()
{
    return(<div>
        <div className="ml-96">
        <h1 className="p-5  mt-12 -ml-20 text-6xl font-bold text-green-900">Science Behind Femi</h1>
        </div>
        <p className="ml-80 px-5 text-xl">Experience our Difference:Unmatched Quality and Innovation</p>
        <div className="flex flex-row mt-20 gap-10 ml-8">
            {
                herobg.map(function(item,index){
                    return <div key={index} className="flex flex-col gap-12">
                        <img src={item.imageSrc} alt="" className="w-40 h-36"/>
                        <div className="leading-relaxed">
                        <p className="text-sm">{item.desc}<br/>{item.desc1}</p>
                        </div>
                        
                    </div>
                })
            }
        </div>
        <div className="flex flex-row">
            <img src={pic10} alt="" className="w-2/4 h-2/4 mt-16"/>
            <div className="bg-red-900 w-2/4  mt-16">
              <h2 className="text-6xl ml-16 mt-12 font-bold text-[rgb(236,156,31)]">You Deserve <br/> The Best</h2>
              <p className="ml-16 mt-6 font-normal text-[#EC9C1F] leading-7">Femi9’s products include high quality, ultra-thin daily <br/>
                wear pads for women. The natural, comfortable, and <br/>
                breathable pads are made by women for women, and <br/>
                offer complete period protection, under any <br/>
                circumstance.</p>
            <button
          className="px-8 py-3 ml-16 bg-[#EC9C1F] hover:bg-gray-600 text-white font-normal  transition duration-300 mt-3"
        >
          Shop Now
        </button>
            </div>
        </div>

    </div>)
}
export default Container