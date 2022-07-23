import campaignFAQItems from "../data/campaignFAQItems";
import CampaignFAQItem from "./campaignFAQItem";


export default function CampaignFaqs() {
    return (
        <>
            <section className="xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                <div className="flex flex-col max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className='font-roboto text-4xl tracking-tighter'>FAQs</div>

                    </div>
                    <div className="pt-12 ">
                        <CampaignFAQItem campaignFAQItems={campaignFAQItems}/>
                    </div>
                </div>
            </section>
        </>
    )
}






