import Navbar from "../components/navbar";
function Rating(){

return <div>
    <Navbar/>


    <h2 className="page-header">Rating & Reviews</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Reviews</th>
                    <th>Rating</th>   
                </tr>
            </thead>
            <tbody>
                {/* {users.map((user,index )=>{
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
                })} */}
            </tbody>
        </table>


</div>

}

export default Rating