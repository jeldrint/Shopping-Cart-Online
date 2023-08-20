import ShopRender from './ShopRender';
import shoesAPI from './shoeAPI.json'
import { Link, useParams } from 'react-router-dom';

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
              <Link to={'/'+ shoe.id} className='max-w-xs rounded shadow-lg border-2 grid grid-rows-7 content-between p-2 lg:p-4 cursor-pointer transition duration-250 hover:opacity-80'>
                <ShopRender shoe={shoe} />
              </Link>
            )
          }))
        }
      </main>
  )
}

export default Shop;