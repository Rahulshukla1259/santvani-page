import React, { useEffect, useState } from "react";

import Num from "./Num";

import './index.css'

export default function Faqs() {
  let [data, setData] = useState([]);

  let [order,setOrder]=useState(Num)


  

  const fetchData = () => {
    return fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi"
    )
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //console.log(data);

  return (<div className="d-flex cont-faq my-4">

    <div className="left left-faq">

        <center><h3>FAQs</h3></center>
        <center><p >Can’t find the answer you’re looking for? Reach out to our <span>support</span> team</p></center>
    </div>

    <div className="right right-faq ">

    {data.map((el,i)=>{

        return (    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+Num[i]}
            aria-expanded={i===0?"true":"false"} 
            aria-controls={"flush-collapse"+Num[i]}>
             <strong>{el.question}</strong>
            </button>
          </h2>
          <div id={"flush-collapse"+Num[i]} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">{el.answer.split("").slice(3,el.answer.length-4).join("")}</div>
          </div>
        </div>
        
        </div>)
    })}
    </div>
  </div>);
}
