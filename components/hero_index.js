
export default function HeroIndex({ children, home }) {
    return (
        <section className="bg-darkBlue.400">
            <div className="flex lg:h-screen80vh h-screen80vh bg-hero-index bg-cover lg:bg-center bg-center bg-no-repeat items-center ">>
                <div className="flex flex-row lg:mx-auto lg:max-w-7xl md:p-12 p-6">
                    <div className="font-bebasNeue md:text-7xl text-4xl text-left text-white.100 opacity-80 w-3/5 lg:pr-8 ">
                        Designing software that makes a difference for your customers.
                    </div>
                </div>
            </div>
        </section>
    )
}