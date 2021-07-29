import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HighlightContact from "../components/highlight_contact";



export default function Contact() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
                <div className="max-w-7xl mx-auto xl:px-0 px-12 min-h-screen">
                    <div className='mt-12'>
                        <header className='mb-16'>
                            <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                                About
                            </div>
                            <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                                A collection of articles to teach, inspire, and elevate our work as web designers and front-end developers.
                            </div>
                        </header>
                     </div>
                    <HighlightContact/>
                </div>
        </Layout>
    )
}