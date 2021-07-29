import Image from "next/image";

export default function ItsAGift() {
    return (
        <section className="flex md:flex-row flex-col justify-center items-center py-24 px-12 lg:gap-24 gap-4">
            <div className="">
                <Image
                    alt={'Pie Chart showing the percentage of design compared to development work.'}
                    src="/images/pieChart-designDev.png"
                    height={424}
                    width={455}
                />
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:w-1/3">
                <h3 className="pb-6">
                    It’s a gift to do what you love.
                </h3>
                <h4 className="pb-2">
                    Designer
                </h4>
                <div className="pb-6 text-center">
                    Website Design | User Interface Design | Graphic Design | Blogging | Usability | Social Media
                </div>
                <h4 className="pb-2">
                    Developer
                </h4>
                <div className="pb-6 text-center">
                    Front-End Development | React Framework | Tailwind.css | CSS | WordPress Themes | Javascript
                </div>
            </div>
        </section>


    )
}