import { useParams } from "react-router-dom"
import shoesAPI from './shoeAPI.json'
import ShoePrice from "./ShoePrice";
import SizeGrid from "./SizeGrid";

const ShopSolo = () => {
    const {id} = useParams();

    return (
        <>
            { Object.entries(shoesAPI).filter(items=> items[0]=== 'general')
                .map(shoes => Object.values(shoes[1]).filter(shoe => shoe.id === id)
                .map(shoe => {
                    return(
                        <section className='h-full w-full flex flex-col items-center md:flex-row md:justify-evenly'>
                            <div>
                                <img alt={shoe.name} src={shoe.img} className='max-h-[40rem]'/>
                            </div>
                            <div className='flex flex-col justify-start gap-y-5 md:gap-y-9 lg:gap-y-12'>
                                <span className='text-lg font-sans font-bold'>{shoe.name}</span>
                                <SizeGrid shoe={shoe} />
                                <div className='text-xl'>
                                    <ShoePrice shoe={shoe} />
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