import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Namecontext } from "../App";

function Previous() {
  const { userList } = useContext(Namecontext);
  const [showPopup, setShowPopup] = useState(false);
  const [bookings, setBookings] = useState([]);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (userList._id) {
      const getBook = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/User/GetOrders/${userList._id}`);
          console.log("Previous Bookings Response:", response.data);

          if (Array.isArray(response.data) && response.data.length > 0) {
            setBookings(response.data);
          } else {
            setBookings([]);
            console.log("No previous bookings found for the user.");
          }
        } catch (error) {
          console.error("Error Fetching Previous bookings", error);
        }
      };
      getBook();
    } else {
      console.log("User ID not available");
    }
  }, [userList._id]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const deleteItem = async (bookingId) => {
    if (!bookingId) {
      console.error("User ID is not available.");
      alert("User added item is Deleted")
      return; 
    }

    try {
      await axios.delete(`http://localhost:3001/User/DeleteOrder/${userList._id}/${bookingId}`);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== bookingId));
      console.log(`Booking with ID ${bookingId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting booking", error);
    }
  };

  return (
    <div>
      <div className="ml-96">
        <button onClick={handleClick} className="px-3 py-1 ml-80 bg-[#EC9C1F] hover:bg-gray-600 text-white font-normal transition duration-300 ">
          View
        </button>
      </div>

      {showPopup && bookings.length > 0 && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
            <button onClick={handleClose} className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">X</button>
            <h2 className="text-xl font-bold mb-4">Previous Bookings</h2>
            <div className="overflow-y-auto max-h-64">
              {bookings.map((booking) => (
                <div key={booking._id} className="mb-4">
                  <p><strong>BookId:</strong> {booking.bookid || "No available BookId"}</p>
                  <p><strong>Size:</strong> {booking.size || "No description available"}</p>
                  <p><strong>Price:</strong> {booking.price || "Price not available"}</p>
                  <p><strong>Date:</strong> {booking.date || "No Date"}</p>
                  <p><strong>Quantity:</strong> {booking.quantity || "No Quantity"}</p>
                  <button onClick={() => deleteItem(booking._id)} className="px-3 py-1 ml-32 bg-[#EC9C1F] hover:bg-gray-600 text-white font-normal transition duration-300 mt-5">
                    Delete
                  </button>
                  <hr className="my-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showPopup && bookings.length === 0 && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
            <button onClick={handleClose} className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">X</button>
            <h2 className="text-xl font-bold mb-4">No Previous Bookings</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Previous;
