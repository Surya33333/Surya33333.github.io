import React from "react";
import { Arrow90degUp, Person, Wallet } from "react-bootstrap-icons";
import "./Widget.scss";
import { Link } from "react-router-dom";


const Widget = ({type}) =>{
    let data;
    const amount = 100;
    const diff = 50;
    switch(type){
        case "orders":
            data={
                title:"MY ORDERS",
                isMoney:false,
                link:<Link to="/orders" style={{textDecoration:"none", color:"black"}}>See all Orders</Link>,
                icon:<Person className="icon" style={{color:"black",backgroundColor:"skyblue"}}/>,
            };
            break;
        case "sample":
            data={
                title:"SAMPLE",
                isMoney:false,
                link:<Link to="/dashboard/sample" style={{textDecoration:"none", color:"black"}}>See Sample</Link>,
                icon:<Person className="icon" style={{color:"black",backgroundColor:"skyblue"}}/>,
            };
            break;
        case "balance":
            data={
                title:"WALLET BALANCE",
                isMoney:false,
                link:<Link to="/dashboard/wallet" style={{textDecoration:"none", color:"black"}}>Add Money</Link>,
                icon:<Wallet className="icon" style={{color:"white",backgroundColor:"gray"}}/>,
            };
            break;
            default:
                break;
    }



    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage negative">
                    <Arrow90degUp/>
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}


export default Widget