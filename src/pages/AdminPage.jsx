import React from "react";
import './AdminPage.css';
import UserTable from "../components/UserTable";

function AdminPage(){
    return(
        <>
           <div className="admin-container">
                <UserTable />
           </div>
        </>
    );
}

export default AdminPage;