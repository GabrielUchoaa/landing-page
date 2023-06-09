import './App.css';
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
