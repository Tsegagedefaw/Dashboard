import React from "react";
import "./mainDash.css"
import Card from "../cards/cards";
import Table from '../Table/Table'

const MainDash = ()=>{
    return(
        <div className="Maindash">
           <h1>Dashboard</h1>
           <Card/>
           <Table/>
        </div>
    )
}
export default MainDash;