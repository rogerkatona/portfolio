import campaignFeatureItems from "../../../data/campaignFeatureItems";
import Link from "next/link";

export default function CampaignFeature(props) {

    let filteredItem = campaignFeatureItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
            <section className="xl:px-0 md:px-12 px-6 py-12">

                {filteredItem
                    .filter(filteredItem => filteredItem.subtype === props.subtype)
                    .map(filteredItem => (
                        <div
                            key={filteredItem.id}
                            className={`flex lg:flex-row flex-col  md:space-y-12  space-y-6 max-w-7xl mx-auto  ${filteredItem.id % 2 === 0  ? '' : 'lg:flex-row-reverse'}`}>

                            <div className="pt-12">
                                <img
                                    className=""
                                    src={filteredItem.src}
                                    width={500}
                                    alt={filteredItem.alt}
                                />
                            </div>
                            <div className={`${filteredItem.id % 2 === 0  ? 'lg:pl-12' : 'lg:pr-12'} w-full pt-0 `}>
                                <div className='font-roboto text-5xl tracking-tighter'>{filteredItem.label}</div>
                                <p className="text-xl md:py-2 py-6 text-gray.500">{filteredItem.description}</p>
                            </div>
                        </div>
                    ))}

            </section>
        </>
    )
}






