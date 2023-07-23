'use client'
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from 'next/image';
import logo from '../public/logo.png'
export default function PromotionalPopup(){
    const [showPopup, setShowPopup] = useState(false);

  // Add your logic to automatically show the popup
    useEffect(() => {
        setShowPopup(true);
    }, []);
    const contentStyle = {
        // background: '#000', 
        // padding :'0'
        width : 'fit-content'
    };
    const arrowStyle = { color: '#000' }; // style for an svg element
    return (
        <>
            <Popup open={showPopup} 
                modal
                contentStyle={contentStyle} 
                onClose={() => setShowPopup(false)}>
                <div className="border-none w-fit "> {/* Custom size and margin */}
                    <div className='relative flex flex-col justify-center items-center px-10 py-5'>
                        <div className='object-cover w-[100px]'><Image src={logo} alt='logo' /></div>

                        <p>Cheer to You!</p>
                        <a className="close absolute right-0 top-0 cursor-pointer scale-125" onClick={() => setShowPopup(false)}>
                            &times;
                        </a>
                    </div>
                </div>
            </Popup>
        </>
    );
};

