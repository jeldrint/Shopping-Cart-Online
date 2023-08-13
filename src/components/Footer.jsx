import React from "react"
import GitIcon from '../images/github.png'
const Footer = () => {
    return(
        <footer className='bg-slate-400 w-full absolute bottom-0 text-lg font-mono flex justify-center items-center p-1'>
            <span className=""> 2023 {String.fromCharCode(169)} jeldrint{" "}
                <a href='https://github.com/jeldrint' target='_blank'>
                    <img src={GitIcon} className='w-5 inline-flex invert' />
                </a>{" "}
                || Icons by{" "}
                    <a href='https://icons8.com' target='_blank' className='underline'>Icons 8</a>
            </span>

        </footer>
    )
}

export default Footer;