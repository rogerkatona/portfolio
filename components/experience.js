import ExperienceItem from "../components/experienceItem";
import experienceItems from "../data/experienceItems";
import Link from "next/link";

export default function Experience() {
    return (
        <section className="">
            <div className="flex lg:flex-row flex-col items-center max-w-7xl mx-auto ">
                <div className='flex flex-col flex-shrink-0 md:mx-0 mx-6 '>
                    <img
                        src="/image/logo-resume.png"
                        height={515}
                        width={394}
                        alt={'resume logo'}
                    />
                    <Link href='/pdf/rogerkatona-cv.pdf'>
                        <a className='text-link hover:underline uppercase'>SEE RESUME</a>
                    </Link>
                </div>
                <div className="flex flex-col lg:mx-12 mx-6 lg:mt-0 mt-12 items-start justify-start">
                    <div className='font-roboto text-3xl tracking-tighter pb-6'>Work Experience</div>
                    <ExperienceItem experienceItems={experienceItems}/>
                </div>
            </div>
        </section>
    )
}






