import {Form} from "./form";
import {useRef} from "react";

export default function CampaignCTA002() {
    const initialRef = useRef()
    return (
        <>
            <section className="flex flex-col max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center ">
                    <div className='font-roboto text-4xl tracking-tighter text-white text-center'>Invest In Your Users. They Deserve It.</div>
                    <div className="my-10 p-6 bg-campaignLight flex flex-col justify-center lg:w-2/5">
                        <Form initialRef={initialRef} />
                    </div>
                </div>
            </section>
        </>
    )
}






