
export default function HeroIndex({ children, home }) {
    return (
        <section className="bg-darkBlue.400">
            <div className="flex lg:h-screen80vh h-screen80vh bg-hero-index bg-cover lg:bg-center bg-center bg-no-repeat items-center ">
                <div className="flex flex-row max-w-7xl mx-auto  p-6">
                    <div className="font-bebasNeue lg:text-7xl text-5xl text-left text-white.100 opacity-80 w-3/5">
                        Designing software that makes a difference for your customers.
                    </div>
                </div>
            </div>
        </section>
    )
}