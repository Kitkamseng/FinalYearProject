import './UserTable.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';



function UserTable(){

    const {id} = useParams();

    const[users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async() =>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

    const deleteUser = async(id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    return(
        <>
            <div className="user-container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope="row" key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            &nbsp;
                                            &nbsp;
                                            <Link 
                                                className='btn btn-outline-primary mx-2'
                                                to={`/edituser/${user.id}`}
                                            >
                                                Edit
                                            </Link>
                                            &nbsp;
                                            &nbsp;
                                            <button 
                                                className='btn btn-primary mx-2'
                                                onClick={() => deleteUser(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserTable; 