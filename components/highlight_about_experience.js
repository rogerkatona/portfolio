import ExperienceItem from "../components/experienceItem";
import experienceItems from "../data/experienceItems";
import Link from "next/link";

export default function HighlightAboutExperience() {
    return (
        <section className="bg-primary bg-opacity-5 w-full">
            <div className="flex lg:flex-row flex-col lg:items-center max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                <div className='flex flex-col flex-shrink-0 '>
                    <img
                        src="/image/logo-resume.png"
                        alt={'resume logo'}
                    />
                    <Link href='/pdf/rogerkatona-resume.pdf'>
                        <a className='text-link hover:underline uppercase'>DOWNLOAD RESUME</a>
                    </Link>
                </div>
                <div className="flex flex-col lg:pl-12 ">
                    <div className='font-roboto text-3xl tracking-tighter lg:pt-0 pt-6 pb-6 '>Work Experience</div>
                    <ExperienceItem experienceItems={experienceItems}/>
                </div>
            </div>
        </section>
    )
}






