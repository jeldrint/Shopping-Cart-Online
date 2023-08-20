import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {

  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col justify-start items-center">
      <Header />
      <div className='flex flex-col justify-start items-center m-5'>
        <Outlet />
      </div>
    </div>
)
}

export default App;