import { useState } from "react";

const Cart = ({cartItems, setCartItems, displayCart, setDisplayCart, totalPrice, setTotalPrice}) => {

    const handleChange = (e,cartShoe) => {
        let tempArr = cartItems;
        tempArr[tempArr.findIndex(item=>item.name === cartShoe.name && item.size === cartShoe.size)].qty = parseInt(e.target.value);
        setCartItems(tempArr);
        setTotalPrice(cartItems.reduce((prev,curr)=>prev+(curr.price*curr.qty),0));
    }

    return(
            <section className={displayCart ? 'z-10 overflow-y-auto w-[30rem] h-[80%] bg-white shadow-lg fixed right-[2%] top-[2%] p-4 rounded': 'hidden'}>
                <span onClick={()=>setDisplayCart(false)} className='cursor-pointer'>Go back</span>
                {cartItems.map((cartShoe,idx)=>{
                    return(
                        <>
                            <div key={idx} className='flex p-3 border-2 my-2 rounded'>
                                <div>
                                    <img alt={cartShoe.name} src={cartShoe.img} className='max-w-[100px]'/>
                                </div>
                                <div className='flex flex-col text-xs gap-y-1'>
                                    <span>{cartShoe.name}</span>
                                    <span>{cartShoe.size.toLocaleUpperCase()}</span>
                                    <form className='flex gap-x-2 items-center'>
                                        <div>
                                            <label htmlFor='qty-input'>QTY: </label>
                                            <input defaultValue={cartShoe.qty} min={1} type='number' id={cartShoe.size} className='rounded border max-w-[30px] text-center text-sm' onChange={e=>handleChange(e,cartShoe)}/>
                                        </div>
                                        <span className=' text-xs'>x {'\u20B1 '}{(Math.round(cartShoe.price*100)/100).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                                    </form>
                                </div>
                            </div>
                        </>
                )
                })}
                <span className={cartItems.length === 0 ? 'opacity-0': 'font-bold font-sans text-lg tracking-wider text-indigo-800'}>TOTAL: {'\u20B1 '}{totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>

            </section>
        )
}

export default Cart;