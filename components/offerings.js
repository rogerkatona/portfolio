import offeringItems from "../data/offeringItems";


export default function Offerings(props) {

    let filteredItem = offeringItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
        <section className="py-12 md:pb-12">
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row  justify-center pb-6'>Offerings</div>
                <div className="flex md:flex-row flex-col max-w-7xl justify-center items-center mx-auto   md:space-y-0 space-y-12 md:space-x-6">
                    {filteredItem.map(filteredItem => (
                        <div key={filteredItem.id} className="flex flex-row justify-center items-center md:bg-tan.100 md:p-12 w-full space-x-2 ">
                                <div className='flex md:flex-shrink-0 lg:pb-0 pb-6 lg:block hidden'>
                                    <img
                                        src={filteredItem.src}
                                        width={175}
                                        alt={'Featured Client'}
                                    />
                                </div>
                                <div className="md:pl-4 w-full">
                                    <div className="font-bebasNeue text-4xl text-gray.700">{filteredItem.label}</div>
                                    <div className="">{filteredItem.description}</div>
                                    <ul className="text-left list-disc pl-4 pt-2 ">
                                        {filteredItem.list.map((list) =>
                                        <li key={list.list}>
                                            {list}
                                        </li>
                                        )}
                                    </ul>
                                </div>
                        </div>
                    ))}
                </div>
        </section>
        </>
    )
}






