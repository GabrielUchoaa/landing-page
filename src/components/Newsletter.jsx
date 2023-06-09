import { Autoplay } from "swiper";

export default function Newsletter(){
    return (
        
       <div className="newsletter" >
<span style={{color: "white", fontSize: "1.3rem", display: "flex", justifyContent: "center", textAlign: "center" 
}}>CONNECT TO CRAFT</span>
<br/>
<span style={{color: "white", display: "flex", justifyContent: "center", fontSize: "3rem",
textAlign: "center" }}>Join Our Newsletter</span>
<br/>
<br/>
<span style={{color: "white", display: "flex", justifyContent: "center", fontSize: "0.9rem", textAlign: "center",
width: "90%", lineHeight: "1.5rem",
margin: "auto" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
</span>
<br/>
<br/>
<br/>
<div className="input" >
<input type="email" placeholder="Enter your email" style={{color: "", width: "100%",
backgroundColor: "transparent", border: "none", padding: "1em 0", borderBottom: "none" 
}}/>
<a href="#" >Subscribe</a>
</div>
      </div>
    )
}