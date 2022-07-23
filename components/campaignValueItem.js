import Link from "next/link";

const Items = props => (
        <div className="">
            <div className="flex flex-row md:items-center mb-12">
                <img
                    className="lg:block hidden pr-6"
                    src={props.src}
                    height={150}
                    width={150}
                    alt={props.alt}
                />
            <div className="flex flex-col justify-center ">
                <div className="text-2xl text-white">{props.text}</div>
                <div className="">
                    <Link href={props.referenceLink}>
                        <a className='text-sand text-xs italic hover:underline '>View Source</a>
                    </Link>
                </div>
            </div>
            </div>
        </div>
);

const CampaignValueItem = props => {

    return (

        <>
            {props.campaignValueItems.map((item) =>
                <Items
                    key={item.src}
                    id={item.id}
                    text={item.text}
                    referenceLink={item.referenceLink}
                    src={item.src}
                    alt={item.alt}
                />
            )}
        </>
    )
}

export default CampaignValueItem;
