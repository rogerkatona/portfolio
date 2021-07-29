import Link from "next/link";
import NavBar from "./navBar";
import navItems from "../data/navItems";


export default function Footer() {


    return (
        <footer className="flex justify-center p-24 bg-primary text-white">
            <div className='flex md:flex-row flex-col'>
                <NavBar navItems={navItems}/>
                <Link href='/contact'>
                    <button className="text-white text-sm uppercase hover:text-sand py-1 px-8 border hover:border-sand lg:mt-0 lg:ml-6">
                        Contact
                    </button>
                </Link>
            </div>
        </footer>
    )
}