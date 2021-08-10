import Image from "next/image";

export default function AboutPieChart() {
    return (
        <section className="bg-primaryLight bg-opacity-5 flex md:flex-row flex-col justify-center items-center py-24 px-12  my-24">
            <div className="mr-24">
                <img
                    alt={'Pie Chart showing the percentage of design compared to development work.'}
                    src="/image/aboutPieChart.png"
                    height={424}
                    width={455}
                />
            </div>
            <div className="flex flex-col justify-center lg:w-1/3">
                <div className='font-roboto text-3xl tracking-tighter pb-6'>
                    Skills:  It’s a gift to do what you love.
                </div>
                <h4 className="pb-2">
                    Designer
                </h4>
                <div className="pb-4">
                    Website Design | User Interface Design | Graphic Design | Blogging | Usability | Social Media
                </div>
                <h4 className="pb-2">
                    Developer
                </h4>
                <div className="pb-4">
                    Frontend Development | React Framework | Tailwind.css | CSS | WordPress Themes | Javascript
                </div>
            </div>
        </section>


    )
}