import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import BusData from "../dummy/bus.json"
import { useState } from "react"
import { toast } from "react-toastify";
import { allbus } from '../services/admin' // Import the function
function Bus1(){

    const [busList, setBusList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBusData();
    }, []);

    const fetchBusData = async () => {
        const result = await allbus();
        console.log(result);

        if (result['status'] === "error") {
            toast.error(result['error']);
        } else {
            setBusList(result);
            toast.success("Bus data loaded successfully");
        }
        setLoading(false);
    };

    const onDelete = (index) => {
        const updatedBusList = [...busList];
        updatedBusList.splice(index, 1);
        setBusList(updatedBusList);
        toast.success("Bus deleted successfully");
    };


    return (
        <div>
              <Navbar/>
        <h2 className="page-header">Bus</h2>
        <Link to="/AddBus" className="btn btn-primary">Add Bus</Link>
        {Bus.length==0 &&(
        <h3 className="mt-6" style={{textAlign:"center"}}>there are no buses at the moment.please use add bus button to add one</h3>
    )}
    {Bus.length>0 &&(

        <table className="table table-striped mt-5">
            <thead>
                <tr>
                    <th>#</th>
                    <th>bustype</th>
                    <th>woner</th>
                    <th>desc</th>
                </tr>
            </thead>
            <tbody>
                {
                    Bus.map((bus,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{bus["bustype"]}</td>
                            <td>{bus["woner"]}</td>
                            <td>{bus["desc"]}</td>
                            <td>
                                <button onClick={()=>{onDelete(index)}} className="btn btn-danger bt-sm me-2" >Delete</button></td>   <td>
                                <button className="btn btn-primary bt-sm " >Details</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>

        </table>)}
        </div>
    )
}   


export default Bus1