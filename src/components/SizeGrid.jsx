
const SizeGrid = ({shoe}) => {
    return(
        <div className='grid grid-rows-3 gap-y-10'>
        { Object.entries(shoe.size).map(items=>{
            return(
                <form>
                    <label htmlFor='shoe-sizes' className='text-sm md:text-md font-myFont'>{items[0].toLocaleUpperCase()}</label>
                    <section id='shoe-sizes' className='text-sm text-indigo-800 grid grid-cols-4 max-w-sm gap-2'>
                        {Object.entries(items[1]).map(size =>{
                            return (
                                <>
                                    { size[1] ? 
                                    <button onClick={e=>e.preventDefault()} className='cursor-pointer text-center border rounded py-2 transition-colors hover:bg-indigo-500 hover:text-white active:bg-indigo-700 focus:bg-indigo-300 focus-within:ring focus-within:ring-indigo-500'>
                                        {size[0]}
                                    </button> :
                                    <button disabled className='text-center border rounded py-2 bg-slate-100 text-slate-400'>{size[0]}</button>
                                    }

                                </>
                            )
                        })}
                    </section>
                </form>
            )
        })}                                        
        </div>
    )
}

export default SizeGrid