import serviceItems from "../data/serviceItems";
import Link from "next/link";

export default function Services(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
                <section className="flex flex-col md:px-12 px-6 py-6 bg-gray.050">
                    {filteredItem
                        .filter(filteredItem => filteredItem.subtype === props.subtype)
                        .map(filteredItem => (
                            <div
                                key={filteredItem.id}
                                className={`flex lg:flex-row flex-col space-y-6 max-w-7xl mx-auto  ${filteredItem.id % 2 === 0  ? 'lg:flex-row-reverse ' : ''}`}>

                                <div className="pt-12">
                                    <img
                                        className=""
                                        src={filteredItem.src}
                                        width={1000}
                                        alt={filteredItem.alt}
                                    />
                                </div>
                                <div className={`${filteredItem.id % 2 === 0  ? 'lg:pr-12' : 'lg:pl-12'} lg:w-4/5 w-full pt-0 `}>
                                    <div className='font-bebasNeue text-4xl text-gray.400 font-light border-b'>{filteredItem.number}</div>
                                    <div className='text-2xl text-gray.700 pt-4'>{filteredItem.title}</div>
                                    <p className="pt-2">{filteredItem.description}</p>
                                    <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'} pt-4`}>
                                        <Link href={filteredItem.buttonHref}>
                                            <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                {filteredItem.buttonText}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    ))}
                </section>
        </>
    )
}






