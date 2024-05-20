import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from "../components/date";
import {useEffect, useState} from "react";
import Hero from "../components/hero";
import Quote from "../components/quote";
import Promo from "../components/promo";


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({allPostsData}) {

    const [active, setActive] = useState(false)

    let featuredPosts = allPostsData.filter(function (featured){
        return featured.isFeatured === 'true' && featured.type === 'work'
    })

    useEffect(() => {
        function scrollMove(){
            const link = document.querySelector('Link')
            const mOut = document.addEventListener(mouseout, '')
            if ([link.href === '/articles/:id*']){
                setActive(true)
                return () => {
                    link.removeEventListener("mouseout", handleMouseOut)
                }
            }
        }
    },[active])

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen">

                <header className="bg-hero-client min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                    <Hero id={3}/>
                </header>
                <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center py-12'>Featured Client</div>
                <section className="py-6 bg-gray.100">
                    {featuredPosts
                        .map(featured =>
                            <section
                                key={featured.id}
                                className={`flex flex-col p-6 ${featured.featuredID % 2 !== 0  ? 'bg-gray.100' : 'bg-gray.100'}`}>

                                <div className={`flex  flex-col  max-w-7xl mx-auto  ${featured.featuredID % 2 !== 0  ? 'lg:flex-row-reverse ' : 'lg:flex-row '}`}>
                                    <div className=''>
                                        <img
                                            src={featured.bannerSMImageSource}
                                            width={1000}
                                            alt={'Featured Client'}
                                        />
                                    </div>
                                    <div className={`lg:w-4/5 w-full lg:pt-0 pt-6 ${featured.featuredID % 2 !== 0  ? 'lg:pr-6' : 'lg:pl-6'}`}>
                                        <div className='font-bebasNeue text-4xl text-gray.700 pt-4'>
                                            {featured.title}
                                        </div>
{/*                                        <div className={` text-xs pt-1 uppercase ${featured.type === 'about'  ? 'hidden' : 'block'}`}>
                                            <Date dateString={featured.date} />
                                        </div>*/}
                                        <div className='text-gray.700 py-2 '>{featured.description}</div>
                                        <div className="flex flex-row">
                                            <Link href={`/posts/${featured.id}`}>
                                                <button className="hover:bg-medRed.800 hover:text-white.100 text-xs text-medRed.700 uppercase px-4 py-3 border border-medRed.500 rounded-lg">
                                                    Continue Reading
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                </section>
                <Quote id={2}/>
                <section className="bg-tan.50">
                    <div className="max-w-7xl mx-auto ">
                        <div className="md:grid md:grid-cols-3 md:gap-6 xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                            {allPostsData
                                .filter(featured => featured.type === 'work' && featured.isFeatured !== 'true')
                                .map(({ id, date, title, bannerSMImageSource, alt}) => (
                                    <div key={id} className="flex flex-col md:py-0 py-6">
                                        <div className='flex'>
                                            <img
                                                src={bannerSMImageSource}
                                                alt={alt}
                                            />
                                        </div>
                                        <div className="pt-2 md:w-4/5">
                                            <Link href={`/posts/${id}`}>
                                                <a>
                                                    <div className='font-roboto text font-medium text-medRed.700 hover:underline truncate'>{title}</div>
                                                </a>
                                            </Link>
{/*                                            <div className='text-xs '>
                                                <Date dateString={date} />
                                            </div>*/}
                                        </div>

                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
                <Promo id={1}/>
            </div>
        </Layout>
    )
}