import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import  { Form } from "../../components/form";
import {useEffect, useRef, useState} from "react";
import CampaignFeatures from "../../components/campaign_features";
import CampaignWhatIs from "../../components/campaign_whatIs";
import CampaignCTA001 from "../../components/campaign_cta_001";
import CampaignCTA002 from "../../components/campaign_cta_002";
import CampaignFaqs from "../../components/campaign_faqs";
import CampaignValue from "../../components/campaign_value";
import CampaignPrice from "../../components/campaign_price";


export default function UxAudit() {

    const initialRef = useRef()
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div>
                <header className="w-full bg-darkBlue.400 xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                    <section className='flex lg:flex-row flex-col justify-between items-center max-w-7xl mx-auto'>
                        <div className=''>
                            <div className='font-roboto text-6xl tracking-tighter text-white.100'>User Experience Audit</div>
                            <div className='text-tan.500 text-xl md:py-2 py-6'>Invest in your users.  They deserve it.</div>
                            <div className="md:my-10  bg-campaignLight w-full flex flex-col justify-center">
                                <Form initialRef={initialRef} />
                            </div>

                        </div>
                        <div className="lg:pt-0 pt-6 lg:pl-24 pl-0">
                            <img
                                className=""
                                src='/image/campaign/bannerLG-ux-campaign.png'
                                alt="User Experience banner graphic"
                            />

                        </div>
                    </section>
                </header>
                <CampaignWhatIs/>
                <div className='bg-darkBlue.400 bg-opacity-5 w-full'>
                    <CampaignFeatures/>
                </div>
                <div className="w-full bg-tan.800 xl:px-0 md:px-12 px-6 xl:py-24 py-12 ">
                    <CampaignCTA002/>
                </div>
                <div className="w-full bg-bg-contactModal">
                    <CampaignValue/>
                </div>
                <CampaignFaqs/>
                <div className="w-full bg-tan.100">
                    <CampaignPrice/>
                </div>
                <div className="w-full bg-medBlue.400 xl:px-0 md:px-12 px-6 xl:py-24 py-12 ">
                    <CampaignCTA001/>
                </div>
            </div>
        </Layout>
    )
}