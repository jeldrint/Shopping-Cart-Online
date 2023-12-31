import { Link } from "react-router-dom";
import ShoppingIcon from '../images/shopping-bag-blk.png'
import { useEffect, useState } from "react";
import Cart from "./Cart";

const Header = ({cartItems,setCartItems}) => {
    const [displayCart, setDisplayCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCart =() => {
        setDisplayCart(true);
        setTotalPrice(cartItems.reduce((prev,curr)=>prev+(curr.price*curr.qty),0));
    }

    return (
        <header className="sticky top-0 z-10 w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between font-myFont bg-indigo-800">
            <Link to='/home' className='text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold transition duration-200 hover:invert'>Fresh
                <span className='text-slate-100'>Kicks</span>
            </Link>
            <section className='list-none cursor-pointer flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-slate-300 text-xs md:text-base lg:text-lg xl:text-xl'>
                <Link to='/shop' className='transition-opacity hover:opacity-50 hidden md:inline-block'>
                    Shop Now
                </Link>
                <Link to='/shop/new-arrival' className='transition-opacity hover:opacity-50 hidden md:inline-block' id='new-arrival'>
                    New Arrival
                </Link>
                <Link to='/shop/men' className='transition-opacity hover:opacity-50' id='men'>
                    Men
                </Link>
                <Link to='/shop/women' className='transition-opacity hover:opacity-50' id='women'>
                    Women
                </Link>
                <Link to='/shop/kids' className='transition-opacity hover:opacity-50' id='kids'>
                    Kids
                </Link>
                <Link to='/contact' className='transition-opacity hover:opacity-50 hidden md:inline-block'>
                    Contact
                </Link>
                <div onClick={handleCart} className='flex items-center transition-opacity hover:opacity-70'>
                    <img alt='shopping-cart' src={ShoppingIcon} className='w-4 md:w-5 lg:w-7 invert'></img>
                    <span className='bg-white text-black text-xs md:text-sm px-1.5 py-0.25 rounded-xl'>{cartItems.reduce((prev,curr)=>prev+curr.qty,0)}</span>
                </div>
            </section>
            <Cart cartItems={cartItems} setCartItems={setCartItems} displayCart={displayCart} setDisplayCart={setDisplayCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
        </header>
    )
}
export default Header;