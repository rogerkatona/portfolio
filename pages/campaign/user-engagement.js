import {useEffect, useRef, useState} from "react";
import CampaignWhatIs from "../../components/campaign/user_engagement/campaign_whatIs";
import CampaignFeatures from "../../components/campaign/user_engagement/campaign_features";
import LayoutCampaign from "../../components/LayoutCampaign";


export default function UserEngagement() {

    const initialRef = useRef()

    return (
        <LayoutCampaign>

            <div>
                <header className="w-full bg-gray.800 xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                    <section className='flex lg:flex-row flex-col justify-between items-center max-w-7xl mx-auto'>
                        <div className=''>
                            <div className='font-roboto text-6xl tracking-tighter text-white.100'>Gain a Deeper Understanding and Connection with Your Users</div>
                            <div className='text-tan.500 text-xl md:py-2 py-6'>Empower Your Company with Insights, Engagement, and User-Centric Excellence</div>
                        </div>
                        <div className="lg:pt-0 pt-6 lg:pl-24 pl-0">
                            <img
                                className=""
                                src='/image/campaign/campaign-02.jpg'
                                alt="User Experience banner graphic"
                            />

                        </div>
                    </section>
                </header>

                <CampaignWhatIs subtype="campaign-01"/>
                <section className="bg-gray.050">
                    <CampaignWhatIs subtype="campaign-02"/>
                </section>
                <CampaignWhatIs subtype="campaign-03"/>

            </div>
        </LayoutCampaign>
    )
}