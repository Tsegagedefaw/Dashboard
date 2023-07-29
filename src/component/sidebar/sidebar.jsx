import React, { useState } from "react";
import Logo from "../../assets/shopping-cart-icon-3.png"
import "./sidebar.css";
import {UilSignOutAlt,UilBars, UilMultiply} from "@iconscout/react-unicons"
import { SidebarData } from "../../data/data";
import { motion } from "framer-motion";
const Sidebar  = ()=>{
    
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const sidebarVariants = {
        true:{
            left:'0'
        },
        false:{
            left:'-60%'
        }
    }

    return(
        <>
            <div className="bars" 
                style={expanded?{left:'45%'}:{left:'5%'}}
                onClick={()=>setExpanded(!expanded)}

            >
                {expanded ? <UilMultiply/> : <UilBars/>}
            </div>
            <motion.div className="Sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth<768?`${expanded}`:''}
            >
                
                {/* Logo */}
                <div className="logo"> 
                    <img src={Logo} alt=""/>
                    <span>
                        Sh<span>o</span>pe
                    </span>
                </div>
                {/* Menu */}
                <dev className="menu">
                    {
                        SidebarData && SidebarData.map((tab)=>{
                            return(
                                <dev key={tab.id} 
                                className={selected === tab.id ? "menuItem active" : "menuItem"}
                                onClick={()=>setSelected(tab.id)}
                                >
                                    <tab.icon/>
                                <span>
                                    {tab.heading}
                                </span>
                            </dev>
                            )
                            
                        })
                    }       
                    <dev className="menuItem">
                        <UilSignOutAlt/>            
                    </dev>         
                </dev>
            </motion.div>
        </>
    )
}
export default Sidebar;