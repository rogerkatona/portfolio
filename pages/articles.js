import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from "../components/date";
import {useEffect, useState} from "react";
// import Topics from "../components/articleTopics";
// import topicItems from "../data/topicItems";


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
        return featured.isFeatured === 'true' && featured.type === 'articles'
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
            <div className="max-w-7xl mx-auto min-h-screen">

                    <header className='xl:px-0 md:px-12 px-6 xl:py-24 py-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Articles
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            A collection of articles to teach, inspire, and elevate our work as entrepreneurs, web designers, and front-end developers.
                        </div>
                    </header>

                        <section className='bg-primaryLight bg-opacity-5 w-full xl:px-0 md:px-12 px-6 xl:py-24 py-12'>
                            {featuredPosts
                                .map(featured =>
                                    <div key={featured.id} className='flex flex-col'>
                                        <div className=''>
                                            <img
                                                className="lg:block hidden"
                                                src={featured.bannerImageSource}
                                                alt={featured.alt}
                                            />
                                            <img
                                                className="lg:hidden block"
                                                src={featured.bannerSMImageSource}
                                                alt={featured.alt}
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <Link
                                                href={`/articles/${featured.id}`}>
                                                <a>
                                                    <div className='font-roboto text-3xl font-medium text-link hover:underline'>{featured.title}</div>
                                                </a>
                                            </Link>
                                            <div className='font-banner text-xs '>
                                                <Date dateString={featured.date} />
                                            </div>
                                            <div className="pt-2">{featured.description} </div>
                                        </div>
                                    </div>
                                )}
                        </section>
                            <section className="md:grid md:grid-cols-3 md:gap-4 xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                                {allPostsData
                                    .filter(featured => featured.type === 'articles' && featured.isFeatured !== 'true')
                                    .map(({ id, date, title, bannerSMImageSource, alt}) => (
                                        <div key={id} className="flex flex-col md:py-0 py-6">
                                            <div className='flex'>
                                                <img
                                                    src={bannerSMImageSource}
                                                    alt={alt}
                                                />
                                            </div>
                                            <div className="pt-2 md:w-4/5">
                                                <Link href={`/articles/${id}`}>
                                                    <a>
                                                        <div className='font-roboto text font-medium text-link hover:underline truncate'>{title}</div>
                                                    </a>
                                                </Link>
                                                <div className='font-banner text-xs '>
                                                    <Date dateString={date} />
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                            </section>
            </div>
        </Layout>
    )
}