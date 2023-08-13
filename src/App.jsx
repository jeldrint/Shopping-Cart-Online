import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return(
    <div className="h-screen w-screen bg-[url('./images/wallpaper.png')] bg-cover bg-center relative">
      <header className="p-8">
        <Link to='home'><span className='text-3xl font-myFont'>HomeStore</span></Link>
        <Link to='store'><span>Shop</span></Link>
      </header>
      <main>
      </main>
      <Footer />

    </div>
)
}

export default App;