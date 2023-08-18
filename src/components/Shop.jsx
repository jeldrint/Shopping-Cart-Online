import Header from "./Header";
import shoesAPI from './shoeAPI.json'

const Shop = () => {

  return(
      <div className="overflow-x-hidden h-screen w-screen flex flex-col items-center">
        <Header />
        <div className='w-full h-full grid grid-cols-5'>
          <nav className='bg-sky-500 col-span-1'>
              Filter
          </nav>
          <main className='m-4 col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {Object.entries(shoesAPI).filter(shoes => shoes[0] != 'trending')
              .map(shoes => Object.values(shoes[1]).map(shoe=>{
                return(
                  <div key={shoe.name} className='border-solid border-2 grid grid-rows-6 justify-items-center '>
                    <img src={shoe.img} className='row-span-4 object-cover bg-violet-400' />
                    <div className='row-span-2 bg-slate-300'>
                      <p>{shoe.name}</p>
                      <p>{shoe.price}</p>
                    </div>
                  </div>
                )
              }))
            }
          </main>
        </div>
      </div>
  )
}

export default Shop;