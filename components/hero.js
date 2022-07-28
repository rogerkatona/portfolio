import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            <section className="flex flex-row max-w-7xl mx-auto h-screen40vh xl:px-0 sm:px-12 px-6">
            {filteredItem.map(filteredItem => (
                <section
                    key={filteredItem.id}
                    className="flex flex-col justify-center w-3/4">
                    <div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-white.100' : 'text-lightBlue.500'} font-bebasNeue md:text-7xl text-6xl uppercase`}>{filteredItem.label}</div>
                        <div className={`${filteredItem.background === 'dark'  ? 'text-tan.300' : 'text-lightBlue.500'}  md:w-3/4`}>{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </section>
            </>
    )
}