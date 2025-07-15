import { useState } from "react"
import Navbar from "../components/navbar"
import usersData from "../dummy/users.json"
function Users1(){

    const [users,setUsers]=useState(usersData)

    return (
        <div>
              <Navbar/>
        <h2 className="page-header">Users</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>   
                </tr>
            </thead>
            <tbody>
                {users.map((user,index )=>{
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{user["firstName"]} {user["lastName"]}</td>
                        <td>{user["phoneNumber"]}</td>
                        <td>{user["email"]}</td>
                        <td>{user["gender"]}</td>
                        <td>
                            <button className="btn btn-success btn-sm">Deactivate</button>
                        </td>

                    </tr>
                })}
            </tbody>
        </table>


        </div>
    )
}


export default Users1
