import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Form from "../components/form";
import Toast from "../components/toast";
// import global from "../lib/global"

export default function Contact() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
                {/*<p>Status: {global.form.showSuccess}</p>*/}
                {/*<Toast/>*/}
                    <div className="max-w-7xl mx-auto xl:px-0 px-12 min-h-screen">
                            <header className='my-12'>
                                <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                                    Contact
                                </div>
                                <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                                    Our passion to design and built things are only matched by our desire to serve our clients.
                                </div>
                            </header>
                    <div className="flex flex-col md:flex-row justify-center h-screen65vh">
                            <div className="flex flex-col justify-center md:p-16 p-8 bg-bg-contactModal bg-no-repeat bg-cover ">
                                <div className="">
                                    <p className="text-lightGray text-2xl md:pb-6 pb-2">I look forward to getting to know you and working on something great!</p>
                                </div>
                                <div className="text-lightGray">
                                    <div>904-450-5173</div>
                                </div>
                            </div>
                            <div className="md:p-16 p-8 bg-gray w-full flex flex-col justify-center">
                                <Form/>
                            </div>
                    </div>
                    </div>
        </Layout>
    )
}