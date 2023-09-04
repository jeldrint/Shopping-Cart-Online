
const Cart = ({cartItems, setCartItems, displayCart, setDisplayCart, totalPrice, setTotalPrice}) => {

    const handleChange = (e,cartShoe) => {
        let tempArr = cartItems;
        tempArr[tempArr.findIndex(item=>item.id === cartShoe.id)].qty = parseInt(e.target.value);
        setCartItems(tempArr);
        setTotalPrice(cartItems.reduce((prev,curr)=>prev+(curr.price*curr.qty),0));
    }
    const removeItem = (e,cartShoe) =>{
        e.preventDefault();
        let removedItemPrice = cartShoe.price * cartShoe.qty
        setCartItems(current=>current.filter(item=> item.id != cartShoe.id))
        setTotalPrice(cartItems.reduce((prev,curr)=>prev+(curr.price*curr.qty),0)-removedItemPrice);
    }

    return(
            <section className={displayCart ? 'z-10 overflow-y-auto w-[20rem] sm:w-[30rem] h-[80%] bg-white shadow-lg fixed right-[2%] top-[2%] p-4 rounded': 'hidden'}>
                <span onClick={()=>setDisplayCart(false)} className='cursor-pointer'>Go back</span>
                {cartItems.map((cartShoe)=>{
                    const id = cartShoe.name + '-' + cartShoe.size
                    return(
                        <>
                            <div key={id} className='flex p-3 border-2 my-2 rounded'>
                                <div>
                                    <img alt={cartShoe.name} src={cartShoe.img} className='max-w-[100px]'/>
                                </div>
                                <div className='flex flex-col items-start text-xs gap-y-1'>
                                    <span className='font-bold'>{cartShoe.name}</span>
                                    <span>{cartShoe.size.toLocaleUpperCase()}</span>
                                    <form className='flex gap-x-2 items-center'>
                                        <div>
                                            <label htmlFor='qty-input'>QTY: </label>
                                            <input defaultValue={cartShoe.qty} min={1} type='number' className='rounded border max-w-[30px] text-center text-sm' onChange={e=>handleChange(e,cartShoe)}/>
                                        </div>
                                        <span className=' text-xs'>x {'\u20B1 '}{(Math.round(cartShoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                                    </form>
                                    <button className='text-white rounded p-1 bg-red-700 opacity-30 hover:opacity-100 active:bg-red-900 transition-opacity' onClick={e=>removeItem(e,cartShoe)}>Remove Item</button>
                                </div>
                            </div>
                        </>
                )
                })}
                {
                    cartItems.length === 0 ? 
                    <div className='h-full text-center font-bold font-sans text-xl tracking-wider text-indigo-800'>No items in cart yet.</div>
                    : <span className='font-bold font-sans text-lg tracking-wider text-indigo-800'>TOTAL: {'\u20B1 '}{totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                }

            </section>
        )
}

export default Cart;