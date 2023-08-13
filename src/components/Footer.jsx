import React from "react"
import GitIcon from '../images/github.png'
const Footer = () => {
    return(
        <footer className='w-full absolute bottom-0 text-xs md:text-base lg:text-lg font-myFont flex justify-center items-center p-1 text-slate-300'>
            <span className=""> 2023 {String.fromCharCode(169)} jeldrint{" "}
                <a href='https://github.com/jeldrint' target='_blank'>
                    <img src={GitIcon} className='w-5 inline-flex invert transition-opacity hover:opacity-50' />
                </a>{" "}
                || Icons by{" "}
                    <a href='https://icons8.com' target='_blank' className='underline transition-opacity hover:opacity-50'>Icons 8</a>
            </span>

        </footer>
    )
}

export default Footer;