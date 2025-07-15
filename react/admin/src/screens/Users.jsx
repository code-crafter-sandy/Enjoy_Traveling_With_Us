import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { createUrl } from '../utils';
import { useNavigate } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    if(sessionStorage.getItem("email")==null){

        navigate("/login");
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    const fetchUsersData = async () => {
        try {
            const response = await fetch(createUrl("User/user"));
            const data = await response.json();
            
            if (data !== undefined) {
                setUsers(data);
            } else {
                console.error("Error fetching users:", data.error);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const toggleUserStatus = async (id, status) => {
        try {
            // Toggle between active and inactive status
            const updatedStatus = status === "A" ? "D" : "A";
            const response = await fetch(createUrl(`User/user/${id}`), {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: updatedStatus })
            });

            if (response.ok) {
                setUsers(users.map(user => user.id === id ? { ...user, status: updatedStatus } : user));
            } else {
                console.error("Failed to update user status");
            }
        } catch (error) {
            console.error("Error updating user status:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <h2 className="page-header">Users</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.gender}</td>
                            <td>{user.status}</td>
                            <td>
                                {user.status === "A" ? (
                                    <button className="btn btn-danger btn-sm" onClick={() => toggleUserStatus(user.id, user.status)}>Deactivate</button>
                                ) : (
                                    <button className="btn btn-success btn-sm" onClick={() => toggleUserStatus(user.id, user.status)}>Activate</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
