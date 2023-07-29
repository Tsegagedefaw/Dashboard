import React from "react";
import {UpdateData} from '../../data/data'
import "./Updates.css"
const Updates = ()=>{
    console.log(UpdateData)
    return(
        <div className="updates">
             {UpdateData && UpdateData.map((update)=>{
                return(
                    <div className="update">
                        <img src={update.img} alt=""/>
                        <div className="note" style={{marginBottom: '1rem'}}>
                            <div>
                                <span>{update.name}</span>
                                <span> {update.note}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )
             })}
        </div>
    )
}
export default Updates;