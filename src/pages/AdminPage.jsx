import React from "react";
import './AdminPage.css';
import UserTable from "../components/UserTable";

function AdminPage(){
    return(
        <>
            {/* For me to keep track of new signed up users */}
           <div className="admin-container">
                <UserTable />
           </div>
        </>
    );
}

export default AdminPage;