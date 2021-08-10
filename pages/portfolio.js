import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import {useEffect, useState} from "react";




export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Articles({allPostsData}) {


    const [active, setActive] = useState(false)

    let featuredPosts = allPostsData.filter(function (featured){
        return featured.isFeatured === 'true' && featured.type === 'portfolio'
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
            <div className="max-w-7xl mx-auto xl:px-0 px-12 min-h-screen">
                <section className='mt-12'>
                    <header className='mb-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Portfolio
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            For over 15 years, I have designed digital application products that were ahead of their time, across an array of platforms, for the world’s largest, most influential brands, mid-sized companies and extraordinary startups.

                        </div>
                    </header>
                    <section className="flex flex-row ">

                        <section>
                            {featuredPosts
                                .map(featured =>
                                    <div key={featured.id} className='flex flex-col'>
                                        <div className='flex '>
                                            <img
                                                src={featured.bannerImageSource}
                                                height={651}
                                                width={1626}
                                                alt={featured.alt}
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <Link
                                                href={`/portfolio/${featured.id}`}>
                                                <a>
                                                    <div className='font-roboto text-3xl font-medium text-link hover:underline'>{featured.title}</div>
                                                </a>
                                            </Link>
                                            <div className="pt-1"> <span className="pr-2 font-bold">Project Brief:</span>{featured.description} </div>
                                        </div>

                                    </div>

                                )}
                            <section className="flex lg:flex-row flex-col lg:justify-center my-12 ">
                            {allPostsData
                                .filter(featured => featured.type === 'portfolio' && featured.isFeatured !== 'true')
                                .map(({ id, date, title, description, bannerSMImageSource, alt, topic }) => (
                                    <div key={id} className="flex flex-col my-4">
                                        <div className='flex lg:pt-0'>
                                            <img
                                                src={bannerSMImageSource}
                                                height={301}
                                                width={1626}
                                                alt={alt}
                                            />
                                        </div>
                                        <div className="lg:mt-1">
                                            <Link href={`/portfolio/${id}`}>
                                                <a>
                                                    <div className='font-roboto  font-medium text-link hover:underline'>{title}</div>
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                ))}
                            </section>
                        </section>
                    </section>
                </section>
            </div>
        </Layout>
    )
}