export default function Footer(){
    return(
       <div className="footer">
          <div className="footer-components">
            <div className="f-first-item">
                <h1 style={{fontWeight: "normal"}}>Category</h1> 
                <span style={{marginTop: "1.5em", display: "block", color: "#6c757d", lineHeight: "1.5em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum
                 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                 magna aliqua. Ut enim ad minim</span>
            </div>
            <div className="f-second-item">
            <div className="fs-first">
            <h1 style={{fontWeight: "normal"}}>Useful links</h1>
            <span style={{marginTop: "1em", display: "block", color: "#6c757d", lineHeight: "2em"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It</span>
            </div>
            <div className="fs-second">
            <h1 style={{fontWeight: "normal"}}>Contact Us</h1>
            <a href="#" style={{marginTop: "1.5em", display: "block",
            textDecoration: "none", color: "#6c757d"}}>+01 1234567890</a>
            <a href="#" style={{marginTop: "1em", display: "block",
            textDecoration: "none", color: "#6c757d"}}>+01 9876543210</a>
            <a href="#" style={{marginTop: "1em", display: "block",
            textDecoration: "none", color: "#6c757d"}}>demo@gmail.com</a>
            <div style={{marginTop: "1em", }}>
                <a href="#"><img style={{marginRight: "0.3em" }} src={require("../imagens/fb-icon.png")} alt=""/></a>
                <a href="#"><img style={{marginRight: "0.3em"}} src={require("../imagens/twitter-icon.png")} alt=""/></a>
                <a href="#"><img style={{marginRight: "0.3em"}} src={require("../imagens/linkedin-icon.png")} alt=""/></a>
                <a href="#"><img src={require("../imagens/instagram-icon.png")}/></a>
            </div>
            </div>
            </div>
          </div>
          <div className="f-line"></div>
            <div className="copyright">Copyright 2020 All Rights Reserved</div>
       </div>
    )
}


































