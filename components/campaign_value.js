import CampaignValueItem from "./campaignValueItem";
import campaignValueItems from "../data/campaignValueItems";

export default function CampaignValue() {
    return (
        <>
            <section className="xl:px-0 md:px-12 px-6 xl:pt-24 pt-12">
                <div className="flex flex-col max-w-7xl mx-auto">
                    <header className="flex flex-col items-center text-center">
                        <div className='font-roboto text-4xl tracking-tighter text-white'>Why Do I Need This?</div>
                        <div className="lg:text-3xl text-2xl pt-6 text-sand">
                            The data research for how fast a user forms an opinion about a company based on their experience with a company&apos;s digital properties is astounding!
                        </div>
                    </header>
                    <div className="my-12">
                        <CampaignValueItem campaignValueItems={campaignValueItems}/>
                    </div>
                </div>
            </section>
        </>
    )
}






