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
            <div className="max-w-7xl mx-auto xl:px-0 px-12 min-h-screen">
                <section className='mt-12'>
                    <header className='mb-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Articles
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            A collection of articles to teach, inspire, and elevate our work as web designers and front-end developers.
                        </div>
                    </header>
                    <section className="flex flex-row justify-between">
                        {/*<section className="lg:block hidden">*/}
                        {/*    <span className={'font-bold'}>Topics:</span>*/}
                        {/*    <Topics topicItems={topicItems}/>*/}
                        {/*</section>*/}
                        <section className = "w-full">
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
                                                    href={`/articles/${featured.id}`}>
                                                    <a>
                                                        <div className='font-roboto text-3xl font-medium text-link hover:underline'>{featured.title}</div>
                                                    </a>
                                                </Link>
                                                <div className="pt-1">{featured.description} </div>
                                            </div>
                                        </div>
                            )}
                            <section className="flex lg:flex-row flex-col lg:justify-center my-12">
                                {allPostsData
                                    .filter(featured => featured.type === 'articles' && featured.isFeatured !== 'true')
                                    .map(({ id, date, title, description, bannerSMImageSource, alt, topic }) => (
                                        <div key={id} className="flex flex-col my-4">
                                            <div className='flex lg:pt-0'>
                                                <img
                                                    src={bannerSMImageSource}
                                                    alt={alt}
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <Link href={`/portfolio/${id}`}>
                                                    <a>
                                                        <div className='font-roboto text font-medium text-link hover:underline'>{title}</div>
                                                    </a>
                                                </Link>
                                                <div className='font-banner text-xs '>
                                                    <Date dateString={date} />
                                                </div>
                                                {/*<div className='text-xs'>*/}
                                                {/*    <span className="font-medium">Topics:</span> {topic}*/}
                                                {/*</div>*/}
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