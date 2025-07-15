import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { allbus } from '../services/admin';
import { toast } from "react-toastify";
import { deleteBus } from '../services/admin';
import { useNavigate } from 'react-router-dom';

function Bus() {
    const [busList, setBusList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    if(sessionStorage.getItem("email")==null){

        navigate("/login");
    }

    useEffect(() => {
        fetchBusData();
    },[]);

    const fetchBusData = async () => {
        const result = await allbus();
       

        if (result['status'] === "error") {
            toast.error(result['error']);
        } else {
            setBusList(result);
            console.log(result);
            toast.success("Bus data loaded successfully");
        }
        setLoading(false);
    };

    const onDelete =async (index,id) => {
           await deleteBus(id);
        const updatedBusList = [...busList];
        updatedBusList.splice(index, 1);
        setBusList(updatedBusList);
        toast.success("Bus deleted successfully");
    };

    return (
        <div>
            <Navbar />
            <h2 className="page-header">Bus</h2>
            <Link to="/AddBus" className="btn btn-primary">Add Bus</Link>

            {loading && <h3 className="mt-6 text-center">Loading buses...</h3>}

            {!loading && busList.length === 0 && (
                <h3 className="mt-6 text-center">
                    There are no buses at the moment. Please use the "Add Bus" button to add one.
                </h3>
            )}

            {!loading && busList.length > 0 && (
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bus Type</th>
                            <th>DriverName</th>
                            <th>BusName</th>
                            <th>Seats</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {busList.map((bus, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{bus.busType}</td>
                                <td>{bus.driverName}</td>
                                <td>{bus.busName}</td>
                                <td>{bus.seats}</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(index,bus.id)}
                                        className="btn btn-danger btn-sm me-2"
                                    >
                                        Delete
                                    </button>
                                    <button className="btn btn-primary btn-sm">Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Bus;
