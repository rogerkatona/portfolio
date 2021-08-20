import Image from "next/image";

export default function HighlightQuoteBourget() {
    return (
        <section className="w-full xl:px-0 md:px-12 px-6 xl:py-24 py-12">
            <div className="flex flex-row justify-center items-center max-w-7xl mx-auto">
                <div className='flex flex-col flex-shrink-0 pr-12 hidden lg:block'>
                    <img
                        src="/image/quote-graphic.png"
                        height={198}
                        width={56}
                        alt={'simple quote graphic'}
                    />
                </div>
                <div className="flex flex-col px-12">
                <span className="lg:text-3xl text-2xl">
                        "Roger is a talented and focused Web developer. His strong project management skills, keen eye for design, and intrinsic understanding of usability makes him a tremendous asset to any Web project or team."
                    </span>
                    <span className="font-bold text-sm mt-2">
                        Alice Bourget <br/>
                        <span className="font-light">
                            Freelance Content Marketing Writer and Strategist
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}






