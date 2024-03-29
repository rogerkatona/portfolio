import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Quote from "../components/quote";
import Promo from "../components/promo";
import Link from "next/link";
import Date from "../components/date";



export default function Photography() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen">

                <header className="bg-hero-blog min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                    <Hero id={6}/>
                </header>
                <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center md:py-12 py-6'>Featured Work</div>
                <section className="md:py-24 py-12 p-6 bg-gray.100">
                    <div className="flex flex-col max-w-7xl mx-auto"  >
                        <div className=''>
                            <img
                                src="/image/photography/purse_06015.jpg"
                                alt={'Featured Blog'}
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-tan.50">
                    <div className="max-w-7xl mx-auto ">
                        <div className="md:grid md:grid-cols-2 md:gap-6 xl:px-0 md:px-12 px-6 xl:py-24 py-6">
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse-0101.jpg"
                                        alt="purse-01"
                                    />

                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse-0105.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse-0102.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse-0104.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse-0103.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse_06015.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse_06014.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse_06013.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse_06012.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:py-0 py-6">
                                <div className='flex'>
                                    <img
                                        src="/image/photography/purse_06016.jpg"
                                        alt="purse-01"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Promo id={3}/>
            </div>
        </Layout>
    )
}