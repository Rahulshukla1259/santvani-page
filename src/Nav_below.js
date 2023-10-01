import React from "react";

export default function Nav_below() {
  return <div>
    <div style={{justifyContent:"center",alignItems:"center",height:"50px",backgroundColor:"#00001a"}} className="course_cont w-full h-4 d-flex">
        <div style={{height:"15px",width:"15px",borderRadius:"50%",backgroundColor:"#cc3300",border:"1px solid white"}} className="circle w-10 h-10 rounded-full mb-1"></div>
        <h5 style={{fontWeight:"400"}} className="text-white mx-2">Get access to all 350+ video series at once!
</h5>
 <button style={{borderRadius:"6px",border:"1px solid white"}} className="click mx-2  px-2 bg-dark text-white">Click here</button>
    </div>
  </div>;
}
