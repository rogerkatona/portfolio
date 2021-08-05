import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ClientLogos from '../components/clientLogos'
import Hero from '../components/hero'
import HighlightQuoteWhile from "../components/highlight_quote_while";
import { getSortedPostsData } from '../lib/posts'
import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";
import HighlightQuoteHurff from "../components/highlight_quote_hurff";
import HighlightContact from "../components/highlight_contact";



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
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <main>
          <Hero/>
          <HighlightContact/>
          <ClientLogos/>
          <HighlightQuoteWhile/>
          <section className='max-w-7xl mx-auto xl:px-0 px-12 '>
            {
              featuredPosts
                  .filter(featured => featured.type === 'articles')
                  .map(featured =>
                      <div key={featured.id} className='flex lg:flex-row flex-col items-center '>
                        <div className='flex'>
                          <Image
                              priority
                              src={featured.imageSourceFeatured}
                              height={651}
                              width={1000}
                              alt={'Featured Insights'}
                          />
                        </div>
                        <div className='flex lg:pl-8 lg:py-0 pt-8 pb-0'>
                          <div className='lg:mx-auto flex flex-col lg:justify-center'>
                            <div className='font-roboto text-3xl tracking-tighter '>
                              {featured.title}
                            </div>
                            <div className='text-secondary text-xs'>
                              <Date dateString={featured.date} />
                            </div>
                            <div className='text-black text-xl py-4'>{featured.description}</div>
                            <Link href={`/articles/${featured.id}`}>
                              <a className='text-link hover:underline uppercase'>Read Featured Article &#8594;</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                  )}
          </section>
          <HighlightQuoteHurff/>
          <section className='max-w-7xl mx-auto xl:px-0 px-12 '>
            {
              featuredPosts
                  .filter(featured => featured.type === 'portfolio')
                  .map(featured =>
                      <div key={featured.id} className='flex lg:flex-row-reverse flex-col items-center'>
                        <div className=''>
                          <img
                              src={featured.imageSourceFeatured}
                              height={650}
                              width={1000}
                              alt={'featured portfolio project'}
                          />
                        </div>
                        <div className='flex lg:pl-8 lg:py-0 pt-8 pb-0 lg:w-2/3'>
                          <div className='lg:mx-auto flex flex-col lg:justify-center'>
                            <div className='font-roboto text-3xl tracking-tighter '>
                              {featured.title}
                            </div>
                            <div className='text-secondary text-xs'>
                              <Date dateString={featured.date} />
                            </div>
                            <div className='text-black text-xl py-4'>{featured.description}</div>
                            <Link href={`/portfolio/${featured.id}`}>
                              <a className='text-link hover:underline uppercase'>Read The Full Story &#8594;</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                  )}
          </section>
        </main>
      </Layout>
  )
}

