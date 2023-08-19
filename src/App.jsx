import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCarousel from "./components/image-carousel/Carousel";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [category, setCategory] = useState('');

  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col justify-between items-center">
      <Header setCategory={setCategory} />
      <div className='w-full flex flex-col justify-center items-center'>
        <Outlet context={category} />
      </div>
      <Footer />
    </div>
)
}

export default App;