import { Link } from "react-router-dom";
import ShoppingIcon from '../images/shopping-bag-blk.png'

const Header = () => {
    return (
        <header className="p-8 flex items-center justify-between font-myFont">
            <Link to='/' className='text-xl md:text-2xl lg:text-4xl font-bold transition duration-150 hover:invert'>Fresh
                <span className='text-slate-100'>Kicks</span>
            </Link>
            <section className='flex items-center gap-x-7 text-slate-300 text-xs md:text-base lg:text-xl'>
                <Link to='about' className='transition-opacity hover:opacity-50'>About</Link>
                <Link to='shop' className='transition-opacity hover:opacity-50'>Shop</Link>
                <Link to='contact' className='transition-opacity hover:opacity-50'>Contact</Link>
                <Link to='cart' className='transition-opacity hover:opacity-50'>
                    <img src={ShoppingIcon} className='w-3 md:w-5 lg:w-7 invert transition-opacity hover:opacity-50'></img>
                </Link>
            </section>
        </header>
    )
}
export default Header;