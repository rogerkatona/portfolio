import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/articles'
import Head from "next/head";
import Date from "../../components/date";
import Topics from "../../components/articleTopics";
import topicItems from "../../data/topicItems";
import SocialMediaItem from "../../components/socialMediaItem";
import socialMediaItems from "../../data/socialMediaItems";

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

                        <section className="lg:w-2/3">
                            <div className='font-roboto text-2xl '>{postData.title}</div>
                            <div className="my-2"> {postData.description} </div>
                            <div className=""> <span className="font-bold pr-2 ">Topics:</span>{postData.topic} </div>
                            <div className='font-banner text-xs mt-4 '>
                                <Date dateString={postData.date} />
                            </div>
                             <hr/>

                                <section className='flex flex-row items-center'>
                                    <div className='mr-4'>
                                        <img
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
                                                src={postData.bannerImageSource}
                                                height={401}
                                                width={1626}
                                                alt="Post banner"
                                            />
                                        </div>
                                    </section>

                                    <section className='mb-12'>
                                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                                    </section>

                        </section>
                        <section className='lg:block hidden '>
                            <div className=''>
                                <img
                                    src="/image/ad-websiteAnalysis.jpg"
                                    height={498}
                                    width={251}
                                    alt="Free website analysis graphic"
                                />
                            </div>
                        </section>
                    </section>
                </section>
            </div>

        </Layout>
    )
}