import { Link } from "react-router-dom";
import ShoppingIcon from '../images/shopping-bag-blk.png'

const Header = () => {
    return (
        <header className="sticky top-0 z-10 w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between font-myFont bg-indigo-900 bg-opacity-90">
            <Link to='/' className='text-xl md:text-3xl lg:text-5xl font-bold transition duration-200 hover:invert'>Fresh
                <span className='text-slate-100'>Kicks</span>
            </Link>
            <section className='flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-slate-300 text-xs md:text-base lg:text-xl'>
                <Link to='shop' className='transition-opacity hover:opacity-500 hidden md:inline-block'>New Arrival</Link>
                <Link to='shop' className='transition-opacity hover:opacity-50'>Men</Link>
                <Link to='shop' className='transition-opacity hover:opacity-50'>Women</Link>
                <Link to='shop' className='transition-opacity hover:opacity-50'>Kids</Link>
                <Link to='contact' className='transition-opacity hover:opacity-50 hidden md:inline-block'>Contact</Link>
                <Link to='cart'>
                    <div className='flex items-center transition-opacity hover:opacity-50'>
                        <img alt='shopping-cart' src={ShoppingIcon} className='w-4 md:w-5 lg:w-7 invert'></img>
                        <span className='bg-white text-black text-xs md:text-sm px-1.5 py-0.25 rounded-xl'>100</span>
                    </div>
                </Link>
            </section>
        </header>
    )
}
export default Header;