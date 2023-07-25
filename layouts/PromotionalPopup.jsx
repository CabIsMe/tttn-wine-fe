'use client'
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from 'next/image';
import image from '../public/promtional-popup.jpg'
export default function PromotionalPopup(){
    const [showPopup, setShowPopup] = useState(false);

  // Add your logic to automatically show the popup
    useEffect(() => {
        setShowPopup(true);
    }, []);
    const contentStyle = {
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
                    <div className='relative flex flex-col justify-center items-center'>
                        <div className='relative object-cover w-[600px]'>
                            <Image src={image} alt='image' />
                            {/* <strong className='absolute text- top-[15%] right-[15%]'>50%</strong> */}
                            <div className='absolute text- top-[15%] right-[15%]'><SvgPercent /></div>
                            <p>1/1 - 2/2</p>
                        </div>
                        
                        <a className="close absolute right-1 top-0 cursor-pointer text-xl" onClick={() => setShowPopup(false)}>
                            &times;
                        </a>
                    </div>
                </div>
            </Popup>
        </>
    );
};

const SvgPercent = () => {
    return (
      <div>
        <style>
          {`
          ._text {
            white-space: nowrap;
            filter: url(#filter);
            outline: none;
            color: yellow;
          }
          ._text::selection {
            background: rgba(255, 255, 255, 0.2);
          }
        `}
        </style>
        <div >
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <filter id="filter">
                <feTurbulence
                type="turbulence"
                baseFrequency="0.002 0.008"
                numOctaves="2"
                seed="2"
                stitchTiles="stitch"
                result="turbulence"
                />
                <feColorMatrix
                type="saturate"
                values="30"
                in="turbulence"
                result="colormatrix"
                />
                <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 150 -15"
                in="colormatrix"
                result="colormatrix1"
                />
                <feComposite
                in="SourceGraphic"
                in2="colormatrix1"
                operator="in"
                result="composite"
                />
                <feDisplacementMap
                in="SourceGraphic"
                in2="colormatrix1"
                scale="15"
                xChannelSelector="R"
                yChannelSelector="A"
                result="displacementMap"
                />
            </filter>
            </svg>
        </div>
        <div className="_text" contentEditable="false" spellCheck="false">
          60%
        </div>
      </div>
    );
  };