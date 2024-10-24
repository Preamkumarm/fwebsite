import logo from "../assests/logo.avif";
function Footer()
{
    return(<div>
        <div className="w-full h-5/6 bg-[#4F305C]">
            <div className="relative">
            <h1 className="ml-24 inline-block mt-20 font-bold text-4xl text-[#EC9C1F]">Contact us</h1>
            <div className="text-[#EC9C1F] leading-8">
                <p className="ml-24 mt-5 text-xl">Femi Health Care</p>
                <p className="ml-24 mt-1">222/1, Pavizham Nagar, <br/>
                    Thindal Post, Erode - <br/>
                    638012</p>
            </div>
            </div>

            <div>
            <div className="ml-96 relative">
              <img src={logo} alt="" className="w-36 ml-36 -mt-60  text-[#EC9C1F]" />
            </div>
            </div>

            <div className="ml-96">
             <div className="ml-96 text-xl text-[#EC9C1F] leading-8">
                <h1 className="ml-60 text-4xl font-bold">Info</h1>
                <div className="text-lg mt-4 leading-8">
                <p className="ml-60">About us</p>
                <p className="ml-60">Refund policy</p>
                <p className="ml-60">Privacy Policy</p>
                <p className="ml-60">Terms & Conditions</p>
                </div>
             </div>
            </div>  

            <div className="mt-10 ml-96 leading-1 text-[#EC9C1F]">
                <h1 className="ml-36 text-xl mb-3 ">Monday-Saturday</h1>
                <p className="ml-40 mb-6">10AM - 6PM</p>
                <p className="-ml-28 mb-3">Note - please do not make payment by scanning the OR code.In case of any queries,contact 1234567890</p>
                <p className="font-normal ">copyright &copy; 2021 All rights reserved | Made with ❤ Femi</p>
            </div>
        </div>
    </div>)
}
export default Footer