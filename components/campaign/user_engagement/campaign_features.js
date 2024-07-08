import CampaignFeatureItem from "./campaignFeatureItem";
import campaignFeatureItems from "../../../data/campaignFeatureItems";


export default function CampaignFeatures() {
    return (
        <>
            <section className="xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                <div className="flex lg:flex-row flex-col max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="grid lg:grid-cols-3 gap-4 lg:pb-0 pt-6 lg:mx-auto">
                            <CampaignFeatureItem campaignFeatureItems={campaignFeatureItems}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}






