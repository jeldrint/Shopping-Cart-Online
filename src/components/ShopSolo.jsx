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
                        <>
                            <section className='w-[80%] md:w-[90%] lg:w-full flex flex-col justify-center items-center'>
                                <span className='text-xl font-myFont'>{shoe.name}</span>
                                <img src={shoe.img} className='max-h-[40rem]'/>
                            </section>
                        </>
                    )
                }))
            }
        </>
    )
}

export default ShopSolo