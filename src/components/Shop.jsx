import React, { useState, useContext, useEffect } from "react";
import pic25 from "../assests/pic25.webp"; 
import { mini } from "../data";
import Navbar from "./Navbar";
import Detail from "./Detail";
import { Namecontext } from "../App";
import axios from "axios";
import Previous from "./Previous";

function Shop() {
    const { sizes, selectedSize, setSelectedSize,userList,setUserList } = useContext(Namecontext);
    const [showDropdown, setShowDropdown] = useState(false); 
    const [quantity, setQuantity] = useState(1); 
    const [totalPrice, setTotalPrice] = useState(0);
    const [showPopup, setShowPopup] = useState(false); 
    const [address, setAddress] = useState(""); 
    const [date,setDate]= useState();
    const [bookid,setBookId]= useState(null);

    useEffect(() => {
        if (selectedSize) {
            setQuantity(selectedSize.quantity || 1);
        }
    }, [selectedSize]);

    useEffect(() => {
        if (selectedSize) {
            const price = selectedSize.price ? parseFloat(selectedSize.price) : 0; 
            setTotalPrice(price * quantity); 
        }
    }, [quantity, selectedSize]);

    const handleSelect = (size) => {
        setSelectedSize(size);
        setShowDropdown(false);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value); 
      };
    
    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setSelectedSize({ ...selectedSize, quantity: newQuantity });
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setSelectedSize({ ...selectedSize, quantity: newQuantity });
        }
    };

    const handleAdd = () => {
        const orderData = {
            price: totalPrice, 
            quantity: quantity,
            size: selectedSize.label,
            address: address,
            userName:userList.userName,
            emailId:userList.emailId,
            userId:userList._id,
            phoneNumber:userList.phoneNumber,
            date:date,
            bookid:bookid
        };

        axios.post("http://localhost:3001/User/order", orderData)
            .then((response) => {
                console.log(response.data, "Order created successfully");
                setUserList((prevList) => [{ ...prevList }, response.data]);
                setSelectedSize(response.data);
                setShowPopup(false);                
                setAddress("");
                setBookId();
                alert("ok")
            })
            .catch((error) => {
                console.error("Error creating order:", error);
            });
    };

    return (
        <div className="bg-[#FFFFE4]">
            <div className="-mt-44 absolute">
                <Navbar />
            </div>
            <div className="bg-[#FFFFE4]">
                <div className="mt-40 ml-24 bg-[#FFFFE4]">
                    <img src={pic25} alt="Femi Anion" className="w-96 h-96 rounded-sm bg-[#FFFFE4]" />
                </div>

                <div className="ml-52 -mt-80 leading-10 ]">
                    <h1 className="ml-80 bg-[#FFFFE4] text-6xl font-bold text-green-900">Femi Anion</h1>

                    <div className="ml-80 mt-4">
                        <p>Price:</p>
                        <p className="ml-24 -mt-10 font-bold text-[#EC9C1F]">
                            {totalPrice ? `${totalPrice.toFixed(2)}` : "Select a size"}
                        </p>
                    </div>

                    <div className="ml-80 mt-4 flex items-center">
                        <p className="mr-2">{selectedSize ? selectedSize.label : "Size"}</p>
                        <div className="relative">
                            <input
                                type="text"
                                value={selectedSize ? `${selectedSize.label} - ${selectedSize.description}` : ""}
                                onClick={() => setShowDropdown(!showDropdown)}
                                readOnly
                                className="border border-gray-300 rounded-md px-3 py-1 cursor-pointer ml-12"
                                placeholder="Select size"
                            />
                            {showDropdown && (
                                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    {sizes.map((size) => (
                                        <div
                                            key={size.id}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleSelect(size)}
                                        >
                                            {size.label} - {size.description}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="ml-80 mt-5">
                        <p>Vendor:</p>
                        <p className="ml-24 -mt-10 font-normal">Femi</p>
                    </div>
                    <div className="ml-80 mt-3">
                        <p>Type:</p>
                        <p className="ml-24 -mt-10">N</p>
                    </div>

                    <div className="ml-80 mt-3">
                        <p>Quantity:</p>
                        <div className="ml-12 -mt-8 flex items-center">
                            <button
                                onClick={decreaseQuantity}
                                className="border border-gray-400 px-3 py-1 text-xl ml-8"
                            >
                                -
                            </button>

                            <span className="mx-4 text-xl">{quantity}</span>

                            <button
                                onClick={increaseQuantity}
                                className="border border-gray-400 px-2 py-1 text-xl"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button 
                        onClick={() => setShowPopup(true)} 
                        className="px-3 py-1 ml-80 bg-[#EC9C1F] hover:bg-gray-600 text-white font-normal transition duration-300 mt-5"
                    >
                        Open
                    </button>

                    {showPopup && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-white p-5 rounded-md shadow-lg">
                                <h2 className="text-lg font-bold mb-4">Enter Address</h2>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Address"
                                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                        />
                         <label className="block mb-2">
                     <span className="text-gray-700">Date:</span>
                     <input
                     type="date"
                     name="date"
                     value={date} 
                     onChange={handleDateChange} 
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </label>

                    <button 
                        onClick={handleAdd} 
                                    className="px-3 py-1 bg-[#EC9C1F] hover:bg-gray-600 text-white font-normal transition duration-300"
                                >
                                    Add item
                                </button>
                                <button 
                                    onClick={() => setShowPopup(false)} 
                                    className="ml-2 px-3 py-1 bg-gray-300 hover:bg-gray-400 text-black font-normal transition duration-300"
                                >
                                    Cancel
                    </button>
                </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-row gap-6 ml-24 -mt-20">
                    {mini.map((item) => (
                        <div key={item.id}>
                            <img src={item.imageSrc} alt={item.name || "Mini item"} className="w-28 h-24" />
                        </div> 
                    ))}
                </div>
                <Previous/>
                <Detail />
            </div>
        </div>
    );
}

export default Shop;