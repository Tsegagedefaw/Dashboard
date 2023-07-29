import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import pp1 from '../assets/pp1.jpg'
import pp2 from "../assets/pp2.jpg"
import pp3 from "../assets/pp3.jpg"

export const SidebarData = [
    {
        id:1,
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        id:2,
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        id:3,
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        id:4,
        icon: UilPackage,
        heading: "Product",
    },
    {
        id:5,
        icon: UilChart,
        heading: "Analytics",
    }
]

export const cardData = [
    {
        title:"Sales",
        color:{
            background:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value:"25,970",
        png:UilUsdSquare,
        series: [
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title:"Revenue",
        color:{
            background:"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value:"14,270",
        png:UilMoneyWithdrawal,
        series: [
            {
                name:"Revenue",
                data:[10,100,50,70,80,30,0],
            },
        ],
    },
    {
        title:"Expenses",
        color:{
            background:"linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202, 113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value:"4,270",
        png:UilClipboardAlt,
        series: [
            {
                name:"Expenses",
                data:[10,25,15,30,12,15,20],
            },
        ],
    },
]

// Recent update Card Data
export const UpdateData = [
    {
        img:pp3,
        name:"Andrew Thomas",
        note:"has ordered apple smart phone.",
        time:"20 seconds ago"
    },
    {
        img:pp2,
        name:"Abebe Thomas",
        note:"has recieved samsung smart tab.",
        time:"35 minutes ago"
    },
    {
        img:pp1,
        name:"Tsegalem Gedefaw",
        note:"has ordered apple smart phone 14 pro max.",
        time:"1 hours ago"
    },
]