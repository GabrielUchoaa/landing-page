export default function SomeProducts(){
    return (
        <div className="SomeProducts-container">
           <div className="SomeProducts-first">
            <div className="SomeProducts-first-title">BEAUTY PRODUCTS</div>
            <img src={require('../imagens/img-5.png')} />
            <a href="#">SEE MORE</a>
           </div>
           <div className="SomeProducts-second">
            <div className="SomeProducts-first-title">EXPLORE TRENDING ELECTRONICS</div>
            <img src={require('../imagens/img-6.png')} />
            <a href="#">SEE MORE</a>
           </div>
        </div>
    )
}