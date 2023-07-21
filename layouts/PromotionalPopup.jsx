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

    return (
        <Popup open={showPopup} modal onClose={() => setShowPopup(false)}>
        <div style={{border: "none", width: "fit-content", padding:"0"}} className="popup-content">
            <div className='relative flex flex-col justify-center items-center'>
                <div><Image src={logo} alt='logo'/></div>
                <p>Cheer to You!</p>
                <button className='absolute right-0 top-0' onClick={() => setShowPopup(false)}>Close</button>
            </div>


            
        </div>
        </Popup>
    );
};

