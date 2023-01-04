import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, {Toggle,Nav,NavItem,NavIcon,NavText} from "@trendmicro/react-sidenav";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./SideBar.scss";
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';


class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <div className="sidebar">
        <div className="top">
          <span className="logo">LOGO</span>
        </div><hr></hr>
        <div className="center">
          <ul>
            <Link to="/dashboard" style={{textDecoration:"none"}} ><li><Icon.GridFill className="icon" /><span>Dashboard</span></li></Link>
            <Link to="/orders" style={{textDecoration:"none"}} ><li><Icon.HouseFill className="icon" /><span>My Orders</span></li></Link>
            <Link to="/account" style={{textDecoration:"none"}} ><li><Icon.PersonFill className="icon" /><span>My Account</span></li></Link>
            <Link to="/settings" style={{textDecoration:"none"}} ><li><Icon.GearFill className="icon" /><span>Settings</span></li></Link>
            <li><Icon.BoxArrowRight className="icon" /><span onClick={()=>{sessionStorage.clear(); window.location.reload();}}>Logout</span></li>
          </ul>
        </div>
        <div className="bottom">
          <div className="coloroption"></div>
          <div className="coloroption"></div>
        </div>
      </div>
    ); 
  }
}

export default SideNavBar;
