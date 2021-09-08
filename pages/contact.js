import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import  { Form } from "../components/form";
import { useRef } from 'react'

export const Contact = () => {

    const initialRef = useRef()

    return (
        <>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 py-12">
                    <header className='mb-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Contact
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            My passion to design and built things are only matched by my desire to serve my clients.
                        </div>
                    </header>
                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="flex flex-col justify-center md:p-16 p-6 bg-bg-contactModal bg-no-repeat bg-cover h-screen75vh">
                            <div className="">
                                <div className="text-lightGray md:text-2xl pb-6">I look forward to getting to know you and working on something great!</div>
                            </div>
                            <div className="text-lightGray md:text-base text-xs">
                                <div className="">Roger Katona</div>
                                <div>roger.katona@blueprospect.com</div>
                                <div>904-450-5173</div>
                            </div>
                        </div>
                        <div className="md:p-12 p-6 bg-gray w-full flex flex-col justify-center">
                            <Form initialRef={initialRef} />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contact;