

const Items = props => (

    <div className="flex md:flex-col flex-row">
        <div className="flex flex-col shadow-xl p-6 mt-12 bg-white">
            <div className="text-xl text-campaign border-b-2 my-6 font-bold">{props.label}</div>
            <div className="lg:text-5xl text-2xl text-campaign pt-4">${props.price}</div>
            <ul className="text-gray-600 text-left py-6 list-outside">
                {props.list}
            </ul>
            <div className="text-gray-600 italic text-xs">{props.footnote}</div>
        </div>
    </div>
);

const CampaignPriceItem = props => {

    return (

        <>
            {props.campaignPriceItems.map((item) =>
                <Items
                    key={item.src}
                    label={item.label}
                    description={item.description}
                    price={item.price}
                    footnote={item.footnote}
                    list={
                        item.list.map((list) =>
                            <li
                                key={list.list}
                                className={`${list.startsWith('Number') ? 'font-bold' : ''}`}>
                                {list}
                            </li>
                        )
                    }
                />
            )}

        </>
    )
}

export default CampaignPriceItem;
