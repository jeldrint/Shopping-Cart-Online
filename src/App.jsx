import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  const [category, setCategory] = useState('');

  return(
    <div className="overflow-x-hidden h-screen w-screen flex flex-col justify-start items-center">
      <Header setCategory={setCategory} />
      <div className='flex flex-col justify-start items-center m-5'>
        <Outlet context={category} />
      </div>
    </div>
)
}

export default App;