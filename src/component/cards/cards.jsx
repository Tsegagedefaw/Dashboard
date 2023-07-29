import React from "react";
import './cards.css'
import { cardData } from "../../data/data";
import Card from "../card/card";
const Cards = ()=>{
    return(
        <div className="cards">
           {cardData && cardData.map((cardData)=>{
            return(
                <div className="parentContainer">
                    <Card
                title={cardData.title}
                color={cardData.color}
                barValue={cardData.barValue}
                value={cardData.values}
                png={cardData.png}
                series={cardData.series}
                />
                </div>
                
            )
           })}
        </div>
    )
}
export default Cards