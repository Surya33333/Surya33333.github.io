import react from "react";
import "./List.scss"
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import DataTable from "../DataTable/DataTable.js"
import Login from '../../Website/login';
import { useNavigate } from 'react-router-dom';

const usertoken = sessionStorage.getItem('token');


const List = () => {
    return(
        <>
        {!usertoken ? (<Login />):(
            <div className="list">
            <SideBar />
            <div className="listContainer">
            <NavBar />
            <DataTable />
            </div>
        </div>
        )}
        </>
    )
}

export default List

