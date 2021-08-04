import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import  { Form } from "../../components/form";
import {useEffect, useRef, useState} from "react";
import {useScreen} from "../../lib/useScreenSize";

export default function WebsiteAnalysisContact() {

    const [screenSize, setScreenSize] = useState(false)
    const initialRef = useRef()

    useEffect(() => {
        if (useScreen('md')  ){
            setScreenSize(true)
        }
    }, [])

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*<p>Status: {global.form.showSuccess}</p>*/}
            {/*<Toast/>*/}
            <div className="max-w-7xl mx-auto xl:px-0 px-12  min-h-screen">
                <header className='my-12'>
                    <img
                        className=""
                        src={`${screenSize ? '/image/banner-lg-website-analysis.png' : '/image/banner-sm-website-analysis.png'}`}
                        alt="Website analysis banner graphic"
                    />
                </header>
                <div className="flex flex-col md:flex-row justify-center h-screen65vh">
                    <div className="flex flex-col justify-center md:p-16 p-8 md:mt-0 mt-6 bg-bg-contactModal bg-no-repeat bg-cover ">
                        <div className="text-lightGray">
                            <div className="flex flex-col md:pb-12">
                                <span>Price:</span>
                                <p className="text-lightGray text-6xl">$159.00</p>
                            </div>
                            <div className="flex flex-col md:pb-12">
                                <p className="text-lightGray">Enter your information in the form and submit your request for a website analysis.  I look forward to working
                                with you and making your website great!</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="">Roger Katona</span>
                                <p>roger.katona@blueprospect.com</p>
                                <p>904-450-5173</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:p-16 p-8 bg-gray w-full flex flex-col justify-center">
                        <Form initialRef={initialRef} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}