
const ShopRender = ({shoe}) => {
    return (
        <section key={shoe.id} id={shoe.id} >
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
      </section>
    )
}

export default ShopRender