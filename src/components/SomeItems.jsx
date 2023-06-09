import React from "react"
import {someitensdata} from "./data"


export default function SomeItems(){
    function mouseEnter(e){
      e.target.style.boxShadow = "0px 1px 10px 1px #888888"   
    }

    function mouseLeave(e){
        e.target.style.boxShadow = "none"
    } 

    let itens = someitensdata.map(item=>
        
        <div className="s-items" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="title"><span>{item.title}</span></div>
            <div className="s-img"><img src={item.img} alt="" data-key={item.key} /></div>
            <div className="s-see-more"><a href="#">{item.link}</a></div>
        </div>
        
)


    return(
        <div className="some-items" >
            {itens}
        </div>
    )
}