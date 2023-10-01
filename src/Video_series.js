import React, { useEffect, useState } from "react";

import "./index.css"

export default function Video_series() {
    let [cardData,setcardData]=useState([])
    let fetchVideodata=()=>{

        return fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3").then(res=>res.json()).then(response=>{

             setcardData(response.courses)
        })
    }

    useEffect(()=>{

        fetchVideodata()
    })

   
    

  return (<div>
    <h4 className="mx-4 my-5">Vedio Series(8)</h4>
    <div style={{borderTop:"1px solid lightgrey",marginTop:"-30px"}} className="d-flex flex-wrap ">
    
    {cardData.map((data,i)=>{
        
        return (
            <div class="card w-50 mx-3 my-2  video_cont" style={{width:"20em", maxWidth:"300px",border:"none" ,borderBottom:"1px solid lightgrey"}} >
  <div class="card-body">
  <span class="badge badge_bhag">भाग {i+1}</span>
    <h5 class="card-title my-3">{data.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{data.subtitle}</h6>
    <p class="card-text">{Math.floor(data.courseHours)+" "+" "+" "+"Hours"+" "+(Math.ceil((data.courseHours-Math.floor(data.courseHours))*60))+" " +" "+" "+ "minutes"}</p>
    <div className="d-flex">
    <p class="card-text">Contribution:₹{data.amount}</p><p style={{textDecoration:"line-Through"}} class="card-text mx-2">{"  "+"₹"+data.originalAmount}</p>
    </div>
    <div className="hindi_badge">
    <span class="badge badge_lang">hindi</span>
    </div>
    <div className="links my-2">
    <a href="#" class="card-link my-2 text-decoration-none ">Add to cart</a>
    <a href="#" class="card-link my-2 text-decoration-none ">Enrol</a>
    </div>
  </div>
</div>
        )
    })}
</div>
  </div>);
}
