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
            <header className="bg-hero-workshop min-h-screen50vh max-h-screen50vh bg-cover bg-left bg-no-repeat">
                <Hero id={2}/>
            </header>
            <Offerings type="workshops"/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.100 py-12">
                In-Person Workshop
            </div>
            <Services type="workshop" subtype="in-person"/>
            <Quote id={3}/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.100 py-12">
                Virtual Workshop
            </div>
            <Services type="workshop" subtype="virtual"/>
            <Promo id={1}/>
        </Layout>
    )
}