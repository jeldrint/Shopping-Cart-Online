import shoesAPI from './shoeAPI.json'
import { useOutletContext } from 'react-router-dom'

const Shop = () => {
  const category = useOutletContext();

  return(
      <div className='w-full h-full grid grid-cols-5'>
        <nav className='bg-sky-500 col-span-1'>
          {category}
        </nav>
        <main className='m-4 col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 content-start gap-3'>
          {Object.entries(shoesAPI).filter(shoes => shoes[0] === 'general')
            .map(shoes => Object.values(shoes[1]).filter(item =>
              {
                return(
                    category === 'men' ? item['men-women-kids'][0] === true :
                    category === 'women' ? item['men-women-kids'][1] === true :
                    category === 'kids' ? item['men-women-kids'][2] === true :
                    category === 'new-arrival' ? item['new-arrival'] === true : item
                )
              })
            .map(shoe=>{
              return(
                <div key={shoe.name} className='border-solid border-2 grid grid-rows-7 content-between p-2 lg:p-4 cursor-pointer transition duration-250 hover:opacity-80 '>
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
  )
}

export default Shop;