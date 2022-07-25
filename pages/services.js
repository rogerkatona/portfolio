import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Offerings from "../components/offerings";
import Services from "../components/services";
import Quote from "../components/quote";
import Promo from "../components/promo";

export default function Workshops() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero-design min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={1}/>
            </header>
            <Offerings type="services"/>
            <div className="flex flex-row justify-center font-bebasNeue text-6xl text-gray.700 bg-gray.100 py-12">
                Professional Design
            </div>
            <Services type="service" subtype="ux-design"/>
            <Quote id={2}/>
            <div className="flex flex-row justify-center font-bebasNeue text-6xl text-gray.700 bg-gray.100 py-12">
                Usability Analysis
            </div>
            <Services type="service" subtype="ux-analysis"/>
            <Promo id={0}/>

        </Layout>
    )
}