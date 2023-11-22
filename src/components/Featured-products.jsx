export default function FeaturedProducts(){
     return (
        <div className="featured-products">
            <div className="f-title"><span>FEATURED PRODUCTS</span></div>
            <div className="f-subtitle"><span>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking
            </span></div>
            <div className="f-flex">
            <div className="readable-content">
                <div className="r-content">
                <div className="r-title">READABLE CONTENT OF</div>
                <img src={require("../imagens/img-7.png")} />
                </div>
                <div className="r-content">
                <div className="r-title">READABLE CONTENT OF</div>
                <img src={require("../imagens/img-7.png")} />
                </div>
            </div>
            
                <div className="R-content">
                <div className="R-title">READABLE CONTENT OF</div>
                <img src={require("../imagens/img-8.png")} />
                <a href="#">SEE MORE</a>
                
                </div>
            </div>
        </div>
     )
}