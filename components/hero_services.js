export default function HeroServices({ children, home }) {
    return (
        <section className="bg-sand py-12">
            <div className="flex-row justify-center items-center lg:mx-auto lg:max-w-7xl xl:px-0 md:px-12 px-6 flex-shrink-0">
                <img
                    className="md:block hidden"
                    src="/image/bannerLG-services.png"
                />
                <img
                    className="md:hidden block"
                    src="/image/bannerSM-services.png"
                />
            </div>
        </section>
    )
}