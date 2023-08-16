import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ImageCarousel from "./components/image-carousel/Carousel";

//bg-gradient-to-br from-light-brown to-brown md:bg-[url('./images/wallpaper.png')] bg-center bg-cover relative contrast-150
const App = () => {
  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col justify-between items-center">
      <Header />
      <div className='w-full flex justify-center items-center'>
        <ImageCarousel />
        <Outlet />
      </div>
      <Footer />
    </div>
)
}

export default App;