import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import aboutItems from "../data/aboutItems";
import Promo from "../components/promo";


export default function About() {

    let filteredItem = aboutItems.filter(function (item){
        return item.isActive === 'true'
    });


    return (
        <Layout home>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="bg-hero-about min-h-screen20vh max-h-screen20vh bg-cover bg-right bg-no-repeat">
                <Hero id={5}/>
            </div>

            <section className="max-w-7xl mx-auto pt-12">
                {filteredItem
                    .map(filteredItem => (

                        <div
                            key={filteredItem.id}
                            className={`flex flex-col pb-12 ${filteredItem.activeID % 2 === 0  ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                            <div className=''>
                                <img
                                    src={filteredItem.src}
                                    width={1000}
                                    alt={'Roger Katona - About'}
                                />
                            </div>

                            <div className="lg:w-4/5 w-full">
                                <div className='lg:text-3xl text-2xl text-gray.500 tracking-wide  bg-gray.100 lg:p-12 p-4'>{filteredItem.callOut}</div>
                                <p className="lg:p-12 p-4 pt-6">{filteredItem.text}</p>
                            </div>
                        </div>

                ))}
             </section>

            <div className="bg-gray.050 -mt-12 ">
                <Promo id={1}/>
            </div>

        </Layout>
    )
}



