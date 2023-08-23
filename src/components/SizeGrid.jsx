import { useState } from "react";

const SizeGrid = ({shoe}) => {

    const [sizeSwitch, setSizeSwitch] = useState('')

    const className1 = 'cursor-pointer text-center border rounded p-3 transition-colors hover:bg-indigo-500 hover:text-white active:bg-indigo-700'
    const className2 = 'cursor-pointer text-center border rounded p-3 transition-colors active:bg-indigo-700 bg-indigo-700 text-white ring ring-indigo-300'

    return(
        <div className='grid grid-rows-3 gap-y-10'>
        { Object.entries(shoe.size).map(items=>{
            return(
                <div key={items[0]}>
                    <label htmlFor='shoe-sizes' className='text-sm md:text-md font-myFont'>{items[0].toLocaleUpperCase()}</label>
                    <section id='shoe-sizes' className='text-sm text-indigo-800 grid grid-cols-4 max-w-xs gap-2'>
                        {Object.entries(items[1]).map((size) =>{
                            let sizeID = items[0]+'-'+size[0];
                            return (
                                <>
                                    {
                                        size[1] ? 
                                        <button onClick={(e)=>{e.preventDefault(); setSizeSwitch(sizeID)}} className={sizeSwitch === sizeID ? className2 : className1} >
                                            {size[0]}
                                        </button> :
                                        <button disabled className='text-center border rounded py-2 bg-slate-100 text-slate-400'>{size[0]}</button>
                                    }
                                </>
                            )
                        })}
                    </section>
                </div>
            )
        })}
        </div>
    )
}

export default SizeGrid