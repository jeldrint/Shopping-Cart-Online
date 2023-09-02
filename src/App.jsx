import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = ({cartItems, setCartItems}) => {

  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col items-center">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet />
    </div>
)
}

export default App;