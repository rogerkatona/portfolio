import Image from "next/image";

export default function WhatARide() {
    return (
        <section className="flex md:flex-row flex-col justify-center items-center py-24 lg:gap-24 gap-4 bg-gray">
            <div className="order-2">
                <Image
                    alt={'Pie Chart showing the percentage of design compared to development work.'}
                    src="/images/years-graphic.png"
                    height={290}
                    width={251}
                />
            </div>
            <div className="flex flex-col justify-center items-center md:w-1/3">
                <h3 className="pb-6 text-center">
                    What a ride!
                </h3>
                <div className="pb-6 text-center md:px-4 px-4">
                    Designing and developing websites and User Interfaces since 2005. Along the way working with some amazing, talented people at large fortune 500 companies and start ups. I can’t wait to see what happens next!
                </div>

            </div>
        </section>


    )
}