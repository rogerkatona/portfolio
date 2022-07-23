import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from "react-player";



const ModalVideo = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

    <>
        <div className="relative" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="w-full h-full z-20 bg-blue.800 fixed top-0 left-0 flex flex-row">

                <section className="fixed right-0">
                    <div className="modal-close cursor-pointer z-20 p-4">
                        <button type="button" className="text-white.100" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">
                                <svg className="fill-current text-white.700" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto flex flex-col justify-center xl:w-3/5 w-full px-12 ">
                    <div className="flex flex-row justify-center h-screen items-center lg:mx-0 mx-4">
                        <ReactPlayer

                            controls={true}
                            playing={true}
                            url="https://youtu.be/uHmUL09JPb4"
                        />
                        <div>&nbsp;</div>
                    </div>
                </section>

            </div>
        </div>
    </>, document.body
) : null;

export default ModalVideo;
