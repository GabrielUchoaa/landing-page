import React from "react"

export default function Header(props){
const menuopened = React.useRef(null)
function menuopener(){
  
        if(menuopened.current.style.display === "block"){
            menuopened.current.style.display = "none"}
            else{
                menuopened.current.style.display = "block"}
}



const li = ["Home", "Category", "Products", "Client", "Contact us"
]

const lista = li.map(item=> (
<li>{item}</li>
))



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