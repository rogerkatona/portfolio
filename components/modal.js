import React from 'react';
import ReactDOM from 'react-dom';
import  { Form } from "./form";
import Link from "next/link";


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <>
        <div className="relative" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <header className="flex-shrink-0 fixed top-4 left-4 z-30">
                <Link href='/'>
                    <a className=''>
                        <div className="">
                            <svg

                                viewBox={'0 0 115 115'}
                                width={'40'}
                                height={'40'}
                            >
                                <circle
                                    fill="#61798D"
                                    cx="57.5" cy="57.5" r="57.5"/>
                                <path
                                    fill="#DAD5C4"
                                    d="M36.43,79.48H20.74l16.81-25.5l-16.6-22.69h15.27l11.07,16.25V62.6L36.43,79.48z M64.24,79.48H50.23V31.29
			h14.01V79.48z"/>
                                <path
                                    fill="#FFFFFF"
                                    d="M53.27,31.29h14.01v48.19H53.27V31.29z M73.02,63.09h-2.8V52.37h2.38c1.45,0,2.54-0.06,3.29-0.17
			c0.75-0.12,1.33-0.34,1.75-0.67c0.37-0.33,0.63-0.82,0.77-1.47c0.14-0.65,0.21-1.61,0.21-2.87s-0.07-2.23-0.21-2.91
			c-0.14-0.68-0.4-1.18-0.77-1.51c-0.38-0.33-0.92-0.54-1.65-0.63c-0.72-0.09-1.86-0.14-3.4-0.14h-2.38V31.29h7.21
			c3.32,0,6,0.33,8.06,0.98c2.05,0.66,3.64,1.66,4.76,3.01c1.03,1.26,1.72,2.83,2.07,4.69c0.35,1.87,0.53,4.27,0.53,7.21
			c0,3.78-0.35,6.7-1.05,8.75c-0.98,2.62-2.71,4.46-5.18,5.53l7.29,18H79.18L73.02,63.09z"/>
                            </svg>
                        </div>
                    </a>
                </Link>
            </header>
            <div className="w-full h-full z-20 bg-white fixed top-0 left-0 ">
                <header className="fixed right-0">
                    <div className="modal-close cursor-pointer z-20 p-4">
                        <button type="button" className="text-white" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">
                                <svg className="fill-primary text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </header>
                <div className="flex md:flex-row flex-col max-w-7xl">
                    <div className="flex bg-bg-contactModal md:h-screen p-4 items-center mx-auto">
                        <div className="p-8 mt-12">
                            <div  className="text-medGray">
                                <div className="flex flex-col pb-12">
                                    <p className="text-lightGray">Let&apos;s connect. I look forward to getting to know you and working on something great!</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="">Roger Katona</span>
                                    <p>roger.katona@blueprospect.com</p>
                                    <p>904-450-5173</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 w-full flex flex-col justify-center">
                        <Form />
                    </div>
                </div>

            </div>
        </div>
    </>, document.body
) : null;

export default Modal;
