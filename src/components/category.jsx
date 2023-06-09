import React from "react"
import {categorydata} from "./data"





export default function Category(){

function MouseEnter(event) {
      let image = event.target.querySelector("img") 
      let span = event.target.querySelector("span")
      let key = image.getAttribute("data-key")
      image.setAttribute("src", categorydata[ key ].mouseover) 
      span.style.color = "black"
    console.log(event.target, image, span)
      
}

function MouseLeave(event){ 
    let image = event.target.querySelector("img") 
    let span = event.target.querySelector("span") 
    let key = image.getAttribute("data-key")
    
    image.setAttribute("src", categorydata[ key ].img) 
    span.style.color = "rgb(124, 123, 123)"
    
} 



let Img = categorydata.map(item => 
    <div className="category-img" onMouseOver={MouseEnter} onMouseLeave={MouseLeave}>
    <img src={item.img} alt="" data-key={item.key}  />
    <span>{item.name}</span>
</div>


)
    return(
        
        <div className="category">
        <div className="category-name"><span>Category</span></div>
        <div className="category-img-container">
        <div className="category-img" >
    <img src= {require('../imagens/icon-1.png')} alt=""/>
    <span style={{color: "black"}}>New Fashion</span>
    </div>
        {Img}
        </div>
        </div>
    )
}

