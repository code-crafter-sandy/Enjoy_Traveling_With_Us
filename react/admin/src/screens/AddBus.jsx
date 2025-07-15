import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { addbus1 } from '../services/admin'


function AddBus() {
    const [busName, setBusName] = useState('');
    const [driverName, setDriverName] = useState('');
    const [busType, setBusType] = useState('');
    const [capacity, setCapacity] = useState('');
    
    const navigate = useNavigate();


    if(sessionStorage.getItem("email")==null){

        navigate("/login");
    }


    const onSave = async () => {
        if (!busName || !driverName || !busType || !capacity) {
            toast.error("All fields are required!");
            return;
        }

        // const busData = {
        //     busName,
        //     driverName, 
        //     busType,
        //     capacity
        // };




        const result = await addbus1(busName, driverName, busType, capacity);
        console.log(result);
    
        if (result.msg === "success") {
            toast.success("Bus added successfully!");
            navigate('/Bus');
        } else {
            toast.error(result.error || "Failed to add bus!");
        }

        // try {
        //     const response = await axios.post("http://localhost:8080/bus/add", busData);
        //     if (response.status === 201) {
        //         toast.success("Bus added successfully!");
        //         navigate('/Bus');
        //     } else {
        //         toast.error("Failed to add bus!");
        //     }
        // } catch (error) {
        //     console.error("Error:", error);
        //     toast.error("Something went wrong!");
        // }
    };

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-lg" style={{ width: "30rem" }}>
                    <h2 className="text-center mb-4">Add Bus</h2>
                    <div className="form">
                        <div className="mb-3">
                            <label>Bus Name</label>
                            <input 
                                onChange={(e) => setBusName(e.target.value)} 
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Driver Name</label>
                            <input 
                                onChange={(e) => setDriverName(e.target.value)} 
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Bus Type</label>
                            <input 
                                onChange={(e) => setBusType(e.target.value)} 
                                type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Capacity</label>
                            <input 
                                onChange={(e) => setCapacity(e.target.value)} 
                                type="number" className="form-control" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button onClick={onSave} className="btn btn-success">Save</button>
                            <Link to='/Bus' className="btn btn-danger">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBus;
