import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login } from '../services/admin'


function  Login(){

    const [email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const [isEmailEmpty, setEmailEmpty]=useState(false)  
    const [isPasswordEmpty, setPasswordEmpty]=useState(false)  

    const navigate=useNavigate()

    const onLogin=async()=>{
        if(email.length===0){
            setEmailEmpty(true)
            toast.error("please enter Email")
        }
        else if(password.length===0){
            
            setPasswordEmpty(true)
            toast.error("please Enter password")
        }else{

            const result = await login(email, password)
            console.log(result)
            if(result["status"]!="error"){
                toast.success('Welcome to MyStore')
                // const {firstName, lastName} = result['data']
                // sessionStorage['name'] = `${firstName} ${lastName}`
                sessionStorage.setItem('email', email)

                navigate("/home")
            }else{
                toast.error(result['error'])  
            }

            //call login api and check it is  success
            //got home page
      

        }
    }


    return (
        <div>
        <h2 className="page-header">Login</h2>
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className="from" >
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <br />
                        <input onChange={(e)=>{
                            if(e.target.value.length===0){
                                setEmailEmpty(true)
                            }else{
                                setEmailEmpty(false)
                            }
                            setemail(e.target.value)
                            
                            setemail(e.target.value)}} type="email" className="form-control" />
                        {isEmailEmpty &&
                        <p style={{color:'red'}}>Email is mandatory</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <br />
                        <input onChange={
                            
                            (e)=>{
                                if(e.target.value.length===0){
                                    setPasswordEmpty(true)
                                }else{
                                    setPasswordEmpty(false)
                                }
                                setpassword(e.target.value)}} 
                        
                        type="password" className="form-control" />
                        {isPasswordEmpty &&
                        <p style={{color:'red'}}>Password is mandatory</p>}
                    </div>
                    <div className="container">
                        <div>Don't have account?   <Link to="/register">Register here</Link> </div>
                        <button  onClick={onLogin} className="btn btn-success w-100">Login</button>

                    </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
        </div>
    )
}


export default Login
