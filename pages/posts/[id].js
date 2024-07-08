import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from "next/head";
import Date from "../../components/date";
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

                    <section className="w-full bg-opacity-5 bg-primary">
                            <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-12 py-12 flex md:flex-row flex-col">
                        <section className="">
                            <div className='font-roboto lg:text-4xl text-2xl '>{postData.title}</div>
                            <div className="py-2 text-xl"> {postData.description} </div>
                            <div className=""> <span className="font-bold pr-2 ">Topics:</span>{postData.topic} </div>
                            <div className='font-banner  pt-2 '>
                                <Date dateString={postData.date} />
                            </div>
                            <hr/>


                            <section className='flex xl:flex-row flex-col justify-between '>
                                <div className='flex flex-row items-center'>
                                    <div className='pr-4 shrink-0 md:block hidden'>
                                        <img
                                            className=""
                                            src={postData.authorImageSource}
                                            height={100}
                                            width={100}
                                            alt="author image - Roger Katona"
                                        />
                                    </div>
                                    <div className=''>
                                        <div className='font-raleway text-xl text-gray.800 font-bold '>{postData.author}</div>
                                        <div className='pb-2 text-gray.500'>{postData.authorDescription}</div>
                                        <div className='flex flex-row items-center space-x-2'>
                                            <SocialMediaItem socialMediaItems={socialMediaItems}/>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className='mt-6'>
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
                        </section>
                        </div>
                    </section>

        </Layout>
    )
}