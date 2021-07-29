import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Services() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="max-w-7xl mx-auto">
                <section className='mt-12'>
                    <header className='mb-16'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Services
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            A collection of articles to teach, inspire, and elevate our work as web designers and front-end developers.
                        </div>
                    </header>
                </section>
            </div>

        </Layout>
    )
}