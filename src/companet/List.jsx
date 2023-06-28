import React, { Fragment } from "react";
import{HiAcademicCap} from "react-icons/hi"
import {FiWatch} from "react-icons/fi"
import {MdComputer} from "react-icons/md"
import {LuRefrigerator} from "react-icons/lu"
import {PiTelevisionSimpleBold} from "react-icons/pi"
import {SiPhotobucket} from "react-icons/si"
const ListData=[
    {
        fullname:"Smartfon",
        icons:<HiAcademicCap/>,
        
    },
    { 
        fullname:"Smart Qadjetler",
        icons:<FiWatch/>
    },
    { 
        fullname:"Notebuklar",
        icons:<MdComputer/>
    },
    { 
        fullname:"Metbex ucun meiset texnikalari",
        icons:<LuRefrigerator/>
    },
    { 
        fullname:"Tv",
        icons:<PiTelevisionSimpleBold/>
    },
    { 
        fullname:"Foto texnika",
        icons:<SiPhotobucket/>
    }
]

const List=()=>{
return <Fragment>
    <div className="main">
        <div className="list">
            <div className="list_one">
                <ul className="list_ul">
                {ListData.map((item)=> (
                    <li className="list_li">{item.fullname} {item.icons}</li>
                    

                ))}<hr />
                    {/* <li>{ListData.map((e)=>e.icons)}</li> */}
                </ul>
            </div>
        </div>
        <div className="right_main">

        </div>
    </div>
</Fragment>
}

export default List