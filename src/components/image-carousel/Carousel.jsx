import React, { useState } from 'react'
import images from '../trendingShoes.json'
import Chevron1 from '../../images/chevron-left.png'
import Chevron2 from '../../images/chevron-right.png'
import { motion, AnimatePresence } from 'framer-motion'
import { sliderVariants } from './sliderVariants'

const ImageCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const [direction, setDirection] = useState('left')

    const handleNextImage = (e) => {
        setDirection('right')
        setImgIndex(prev=> prev+1 === images.length ? 0 : prev+1);
    }

    const handlePrevImage = (e) => {
        setDirection('left')
        setImgIndex(prev=> prev-1 < 0 ? images.length -1 : prev-1);
    }

    return(
        <section className='w-[80%] lg:w-[80%] relative flex justify-center'>
            <img src={Chevron1} className='w-4 md:w-10 cursor-pointer self-center' onClick={handlePrevImage}/>
            <AnimatePresence>
                <motion.img key={imgIndex} src={images[imgIndex].img}
                    variants={sliderVariants} initial={direction === 'right' ? 'hiddenRight': 'hiddenLeft'}
                    animate='visible' exit='exit'
                    className='bg-cover max-h-[40rem]'
                />
            </AnimatePresence>
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