import { useParams } from "react-router-dom"
import shoesAPI from './shoeAPI.json'
import ShoePrice from "./ShoePrice";
import SizeGrid from "./SizeGrid";
import { useState } from "react";
import CartIcon from '../images/shopping-bag-blk.png'

const ShopSolo = ({cartItems,setCartItems}) => {
    const [sizeSwitch, setSizeSwitch] = useState(null)
    const [errMsg, setErrMsg] = useState('')
    const {id} = useParams();

    const addToCart = (e,shoe) => {
        e.preventDefault();
        let shoePrice = shoe.price - shoe.price * shoe.discount;
        if(sizeSwitch){
            if(cartItems.find(item=>item.name === shoe.name && item.size === sizeSwitch)){
                setErrMsg('duplicate-shoe')
            }else{
                setCartItems(prev=>[...prev,{id: shoe.id + '-' + sizeSwitch, name: shoe.name, size: sizeSwitch, price: shoePrice, img: shoe.img, qty:1}])
                setErrMsg('')
            }
        }else{
            setErrMsg('no-size-selected')
        }
    }

    return (
        <>
            { Object.entries(shoesAPI).filter(items=> items[0]=== 'general')
                .map(shoes => Object.values(shoes[1]).filter(shoe => shoe.id === id)
                .map(shoe => {
                    return(
                        <section key={shoe.id} className='p-10 w-full flex flex-col items-center md:flex-row md:justify-center'>
                            <div>
                                <img alt={shoe.name} src={shoe.img} className='max-h-[40rem]'/>
                            </div>
                            <form className='flex flex-col justify-start items-center gap-y-5 md:gap-y-3 lg:gap-y-2'>
                                <h1 className='text-lg font-sans font-bold text-center'>{shoe.name}</h1>
                                {errMsg === 'no-size-selected' ?
                                    <h3 className={'text-md font-myFont text-red-500'}>No size specified.</h3> :
                                errMsg === 'duplicate-shoe' ?
                                    <h3 className={'text-md font-myFont text-red-500'}>Shoe already added to cart.</h3> :
                                    <h3 className='text-md font-myFont text-black opacity-0'>Shoe added.</h3>
                                }
                                <SizeGrid shoe={shoe} sizeSwitch={sizeSwitch} setSizeSwitch={setSizeSwitch} />
                                <div className='flex w-full justify-evenly items-center'>
                                    <div className='text-2xl font-bold'>
                                        <ShoePrice shoe={shoe} />
                                    </div>
                                    <button onClick={e=>addToCart(e,shoe)} className='px-8 py-3 rounded-full flex flex-col items-center justify-between
                                     transition-colors bg-indigo-700 text-slate-200 hover:bg-indigo-800 active:bg-indigo-900 '>
                                        <span>Add to Cart</span>
                                        <img alt='cart-icon' src={CartIcon} className='max-w-[20px] invert'/>
                                    </button>
                                </div>
                            </form>
                        </section>
                    )
                }))
            }
        </>
    )
}

export default ShopSolo