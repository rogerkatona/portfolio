import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/articles'
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:f
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
            <article className="bg-primaryLight">
                <div className="max-w-7xl mx-auto xl:px-0 px-12 min-h-screen text-white" >
                    <h1 className="font-banner text-2xl font-bold">{postData.title}</h1>
                    <div className="text-lightGray mt-4"> <span className="font-bold pr-2 text-white">Summary:</span>{postData.description} </div>
                    <div className="text-lightGray"> <span className="font-bold pr-2 text-white">Topics:</span>{postData.tags} </div>
                    <div className='font-banner text-xs mb-4 mt-4 text-lightGray'>
                        <Date dateString={postData.date} />
                    </div>
                    <hr/>

                    <section className='flex flex-row items-center m-4 ml-0 ' >
                        <section className='flex items-center md:w-72 w-96'>
                            <div className='mr-4'>
                                <img
                                    src={postData.authorImageSource}
                                    height={80}
                                    width={80}
                                    alt="author image - Roger Katona"
                                />
                            </div>
                            <div className=''>
                                <div className='font-medium'>{postData.author}</div>
                                <div className='text-lightGray text-xs'>{postData.authorDescription}</div>
                            </div>
                        </section>
                        <section className='flex flex-row justify-end w-full'>
                            <div className='mr-2'>
                                <Link
                                    href={`${postData.authorLinkedInURL}`}>
                                    <a>
                                        <img
                                            src='/image/icon-linkedIn.png'
                                            height={32}
                                            width={32}
                                            alt="icon linkedIn"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className='mr-2'>
                                <Link
                                    href={`${postData.authorInstagramURL}`}>
                                    <a>
                                        <img
                                            src='/image/icon-Instagram.png'
                                            height={32}
                                            width={32}
                                            alt="icon Instagram"
                                        />
                                    </a>

                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={`${postData.authorTwitterURL}`}>
                                    <a>
                                        <img
                                            src='/image/icon-Twitter.png'
                                            height={32}
                                            width={32}
                                            alt="icon twitter"
                                        />
                                    </a>

                                </Link>
                            </div>
                        </section>

                    </section>
                    <section>
                        <div className='md:mb-6'>
                            <img
                                src={postData.bannerImageSource}
                                height={401}
                                width={1626}
                                alt="Post banner"
                            />
                        </div>
                    </section>
                    <div className='flex flex-row '>
                        <section className='mb-12'>
                            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                        </section>
                        {/*<section className='w-1/2 ml-12 mt-8 text-xs lg:block sm:hidden'>*/}
                        {/*    <div>*/}
                        {/*        <div>Table of Contents</div>*/}
                        {/*        <div>{postData.headline1}</div>*/}
                        {/*        <div>{postData.headline2}</div>*/}
                        {/*        <div>{postData.headline3}</div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                    </div>
                </div>
            </article>
        </Layout>
    )
}