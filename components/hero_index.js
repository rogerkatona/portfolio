
export default function HeroIndex({ children, home }) {
    return (
        <section className="bg-darkBlue.400">
            <div className="flex lg:h-screen80vh h-screen80vh bg-hero-index bg-cover lg:bg-center bg-center bg-no-repeat items-center ">>
                <div className="flex flex-row lg:mx-auto lg:max-w-7xl md:p-12 p-6">
                    <div className="font-bebasNeue md:text-6xl text-4xl text-center text-white.100 opacity-80 lg:w-2/3 w-1/2 ">
                    As a creative storyteller, It is my goal to share ideas that inform, inspire, and connect us.
                    </div>
                </div>
            </div>
        </section>
    )
}