import React, { useEffect, useState } from "react";

import './index.css'

export default function Section1() {
    let [detail,setDetail]=useState({})
    let fetchdetail=()=>{

        fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3").then(res=>res.json()).then(response=>{

            setDetail(response.details)
        })
    }

    useEffect(()=>{

        fetchdetail()
    })
    
    
  return (<div className="mx-2 my-4">
    <h5 className="mx-4" style={{fontWeight:"700"}}>{detail.title}</h5>
    <div className="cont d-flex my-4">
     <div  className="images  mx-4">
        <div  className="main_img">
    <img className=" cover position-absolute" style={{}} src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg" alt="" />

    <div style={{width:"427px",height:"80px",display:"flex",right:"0",float:"right",justifyContent:"flex-end",marginTop:"180px"}}  className="sign_img  d-flex">
    <img style={{height:"60px",width:"90px",right:"0",bottom:"0",zIndex:"10"}} className="" src="https://acharyaprashant.org/images/ic_apsignature_hindi.png" alt="" />
    </div>
    </div>   
      
    </div>

    <div className="title mx-4">
       <div  className="sub"><h5 style={{fontWeight:"560"}}>{detail.subtitle}</h5></div>
       <div className="desc">{detail.description}</div>
    </div>
    
    </div>
  </div>);
}
