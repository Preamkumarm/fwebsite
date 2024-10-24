import bg2 from "../assests/bg-2.webp";

function Aboutus() {
  return (
    <div className="bg-[#FFFFE4]">
      <div className="mb-4">
        <img src={bg2} alt="" className="w-3/6 h-96 ml-20 mt-20 mb-2" />
        <div className="ml-96">
          <h1 className="ml-80 -mt-80 text-6xl font-bold text-green-900">ABOUT Femi</h1>
        </div>
        <div className="ml-96">
          <p className="ml-80 mt-4 text-lg font-normal p-2 leading-relaxed">
            Designed by Women, for Women. To provide <br />
            women with sustainable, comfortable, and reliable <br />
            menstrual hygiene solutions. We are driven to <br />
            promote empowerment, eco-consciousness to make <br />
            women feel comfortable and confident each day.
          </p>
        </div>
        <div className="ml-96 mt-3">
          <button
            className="px-7 py-3 ml-80 bg-green-900 hover:bg-gray-600 border border-none text-yellow-300 font-semibold rounded transition duration-300"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
