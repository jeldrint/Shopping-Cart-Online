import Header from "./Header";
import shoes from './shoeAPI.json'

const Shop = () => {

  return(
      <div className="overflow-x-hidden h-screen w-screen flex flex-col items-center">
        <Header />
        <div className='w-full h-full grid grid-cols-5'>
          <nav className='bg-sky-500 col-span-1'>
              Filter
          </nav>
          <main className='m-4 col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {Object.values(shoes).map(item=>{
              return(
                Object.values(item).map(shoe=>{
                  console.log(shoe.name)
                  return(
                    <div className='border-solid border-2 grid grid-rows-2 auto-rows-auto'>
                      <img src={shoe.img} className='object-cover max-h-[230px]' />
                      <div>
                        <p>{shoe.name}</p>
                        <p>{shoe.price}</p>
                      </div>
                    </div>
                  )
                })
              )
            })}
        </main>
        </div>
      </div>
  )
}

export default Shop;