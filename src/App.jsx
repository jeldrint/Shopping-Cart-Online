import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ImageCarousel from "./components/Carousel";

//bg-gradient-to-br from-light-brown to-brown md:bg-[url('./images/wallpaper.png')] bg-center bg-cover relative contrast-150
const App = () => {
  return(
    <div className="h-screen w-screen static flex-col justify-center">
      <Header />
        <ImageCarousel />
        <Outlet />
      <Footer />
    </div>
)
}

export default App;