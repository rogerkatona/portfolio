import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/articles'
import Link from 'next/link'
import Date from "../components/date";
import {useEffect, useState} from "react";
import Topics from "../components/articleTopics";
import topicItems from "../data/topicItems";


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
                        <section className='lg:block hidden '>
                            <span className={'font-bold'}>Topics:</span>
                            <Topics topicItems={topicItems}/>
                        </section>
                        <section className="w-4/5">
                                {featuredPosts
                                    .map(featured =>
                                        <div key={featured.id} className='flex lg:flex-row flex-col'>
                                            <div className='lg:pr-12 pr-6'>
                                                        <Link href={`/articles/${featured.id}`}>
                                                            <a>
                                                                 <div className='font-roboto text-2xl text-link hover:underline'>{featured.title}</div>
                                                            </a>
                                                        </Link>
                                                        <div className='font-banner text-xs'>
                                                            <Date dateString={featured.date} />
                                                        </div>
                                                        <div className="my-2"> {featured.description} </div>
                                                        <div className=""> <span className="font-bold pr-2 ">Topics:</span>{featured.topic} </div>
                                            </div>
                                            <div className='flex min-w-max'>
                                                <img
                                                    src={featured.bannerSMImageSource}
                                                    height={141}
                                                    width={217}
                                                    alt={featured.alt}
                                                />
                                            </div>
                                        </div>

                            )}
                            <hr className={'my-6'}/>
                                {allPostsData
                                    .filter(featured => featured.type === 'articles' && featured.isFeatured !== 'true')
                                    .map(({ id, date, title, description, bannerSMImageSource, alt, topic }) => (
                                        <div key={id} className="flex lg:flex-row flex-col lg:justify-between mb-6">
                                            <div className='lg:pr-12 pr-6'>
                                                <Link href={`/articles/${id}`}>
                                                    <a>
                                                        <div className='font-roboto text-2xl text-link hover:underline'>{title}</div>
                                                    </a>
                                                </Link>
                                                <div className='font-banner text-xs'>
                                                    <Date dateString={date} />
                                                </div>
                                                <div className="my-2">{description} </div>
                                                <div className=""> <span className="font-bold pr-2 ">Topics:</span>{topic} </div>
                                            </div>
                                            <div className='flex lg:min-w-max lg:pt-0'>
                                                <img
                                                    src={bannerSMImageSource}
                                                    height={141}
                                                    width={217}
                                                    alt={alt}
                                                />
                                            </div>
                                        </div>
                                    ))}
                        </section>
                    </section>
                </section>
            </div>
        </Layout>
    )
}