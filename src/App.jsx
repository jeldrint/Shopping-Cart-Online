import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

const App = () => {
  return(
    <div className="h-screen w-screen bg-gradient-to-br from-light-brown to-brown md:bg-[url('./images/wallpaper.png')] bg-center bg-no-repeat bg-cover relative contrast-150">
      <Header>
        <Shop />
      </Header>
      <main> </main>
      <Footer />
    </div>
)
}

export default App;