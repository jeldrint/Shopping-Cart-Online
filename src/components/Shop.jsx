import shoesAPI from './shoeAPI.json'
import { useParams } from 'react-router-dom';

const Shop = () => {
  const {name} = useParams();

  return(
      <main className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 content-start gap-3'>
        {Object.entries(shoesAPI).filter(shoes => shoes[0] === 'general')
          .map(shoes => Object.values(shoes[1]).filter(item =>
            {
              return(
                name === 'men' ? item['men-women-kids'][0] === true :
                name === 'women' ? item['men-women-kids'][1] === true :
                name === 'kids' ? item['men-women-kids'][2] === true :
                name === 'new-arrival' ? item['new-arrival'] === true : item
              )
            })
          .map(shoe=>{
            return(
              <div key={shoe.name} className='max-w-xs rounded shadow-lg border-2 grid grid-rows-7 content-between p-2 lg:p-4 cursor-pointer transition duration-250 hover:opacity-80 '>
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
  )
}

export default Shop;