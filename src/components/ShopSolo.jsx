import { useParams } from "react-router-dom"
import shoesAPI from './shoeAPI.json'

const ShopSolo = () => {
    const {id} = useParams();

    return (
        <>
            { Object.entries(shoesAPI).filter(items=> items[0]=== 'general')
                .map(shoes => Object.values(shoes[1]).filter(shoe => shoe.id === id)
                .map(shoe => {
                    return(
                        <section className='w-full flex flex-col justify-center items-center md:flex-row md:items-center md:justify-evenly'>
                            <div>
                                <img src={shoe.img} className='max-h-[40rem]'/>
                            </div>
                            <div className='flex flex-col justify-start gap-y-3 md:gap-y-5 lg:gap-y-7'>
                                <span className='text-lg font-sans font-bold'>{shoe.name}</span>
                                <div className='grid grid-rows-3 gap-y-5'>
                                {
                                    Object.entries(shoe.size).map(items=>{
                                        //(console.log(Object.values(items[1])))
                                        return(
                                            <form>
                                                <label htmlFor='shoe-sizes' className='text-sm md:text-md font-myFont'>{items[0].toLocaleUpperCase()}</label>
                                                <section id='shoe-sizes' className='text-sm text-indigo-800 grid grid-cols-4 max-w-sm gap-2'>
                                                    {Object.keys(items[1]).map(size =>{
                                                        return <div className='cursor-pointer text-center border rounded py-2 transition-colors hover:bg-indigo-500 hover:text-white active:bg-indigo-700 focus:outline-none focus-within:ring focus:bg-indigo-900'>{size}</div>
                                                    })}
                                                </section>
                                            </form>
                                        )
                                    })
                                }                                        
                                </div>
                            </div>
                        </section>
                    )
                }))
            }
        </>
    )
}

export default ShopSolo