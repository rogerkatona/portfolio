import Image from "next/image";

export default function QuoteBourget() {
    return (
        <section className="bg-gray">
            <div className="flex flex-row justify-center items-center mx-auto lg:p-24 p-8">
                <div className='flex flex-col flex-shrink-0 mr-24 hidden lg:block'>
                    <Image
                        priority
                        src="/images/quote-graphic.png"
                        height={198}
                        width={56}
                        alt={'lord-of-the-rings-blogPost'}
                    />
                </div>
                <div className="flex flex-col my-12">
                <span className="lg:text-3xl text-2xl ">
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






