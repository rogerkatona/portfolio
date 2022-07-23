import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from "next/head";


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
                    <header className='max-w-7xl mx-auto xl:px-0 md:px-12 px-6 py-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            Our Work
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            For over 15 years, Designing digital products that were ahead of their time, across an array of platforms, for the world’s largest, most influential brands, mid-sized companies and extraordinary startups.
                        </div>
                    </header>
                    <section className="w-full bg-opacity-5 bg-primaryLight">
                        <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 py-12">
                            <section>
                                <div className='pt-6'>
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
                            <div className='font-roboto lg:text-3xl text-2xl pt-2 '>{postData.title}</div>
                            <div className="py-2"> {postData.description} </div>
                            <div className=""> <span className="font-bold pr-2 ">Skills:</span>{postData.topic} </div>

                            <hr/>
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