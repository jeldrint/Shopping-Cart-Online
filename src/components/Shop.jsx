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
          <main className='m-4 col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {Object.entries(shoesAPI).filter(shoes => shoes[0] != 'trending')
              .map(shoes => Object.values(shoes[1]).map(shoe=>{
                return(
                  <div key={shoe.name} className='border-solid border-2 grid grid-rows-7 content-start p-2 lg:p-4 cursor-pointer transition duration-250 hover:opacity-70 '>
                    <img src={shoe.img} className='row-span-5 object-cover' />
                    <div className='row-span-2 w-full font-myFont text-xs flex flex-col gap-y-1'>
                      <span>{shoe.name}</span>
                      {shoe.discount != null ? 
                        <div className='text-sm flex flex-col'>
                        <span className='text-red-500 line-through'>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                        <span >{'\u20B1 '}{(Math.round((shoe.price - shoe.price * shoe.discount)*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>                      
                        </div> :
                        <span className='text-sm pt-3 md:pt-2'>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                      }
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