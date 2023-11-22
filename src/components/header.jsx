import React from "react"

export default function Header(props){
const menuopened = React.useRef(null)
function menuopener(){
  
        if(menuopened.current.style.display === "block"){
            menuopened.current.style.display = "none"}
            else{
                menuopened.current.style.display = "block"}
}


let cat;
let prod; 
let clien;
let contac; 

if (window.matchMedia("(max-width: 400px) and (min-height: 600px)").matches) {
    cat = 692
    prod = 1410
    clien = 5250
    contac = 5990
  }else {
    cat = 900
    prod = 1180
    clien = 3250
    contac = 3920
  }

const lista = (
<>
<li>Home</li>
<li onClick={() => window.scrollTo({ top: cat, behavior: "smooth" })}>Category</li>
<li onClick={() => window.scrollTo({ top: prod, behavior: "smooth" })}>Products</li>
<li onClick={() => window.scrollTo({ top: clien, behavior: "smooth" })}>Client</li>
<li onClick={() => window.scrollTo({ top: contac, behavior: "smooth" })}>Contact us</li>
</>
)






    return (
        <>
        <div className="Header">
            <div className="logo">
            </div>
            <div className="navbar">
            <div className="navbar-items">
            <span>Log In</span>
            <img src={require("../imagens/shopping-bag.png")}  alt=""/>
            <img src={require("../imagens/search-icon.png")}  alt=""/>
        </div>
        <div className="menu" onClick={menuopener}>
            <img src={require("../imagens/toggle-icon.png")} alt=""/>
        </div>
            </div>
        </div>
        <div className="menu-opened" ref={menuopened}>
            <ul>{lista}</ul>
        </div>   
        </>
    )
}