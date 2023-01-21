import React from 'react'
import "./Settings.scss";
import Login from "../../Website/Login/Login.js";
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";

const usertoken = sessionStorage.getItem('token');

const Settings = () => {
    return (
        <>
          {!usertoken ? (<Login />) : (
            <div className="account">
              <SideBar />
              <div className="accountContainer">
                <NavBar />
                <div className="useraccount">
                    Settings
              </div>
              </div>
            </div>
          )}
        </>
      )
    }
export default Settings