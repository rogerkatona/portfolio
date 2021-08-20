import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HighlightContact from "../components/highlight_contact";
import AboutHero from "../components/about-hero";
import HighlightQuoteBourget from "../components/highlight_quote_bourget";
import HighlightAboutExperience from "../components/highlight_about_experience";
import AboutPieChart from "../components/about-pieChart";
import HighlightQuoteHurff from "../components/highlight_quote_hurff";


export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
                <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                    <header className=''>
                            <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                                About
                            </div>
                            <div id="subHeadlineText" className='text-base text-gray-500 pt-2'>
                                20 years of experience designing user interfaces for websites and web applications.
                            </div>
                        </header>
                </div>
                <AboutHero />
                <HighlightQuoteHurff/>
                <HighlightAboutExperience/>
                <HighlightContact/>
        </Layout>
    )
}