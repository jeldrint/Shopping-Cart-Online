import Image from '../images/wallpaper.png'

const ImageCarousel = () => {
    return(
        <>
            <section className='m-3 w-[80%]'>
                <img src={Image} />
            </section>
        </>
    )
}

export default ImageCarousel;