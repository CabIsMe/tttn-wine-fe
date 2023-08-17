'use client'
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from 'next/image';
import image from '../public/X.png'
export default function CheckAgePopup({
    onShowPopup
}){
    const [showPopup, setShowPopup] = useState(false);
  // Add your logic to automatically show the popup
    useEffect(() => {
        setShowPopup(true)
      
    }, []);
    const contentStyle = {
        width : 'fit-content'
    };
    const arrowStyle = { color: '#000' }; // style for an svg element
    const textStyle = {
      div: {
        fontFamily: "'Calligraffitti', cursive",
        fontWeight: 700,
        fontSize: '3rem',
        textShadow: '-15px 5px 20px #ced0d3, 5px 5px 0px #FFB650, 10px 10px 0px #FFD662, 15px 15px 0px #FF80BF, 20px 20px 0px #EF5097, 25px 25px 0px #6868AC, 30px 30px 0px #90B1E0',
        letterSpacing: '0.02em',
        textAlign: 'center',
        color: '#F9f1cc',
      },
      div2: {
        fontFamily: "'Calligraffitti', cursive",
        fontWeight: 500,
        fontSize: '1.5rem',
        textShadow: '-15px 5px 20px #ced0d3, 5px 5px 0px #FFB650, 10px 10px 0px #FFD662, 15px 15px 0px #FF80BF, 20px 20px 0px #EF5097, 25px 25px 0px #6868AC, 30px 30px 0px #90B1E0',
        letterSpacing: '0.02em',
        textAlign: 'center',
        color: '#F9f1cc',
      },
      article: {
        background: 'linear-gradient(to right, #4b6cb7, #182848)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      },
      h1: {
        fontSize: '22px',
        lineHeight: '1.1',
      },
    };
    return (
        <>
             <Popup open={showPopup} 
                modal
                contentStyle={contentStyle} 
                onClose={() => {
                    setShowPopup(false)
                    onShowPopup()
                    }}>
                <div className="border-none w-fit "> {/* Custom size and margin */}
                    <div className='relative flex flex-col justify-center items-center'>
                        <div className='relative object-cover w-fit'>
                            <Image src={image} alt='image' />
                        </div>
                        <a className="close absolute right-1 top-0 cursor-pointer text-xl text-white" onClick={() => {
                            setShowPopup(false)
                            onShowPopup()
                            }}>
                            &times;
                        </a>
                        <p className='absolute bottom-0 text-center text-white text-base px-2 font-mono'>Our products are not for use by children under the age of 18 or pregnant women.
                            Enjoy responsibly and avoid driving while intoxicated.
                            The website only introduces wine products to those over the age of 18.
                        </p>
                    </div>
                </div>
            </Popup>
        </>
    );
};