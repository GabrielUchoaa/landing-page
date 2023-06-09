export default function Costumer(){
    const mystyle = {
         display: "block",
         fontWeight: "bold",
         fontSize: "1.4rem",
         color: "rgb(48, 46, 46)"   
    }
    

    return (
        
        <>
        <br/>
            <div className="f-title"><span>WHAT IS SAYS OUR CUSTOMER</span></div>
            <div className="f-subtitle"><span>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking
            </span></div>
            <div className="normal-distribution" style={{paddingBottom: "10%"}}>
              <div className="purple-area"></div>
              <div className="n-content">
                <img src={require("../imagens/img-9.png")} alt=""/>
                <span style={mystyle}>Normal distribution</span>
                <br/>
                <br/>
                <span style={{
        fontSize: "0.9rem",
        color: "rgb(70, 70, 70)"}}
        >It is a long established fact that a reader will be distracted by the readable content of a page
             when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
             distribution of letters, as opposed to using 'Content here, content here', making it look
                </span>
                <img style={{display: "block", marginTop: "2em"}}src={require("../imagens/icon-10.png")} alt=""/>
              </div>
            </div>
        </>     
   )
}