import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = ({cartItems}) => {

  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col items-center">
      <Header cartItems={cartItems} />
      <Outlet />
    </div>
)
}

export default App;