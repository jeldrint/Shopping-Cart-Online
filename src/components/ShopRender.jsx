import ShoePrice from "./ShoePrice"

const ShopRender = ({shoe}) => {
    return (
        <>
            <img alt={shoe.name} src={shoe.img} className='object-cover' />
            <div className='w-full h-full font-myFont text-xs grid grid-rows-2 items-stretch'>
                <span>{shoe.name}</span>
                <div aria-label='shoe-price' className='text-sm self-end'>
                    <ShoePrice shoe={shoe} />
                </div>
            </div>
      </>
    )
}

export default ShopRender