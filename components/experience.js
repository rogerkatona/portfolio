import ExperienceItem from "../components/experienceItem";
import experienceItems from "../data/experienceItems";
import Link from "next/link";

export default function Experience() {
    return (
        <section className="my-12">
            <div className="flex flex-row items-center max-w-7xl  mx-auto ">
                <div className='flex flex-col flex-shrink-0 mr-12 hidden lg:block '>
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
                <div className="flex flex-col my-12 items-start justify-start">
                    <div className='font-roboto text-3xl tracking-tighter pb-6'>Work Experience</div>
                    <ExperienceItem experienceItems={experienceItems}/>
                </div>
            </div>
        </section>
    )
}






