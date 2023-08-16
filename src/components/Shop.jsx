import Header from "./Header";

const Shop = () => {
    return(
        <div className="overflow-x-hidden h-screen w-screen flex flex-col justify-between items-center">
          <Header />
            <div className='w-full flex flex-col justify-center items-center'>
              <h1 className='text-3xl text-indigo-600'>Store</h1>
            </div>
        </div>
    )
}

export default Shop;