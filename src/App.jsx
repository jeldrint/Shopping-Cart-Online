import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {

  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col items-center">
      <Header />
      <Outlet />
    </div>
)
}

export default App;