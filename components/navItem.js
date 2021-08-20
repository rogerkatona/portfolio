// components/NavItem.js
import Link from "next/link";
import {useRouter} from "next/router";


export default function NavItem (props) {

const router = useRouter()

let articlePath;

function articlePathOptions(){
    const router = useRouter()
    if (router.pathname === '/articles/[...id].js'){
        articlePath = '/articles'
        console.log (router.pathname)
    } else {
        articlePath = '/articles'
    }
}



return (
    <div className="flex flex-row lg:pb-0">
        <Link href={props.path}>
            <a className={`${router.pathname === props.path ? 'border-b text-sand' : ''} mx-3 my-3 lg:py-0 text-sm font-body uppercase  hover:text-sand text-white`}>{props.label}</a>
        </Link>
    </div>
    )
}

