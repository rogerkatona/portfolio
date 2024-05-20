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

            <div className="">
                <section className=''>
                    <section className="w-full bg-opacity-5 bg-primary">
                        <div className='lg:hidden md:block hidden max-w-7xl mx-auto md:px-12 px-6 pt-12'>
                            <Link href='/campaign/ux-audit'>
                                <a>
                                    <img
                                        className="filter transition duration-500 ease-in-out hover:brightness-50"
                                        src="/image/campaign/adLG-ux-audit.png"
                                        alt="UX audit graphic"
                                    />
                                </a>
                            </Link>
                        </div>
                            <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-12 py-12 flex md:flex-row flex-col">
                        <section className="lg:w-4/5">
                            <div className='font-roboto lg:text-3xl text-2xl '>{postData.title}</div>
                            <div className="py-2"> {postData.description} </div>
                            <div className=""> <span className="font-bold pr-2 ">Topics:</span>{postData.topic} </div>
                            <div className='font-banner text-xs pt-2 '>
                                <Date dateString={postData.date} />
                            </div>
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
                        <section className='md:pl-12 lg:block md:hidden flex-shrink-0'>
                            <div className=''>
                                <Link href='/campaign/ux-audit'>
                                    <a>
                                        <img
                                            className="filter transition duration-500 ease-in-out hover:brightness-75"
                                            src="/image/campaign/adSM-ux-audit.png"
                                            alt="UX audit graphic"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </section>
                        </div>
                    </section>

                </section>
            </div>

        </Layout>
    )
}