import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="p-8 flex items-center justify-between font-myFont">
            <Link to='/'><span className='text-3xl'>FreshKicks</span></Link>
            <section className='flex gap-x-3 text-slate-400'>
                <Link to='about'>About</Link>
                <Link to='shop'>Shop</Link>
                <Link to='contact'>Contact</Link>
            </section>
        </header>
    )
}
export default Header;