import AboutVideo from "./aboutVideo";

export default function AboutHero() {
    return (
        <section className="bg-primaryLight bg-opacity-5">
            <div className="flex lg:flex-row flex-col flex-col-reverse justify-center items-center max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                <div className="lg:w-5/6 w-full">
                    <div className="lg:text-3xl text-2xl lg:pr-12 py-6">
                        &quot;In web design we have many elements like forms, typography, content, colors, and images.
                        The ability to craft these into an amazing user experience is artistry.&quot;
                    </div>
                    <AboutVideo/>
                </div>
                <div className=''>
                    <img
                        src={'/image/banner-rk.png'}
                        height={650}
                        width={1001}
                        alt={'roger katona - web designer'}
                    />

                </div>

            </div>

        </section>


    )
}