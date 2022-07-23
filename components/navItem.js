// components/NavItem.js
import Link from "next/link";
import {useRouter} from "next/router";


export default function NavItem (props) {

    const router = useRouter()

    return (
        <div className="pb-3 flex flex-row items-center lg:pb-0">
            <Link href={props.path}>
                <a className={`${router.pathname.startsWith(props.path)  ? 'border-b text-sand' : ''} md:mx-3 pt-6 lg:py-0 text-xs font-regular uppercase hover:text-gray.050 text-gray.300`}>{props.label}</a>
            </Link>
        </div>
    )
}

