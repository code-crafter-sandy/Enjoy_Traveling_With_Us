import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {Registration} from '../services/admin'


function Register(){


    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')


    
    // const navigate=useNavigate
    //it is a function to call get navigate function boject
    const navigate = useNavigate();

    const onRegister= async()=>{

        if(firstName.length===0){
            toast.error("please Enter First Name")
        } else if(lastName.length===0){
            toast.error("please Enter Last Name")
        }else if(email.length===0){
            toast.error("please Enter email")
        }else if(password.length===0){
            toast.error("please Enter password")
        }else if(confirmPassword!=password){
            toast.error("password does not mach")
        }else{
            const result=await Registration(firstName, lastName, email, password)
            console.log(result['msg'])
            if(result['msg']=="success"){
                toast.success("Successfully registered a new admin")

                navigate('/login')
            }else{
                toast.error(result['error'])
            }
            //call register api
            //if regitereation succesfully the go to login page 
           
           
        }





    }

    return (
        <div>
        <h2 className="page-header">Register</h2>
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className="from" >
                    <div className="mb-3">
                        <label htmlFor="">First Name</label>
                        <br />
                        <input
                        onChange={(e)=>setfirstName(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Last Name</label>
                        <br />
                        <input
                          onChange={(e)=>setlastName(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <br />
                        <input
                          onChange={(e)=>setemail(e.target.value)}
                        type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <br />
                        <input 
                          onChange={(e)=>setpassword(e.target.value)}
                        type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Confirm Password</label>
                        <br />
                        <input
                          onChange={(e)=>setconfirmPassword(e.target.value)}
                        type="password" className="form-control" />
                    </div>

                    
                    <div className="container">
                        <div>Already have an account?   <Link to="/login">Login Here</Link> </div>
                        <button 
                        onClick={onRegister}
                        className="btn btn-success w-100">Register</button>

                    </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
        </div>
    )
}


export default Register