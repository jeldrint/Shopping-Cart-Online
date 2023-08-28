
const Cart = ({cartItems, setCartItems, displayCart, setDisplayCart}) => {
    const handleAdd = (e,shoe) => {
        e.preventDefault();
        shoe.qty += 1;
    }
    const handleRemove = (e,shoe) => {
        e.preventDefault();
        shoe.qty -= 1;
    }
    const handleChange = (e) => {
        //setCartItems()
    }
    return(
            <section className={displayCart ? 'z-10 overflow-y-auto w-[30rem] h-[80%] bg-white shadow-lg fixed right-[2%] top-[2%] p-4 rounded': 'hidden'}>
                <>
                    <span onClick={()=>setDisplayCart(false)} className='cursor-pointer'>Go back</span>
                    {cartItems.map((shoe,idx)=>{
                        let btnStyle ='rounded bg-gray-100 p-2 hover:bg-gray-200 active:bg-gray-300';
                        return(
                            <div key={idx} className='flex p-3 border-2 my-2 rounded'>
                                <div>
                                    <img alt={shoe.name} src={shoe.img} className='max-w-[100px]'/>
                                </div>
                                <div className='flex flex-col text-xs'>
                                    <span>{shoe.name}</span>
                                    <span>{shoe.size.toLocaleUpperCase()}</span>
                                    <form>
                                        <label htmlFor='qty-input'>QTY: </label>
                                        <div className='flex gap-x-1 text-sm'>
                                            <button className={btnStyle} onClick={e=>handleRemove(e,shoe)}>-</button>
                                            <input id='qty-input' className='rounded border max-w-[30px] text-center' value={shoe.qty} onChange={handleChange}/>
                                            <button className={btnStyle} onClick={(e)=>handleAdd(e,shoe)}>+</button>
                                        </div>
                                    </form>
                                    <span className='font-bold text-sm'>{'\u20B1 '}{(Math.round(shoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                                </div>
                            </div>
                        )
                    })}
                </>
            </section>
        )
}

export default Cart;