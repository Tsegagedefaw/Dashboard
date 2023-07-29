import React, { useState } from "react";
import './card.css'
import { LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import Chart from 'react-apexcharts'
import {UilTimes} from '@iconscout/react-unicons'

const Card = (props)=>{
    const [expanded, setExpanded] = useState(false);
    return(
     <LayoutGroup>
        {
            expanded ? (
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
            ):
            <ComponentCard param={props} setExpanded={()=>setExpanded(true)}/>
        }
     </LayoutGroup>
    ) 
}

// Component card

function ComponentCard({param, setExpanded}){
    const Png = param.png;
    return(
        <motion.div className="compactCard"
        style={{
            background: param.color.background,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        // layoutId="expandableCard"
        >
            <div className="radialBar">
                <CircularProgressbar
                  value={param.barValue}
                  text={`${param.barValue} %`} 
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>$ 10, 123</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}

// Expanded Card

function ExpandedCard({param,setExpanded}){

    const data = {
        options:{
            chart: {
                type:"area",
                height: "auto"
            },
            dropShadow: {
                enabled : false,
                enabledOnSeries: undefined,
                top:0,
                left:0,
                blur: 3,
                color:"#000",
                opacity: 0.35
            },
            fill:{
                colors:["#fff"],
                type:"gradient",
            },
            dataLables:{
                enabled:false,
            },
            stroke: {
              curve: "smooth",
              colors: ["white"],  
            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm",
                },
            },
            grid:{
                show: "true",
            },
            xaxis: {
                type:"datetime",
                categories:[
                    "2018-09-19T00:00:00.000z",
                    "2018-09-19T01:00:00.000z",
                    "2018-09-19T02:00:00.000z",
                    "2018-09-19T03:00:00.000z",
                    "2018-09-19T04:00:00.000z",
                    "2018-09-19T05:00:00.000z",
                    "2018-09-19T06:00:00.000z",
                ],
            },
        },
    };

    return(
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.background,
                boxShadow: param.color.coxShadow
            }}
            // layoutId="expandableCard"
        >
            <div style={{alignSelf:'flex-end', cursor:'pointer', color:'white'}}> 
                <UilTimes onClick={setExpanded}/>
                
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}
export default Card;