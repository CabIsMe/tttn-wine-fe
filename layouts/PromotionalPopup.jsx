'use client'
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from 'next/image';
import image from '../public/promtional-popup.jpg'
import imageSale from '../public/sale.png'
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
                onClose={() => setShowPopup(false)}>
                <div className="border-none w-fit "> {/* Custom size and margin */}
                    <div className='relative flex flex-col justify-center items-center'>
                        <div className='relative object-cover w-[600px]'>
                            <Image src={image} alt='image' />
                            {/* <strong className='absolute text- top-[15%] right-[15%]'>50%</strong> */}
                            <div className='absolute top-[14%] right-[20%]'>
                              <div style={textStyle.div}>50%</div>
                            </div>
                            <Image className='absolute w-20 top-32 right-4 rotate-12' src={imageSale} alt='image' />
                            <article style={textStyle.article} className='absolute top-[40%] right-[18%]'>
                              <h1 style={textStyle.h1}>
                                01/01/2023-<p>02/02/2023</p>
                              </h1>
                            </article>
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