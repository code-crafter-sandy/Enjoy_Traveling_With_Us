

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { allbooking } from  '../services/admin';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Bookings() {
  const [booking, setBooking] = useState([]); 
  const navigate = useNavigate();

  if(sessionStorage.getItem("email")==null){

    navigate("/login");
}

  useEffect(() => {
    async function fetchBookings() {
      const response = await allbooking(); 
      if (response.status === "error") {
        toast.error("Failed to fetch booking data"); 
      } else {
        console.log(response)
        setBooking(response); 
      }
    }
    fetchBookings();
  }, []);


    
    return (
        <div>
              <Navbar/>
        <h2 className="page-header">Bookings</h2>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Bus Name</th>
                <th>Bus Number</th>
                <th>Bus rent</th>
                <th>Booking Date</th>
            </tr>
        </thead>
        <tbody>
           {booking.map((book,index)=>{
            return <tr>
                <td>{index+1}</td>
                <td>{book.user["firstName"]}</td>
                <td>{book.bus["busName"]}</td>
                <td>{book.bus["id"]}</td>
                
                
                <td>{book.bus["farePerSeat"]}</td>
                <td>{book.bus["createdOn"]}</td>
            </tr>
           })}
        </tbody>


        </table>
        </div>
    )
}


export default Bookings
