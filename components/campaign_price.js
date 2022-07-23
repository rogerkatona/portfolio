import CampaignPriceItem from "./campaignPriceItem";
import campaignPriceItems from "../data/campaignPriceItems";


export default function CampaignPrice() {
    return (
        <>
            <section className="xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                <div className="flex flex-col max-w-7xl mx-auto">
                    <div className="flex flex-col text-center">
                        <div className='font-roboto text-4xl tracking-tighter'>Price</div>
                        <div className="lg:text-3xl text-2xl pt-6">
                             An incredible price to value ratio. Let&apos;s not wait a second longer!
                        </div>
                    </div>
                        <div className="grid lg:grid-cols-3 lg:gap-12 lg:pb-0 pt-6 lg:mx-auto">
                            <CampaignPriceItem campaignPriceItems={campaignPriceItems}/>
                        </div>

                </div>
            </section>
        </>
    )
}






