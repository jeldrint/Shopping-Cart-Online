import React, { useState } from 'react'
import images from '../shoeAPI.json'
import Chevron1 from '../../images/chevron-left.png'
import Chevron2 from '../../images/chevron-right.png'
import { motion, AnimatePresence } from 'framer-motion'
import { sliderVariants } from './sliderVariants'

const ImageCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const handleNextImage = (e) => {
        setImgIndex(prev=> prev+1 === Object.values(images.trending).length ? 0 : prev+1);
    }

    const handlePrevImage = (e) => {
        setImgIndex(prev=> prev-1 < 0 ? Object.values(images.trending).length -1 : prev-1);
    }

    return(
        <section className='w-[80%] md:w-[90%] lg:w-full relative flex justify-center'>
            <img src={Chevron1} className='w-4 md:w-10 cursor-pointer self-center' onClick={handlePrevImage}/>
            <img key={imgIndex} src={Object.values(images.trending)[imgIndex].img}
                className='bg-cover max-h-[40rem]'
            />
            <img src={Chevron2} className='w-4 md:w-10 cursor-pointer self-center' onClick={handleNextImage}/>
            <span className='bg-white text-black absolute bottom-0 left-[50%]'>
                <span>o</span>
                <span>o</span>
                <span>o</span>
                <span>o</span>
                <span>o</span>
            </span>
        </section>
    )
}

export default ImageCarousel;