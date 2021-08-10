// components/ExperienceItem.js

import Link from "next/link";

const Experience = props => (
    <div className="pb-4">
        <div className='text-black text-2xl'>{props.company} / <span className="">{props.role}</span></div>
        <div className='text-gray-700 text-xs'>{props.dateRange}</div>
        <div className='text-gray-700 '>{props.overview}</div>
    </div>
);

const ExperienceItem = props => (
    <>
        {props.experienceItems.map(item => (
            <Experience
                key={item.company}
                company={item.company}
                role={item.role}
                overview={item.overview}
                dateRange={item.dateRange}
            />
        ))}
    </>
);

export default ExperienceItem;
