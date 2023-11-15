import './App.css';
import React from 'react';
import Header from "./components/header";
import Category from './components/category';
import Slider from "./components/slider.jsx"
import SomeItems from './components/SomeItems';
import SomeProducts from './components/SomeProducts';
import FeaturedProducts from './components/Featured-products';
import SecondSlider from './components/secondSlider';
import Newsletter from './components/Newsletter';
import Footer from './components/footer';


function App() {

  React.useEffect(()=> {
     fetch(`https://newsapi.org/v2/everything?q=paranal&from=2023-05-15&sortBy=publishedAt&apiKey=434a1c6f049c4c6590d71a90c4a74bd5`)
    .then(response => {response.json()
    .then(data => console.log(data.articles[0].content))
    })
}, [])



  return (
    <> 
    <div className="background">
    <Header />
    <Slider />  
    </div>
    <Category />
    <SomeItems />
    <SomeProducts />
    <FeaturedProducts />
    <SecondSlider />
    <Newsletter />
    <Footer />
    </>
  );
}

export default App;
