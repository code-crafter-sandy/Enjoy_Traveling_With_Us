import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"
import { useState } from "react"
function AddBus1(){


    const[desc ,setDesc]=useState('');
    const[woner ,setwoner]=useState('');
    const[bustype ,setBustype]=useState('');
    const[busname ,setBusName]=useState('');
    const[driverName ,setdriverName]=useState('');
    

    const navigate=useNavigate()

    const onSave=()=>{
        //Add validation 



        navigate('/Bus')
    }
    return (
        <div>
             <Navbar/>
        <h2 className="page-header">AddBus</h2>
        <div className="form">



        <div className="mb-3">
                <label htmlFor="">Bus Name</label>
                <input onChange={(e)=>setBusName(e.target.value)} type="text" className="form-control" />
            </div>

            
        <div className="mb-3">
                <label htmlFor="">Driver Name</label>
                <input onChange={(e)=>setdriverName(e.target.value)} type="text" className="form-control" />
            </div>




            <div className="mb-3">
                <label htmlFor="">Bus Type</label>
                <input onChange={(e)=>setBustype(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Description</label>
                <textarea onChange={(e)=>setDesc(e.target.value)} rows={5} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Owner</label>
                <textarea onChange={(e)=>setwoner(e.target.value)} rows={2} className="form-control" />
            </div>
            <div className="mb-3">
                <button onClick={onSave} className="btn btn-success me-4">save</button>
                <Link to='/Bus' className="btn btn-danger">Cancel</Link>
            </div>
        </div>
        </div>
    )
}   


export default AddBus1