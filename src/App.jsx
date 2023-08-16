import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { useParams } from "react-router-dom";
import ImageCarousel from "./components/image-carousel/Carousel";

//bg-gradient-to-br from-light-brown to-brown md:bg-[url('./images/wallpaper.png')] bg-center bg-cover relative contrast-150
const App = () => {

  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col justify-between items-center">
      <Header />
      <div className='w-full flex flex-col justify-center items-center'>
        <ImageCarousel />
      </div>
      <Footer />
    </div>
)
}

export default App;