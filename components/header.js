import NavBar from '../components/navBar'
import Link from "next/link";
import { useState} from 'react'
import navItems from "../data/navItems";
import {useRouter} from "next/router";
import Modal from "./modal";
import useModal from "../lib/useModal";


export default function Header() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const router = useRouter()
    const {isShowing, toggle} = useModal();

    return (
        <header className={`${router.pathname.startsWith("/campaign/")  ? 'bg-medBlue.500' : 'bg-lightBlue.700'}`}>
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-7xl py-6 xl:px-0 md:px-12 px-6">
                <section>
                    <Link href='/'>
                        <a>
                            <div className="flex flex-row items-center ">
                                <div className="">
                                    <img
                                        src="/image/logo/rogerkatona-simple.png"
                                        width={200}
                                        alt="Roger Katona - Logo"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </section>
                <div>
                    <section className="absolute lg:right-10 right-6 top-8">
                        <button
                            className="lg:hidden text-secondary hover:text-primary focus:appearance-none border-none"
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
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:my-0 my-4`}>
                            <NavBar navItems={navItems}/>
                             <Link href=''>
                                <button
                                    onClick={toggle}
                                    className="text-xs text-medBlue.500 uppercase px-3 py-2 lg:ml-3 lg:mt-0 mt-6 rounded-lg bg-tan.100 hover:bg-tan.500 hover:text-medBlue.500">
                                    Contact
                                </button>
                            </Link>
                    </section>
                </div>
            </div>
            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </header>

    )
}