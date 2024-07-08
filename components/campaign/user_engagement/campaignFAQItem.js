
const Items = props => (

    <div className="flex md:flex-col flex-row ">
        <div className="pb-6">
            <div className="text-2xl pb-2">{props.label}</div>
            <div className="text-xl text-gray-500">{props.answer}</div>
        </div>
    </div>
);

const CampaignFAQItem = props => {

    return (
        <>
            {props.campaignFAQItems.map((item) =>
                <Items
                    key={item.src}
                    label={item.label}
                    answer={item.answer}
                />
            )}

        </>
    )
}

export default CampaignFAQItem;
