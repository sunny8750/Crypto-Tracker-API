import React, { useState } from "react";
import "./style.css";


function CoinInfo({heading,desc}){
    const shortdesc = desc.slice(0,200)+"<span style='color:var(--grey)'> Read More...</span>";
    const longdesc = desc+"<span style='color:var(--grey)'> Read Less...</span>";
    const [flag,setFlag] = useState(false);
    return(
        <div className="grey-wrapper">
           <h2 className="coin-info-heading">{heading}</h2>
           <p onClick={()=>setFlag(!flag)} className="coin-info-desc" dangerouslySetInnerHTML={{__html:!flag?shortdesc:longdesc}}/>
        </div>
    )
}
export default CoinInfo;