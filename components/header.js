import NavBar from '../components/navBar'
import Link from "next/link";
import { useState} from 'react'
import navItems from "../data/navItems";


export default function Header() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    return (
        <header className="bg-primaryLight lg:py-0 py-4">
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-7xl ">
                <section className="xl:px-0 md:px-12 px-6 ">
                    <Link href='/'>
                        <a>
                            <div className="flex flex-row items-center">
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
                                <span className="md:text-2xl text-xl font-banner uppercase tracking-wide text-white hover:text-sand md:pl-6 pl-2">
                                    Roger Katona
                                </span>
                            </div>
                        </a>
                    </Link>
                </section>
                <div>
                    <section className="absolute md:right-10 right-4 top-6">
                        <button
                            className="lg:hidden text-secondary hover:text-primary focus:appearance-none border border-transparent"
                            onClick={handleClick}>
                            <svg
                                className='w-6 h-6 '
                                fill='none'
                                stroke='#FFFFFF'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </section>
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:items-center xl:px-0 md:px-12 px-6 py-6`}>
                            <NavBar navItems={navItems}/>
                            <Link href='/contact'>
                                <button className="text-white text-sm uppercase hover:text-sand  lg:mt-0 mt-4 py-2 px-6 border hover:border-sand lg:ml-6 ml-3 ">
                                    Contact
                                </button>
                            </Link>
                    </section>
                </div>
            </div>
        </header>
    )
}