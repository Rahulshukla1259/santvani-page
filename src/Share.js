import React from "react";
import whatsapp from "./images/whatsapp(green_noback).png";

import f_noback from "./images/facebook (blue_noback).png";

import twit_blue_noback from "./images/twitter (blue).png";

import wp_greenback from "./images/whatsapp (green_back).png";

import facebook_blueBack from "./images/facebook.png";

import twitter_blueBack from "./images/twitter.png";

import linkedin from "./images/linkedin.png";

import linkedin1 from "./images/linkedin (1).png";



export default function Share() {
  let handle_mouseEnter_whatsapp=()=>{

     document.querySelector(".wp").src=wp_greenback
  }

  let handle_mouseLeave_whatsapp=()=>{

    document.querySelector(".wp").src=whatsapp
  }


  let handle_mouseEnter_facebook=()=>{

    document.querySelector(".fb").src=facebook_blueBack
 }

 let handle_mouseLeave_fb=()=>{

  document.querySelector(".fb").src=f_noback
}

 let handle_mouseEnter_twitter=()=>{

  document.querySelector(".twit").src=twitter_blueBack
}

let handle_mouseLeave_twit=()=>{

  document.querySelector(".twit").src=twit_blue_noback
}

let handle_mouseEnter_linkedin=()=>{

  document.querySelector(".in").src=linkedin
}

let handle_mouseLeave_in=()=>{

  document.querySelector(".in").src=linkedin1
}
  return <div  className="my-2">
    <p className="mx-4">Share the series:</p>
    <div className="share-icons d-flex">
       <img onMouseEnter={handle_mouseEnter_whatsapp} onMouseLeave={handle_mouseLeave_whatsapp} src={whatsapp} className="wp" alt="" />
       <img onMouseEnter={handle_mouseEnter_facebook} onMouseLeave={handle_mouseLeave_fb} src={f_noback} className="fb" alt="" />
       <img onMouseEnter={handle_mouseEnter_twitter} onMouseLeave={handle_mouseLeave_twit} src={twit_blue_noback} className="twit" alt="" />
       <img onMouseEnter={handle_mouseEnter_linkedin} onMouseLeave={handle_mouseLeave_in} src={linkedin1} className="in" alt="" />
       
    </div>
  </div>;
}
