import quoteItems from "../data/quoteItems";


export default function Quote(props) {

    let filteredItem = quoteItems.filter(function (item){
        return item.id === props.id
    });


    return (

        <>
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        className="flex flex-row  max-w-7xl mx-auto xl:px-0 px-6">

                        <section className={`mt-20 mb-12 max-w-7xl mx-auto ${filteredItem.id % 2 === 0  ? 'bg-darkBlue.50' : 'bg-darkBlue.50'}`}>
                            <div className="flex flex-col justify-center items-center md:px-12 px-6 py-12 pt-6 relative">
                                <div className='flex flex-shrink-0 absolute -top-10'>
                                    <img
                                        src={filteredItem.src}
                                        height={82}
                                        width={82}
                                        alt={'simple quote graphic'}
                                    />
                                </div>
                                <div className="flex flex-col pt-12 text-darkBlue.700">
                                    <div className="">&quot;{filteredItem.text}&quot;</div>
                                    <div className="font-bold text-lg mt-2"> {filteredItem.author}</div>
                                    <div className="font-light text-sm"> {filteredItem.title}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
        </>

    )
}






