import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCarousel from "./components/image-carousel/Carousel";

const App = ({cartItems,setCartItems}) => {

  return(
    <div className="min-h-screen h-full w-full flex flex-col justify-between items-center">
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <Outlet />
    
    </div>
)
}

export default App;