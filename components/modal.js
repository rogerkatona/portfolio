import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./form";
import Link from "next/link";


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="relative" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <header className="flex-shrink-0 fixed top-4 left-4 z-30">
                <Link href='/'>
                    <a className=''>
                        <img
                            src="/image/logo-bp.png"
                            height={71}
                            width={193}
                            alt={'logo'}
                        />
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
                <div className="flex flex-row">
                    <div className="flex md:bg-bg-contactModal h-screen p-4 items-center">
                        <div className="md:flex md:flex-col md:p-8 md:block hidden">
                            <div  className="text-medGray">
                                <div className="flex flex-col md:pb-12">
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

                    <div className="p-16 w-full flex flex-col justify-center">
                        <Form />
                    </div>
                </div>

            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;
