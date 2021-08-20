import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from "next/head";
import Date from "../../components/date";
import Topics from "../../components/articleTopics";
import topicItems from "../../data/topicItems";
import SocialMediaItem from "../../components/socialMediaItem";
import socialMediaItems from "../../data/socialMediaItems";
import Link from "next/link";

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta property="og:url" content={postData.ogURL} key="openGraphURL" />
                <meta property="og:type" content={postData.ogtype} />
                <meta property="og:title" content={postData.title} key="title"/>
                <meta property="og:description" content={postData.description} />
                <meta property="og:image" content={postData.ogImage} />
            </Head>

            <div className="">
                <section className=''>
                    <header className='max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Portfolio
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            For over 15 years, I have designed digital application products that were ahead of their time, across an array of platforms, for the world’s largest, most influential brands, mid-sized companies and extraordinary startups.
                        </div>
                    </header>
                    <section className="w-full bg-opacity-5 bg-primaryLight">
                        <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                            <div className='font-roboto text-2xl '>{postData.title}</div>
                            <div className="py-2"> {postData.description} </div>
                            <div className=""> <span className="font-bold pr-2 ">Topics:</span>{postData.topic} </div>

                            <hr/>

                            <section className='flex flex-row items-center'>
                                <div className='md:pr-4'>
                                    <img
                                        className="md:block hidden"
                                        src={postData.authorImageSource}
                                        height={80}
                                        width={80}
                                        alt="author image - Roger Katona"
                                    />
                                </div>
                                <div className='min-w-max'>
                                    <div className='font-medium'>{postData.author}</div>
                                    <div className='text-xs'>{postData.authorDescription}</div>
                                </div>
                                <div className='flex flex-row justify-end w-full'>
                                    <SocialMediaItem socialMediaItems={socialMediaItems}/>
                                </div>
                            </section>
                            <section>
                                <div className='my-8'>
                                    <img
                                        className="lg:block hidden"
                                        src={postData.bannerImageSource}
                                        alt={postData.alt}
                                    />
                                    <img
                                        className="lg:hidden block"
                                        src={postData.bannerSMImageSource}
                                        alt={postData.alt}
                                    />
                                </div>
                            </section>

                            <section className='mb-12'>
                                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                            </section>
                        </div>
                    </section>
                </section>
            </div>

        </Layout>
    )
}