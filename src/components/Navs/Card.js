import React from 'react'
import { SiCss3   } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
const course =[
    {
        title: "JAVA SCRIPT",
        icon:<DiJavascript1 />,
    },
    {
        title:"REACT JS",
        icon: <RiReactjsFill />,
    },
    {
        title:"CSS",
        icon:<SiCss3 />,
    }
]
const Card = () => {
  return (
    <div className="card-container">
        {course.map((item)=>(
             <div className="card">
             <div className="card-cover">
                {item.icon}
                </div>
                 <div className="card tittle">
                     <h2>
                         {item.title}
                     </h2>
                 </div>
             
         </div>
        ))}
        
        </div>
  )
}

export default Card