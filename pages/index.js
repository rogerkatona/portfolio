import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import ClientLogos from "../components/client-logos";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import HeroIndex from "../components/hero_index"
import Features from "../components/features";
import Quote from "../components/quote";
import Promo from "../components/promo";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {

  let featuredPosts = allPostsData.filter(function (featured){
    return featured.isFeatured === 'true'
  })

  return (
    <Layout className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <HeroIndex/>
        <ClientLogos/>
        <Features  featured="true" type="service" subtype="ux-design"/>
        <Quote id={2}/>
        <Features  featured="true" type="workshop"/>
        <Features  featured="true" type="client" />

      {
        featuredPosts
            .filter(featured => featured.type === 'blog')
            .map(featured =>
                <section key={featured.id} className='bg-white.100 md:px-12 px-6 py-12'>
                  <div  className='flex lg:flex-row lg:flex-row flex-col max-w-7xl mx-auto'>
                    <div className='flex'>
                      <img
                          src={featured.bannerSMImageSource}
                          alt={'Featured Blog'}
                          width={1000}
                      />
                    </div>
                    <div className='md:w-4/5 w-full lg:pl-6 pt-6 lg:pt-0'>
                      <div className='text-medRed.700'>
                        <Link href={`/posts/${featured.id}`}>
                          <a className='hover:underline uppercase text-xs'>/ Blog</a>
                        </Link>
                      </div>
                      <div className='font-bebasNeue text-4xl text-darkBlue.700 pb-4'>
                        Featured Blog
                      </div>
                      <div className='text-xl text-darkBlue.700'>
                        {featured.title}
                      </div>
                      <div className='text-xs pt-1 text-darkBlue.700'>
                        <Date dateString={featured.date} />
                      </div>
                      <div className='text-darkBlue.700 py-4 '>{featured.description}</div>
                      <Link href={`/posts/${featured.id}`}>
                        <button className="mr-2 hover:bg-medRed.800 hover:text-white.100 text-xs text-medRed.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                          Continue Reading
                        </button>
                      </Link>
                      <Link href="/blog">
                        <button className="hover:bg-medRed.800 hover:text-white.100 text-xs text-medRed.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                         See All Posts
                        </button>
                      </Link>
                    </div>
                  </div>
                </section>
            )}
      <Features  featured="true" type="about" />
      <Promo id={2}/>

    </Layout>
  )
}
