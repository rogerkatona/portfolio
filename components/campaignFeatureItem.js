
const Features = props => (

    <div className="flex lg:flex-col flex-row lg:items-center">
        <img
            className="lg:block hidden"
            src={props.src}
            height={150}
            width={150}
            alt={props.alt}
        />
        <div className="flex flex-col lg:items-center items-start">
            <div className="lg:text-3xl text-2xl text-secondary pt-4">{props.label}</div>

            <ul className="flex flex-col text-lg text-gray-600 text-left list-disc mt-2 ">
                {props.list}
            </ul>
        </div>
    </div>
);

const CampaignFeatureItem = props => {

    return (

        <>
            {props.campaignFeatureItems.map((item) =>
                <Features
                    key={item.src}
                    label={item.label}
                    description={item.description}
                    src={item.src}
                    alt={item.alt}
                    list={
                        item.list.map((list) =>
                            <li key={list.list}>
                                {list}
                            </li>
                        )
                    }
                />
            )}

        </>
    )
}

export default CampaignFeatureItem;
