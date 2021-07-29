import Image from "next/image";

export default function HighlightCSMck({ children, type }) {
    return (
        <section className="flex flex-row justify-around flex-wrap items-center m-10">
            <div>
                <Image
                    alt={'floridaBlue'}
                    src="/images/logo-fblue.png"
                    height={54}
                    width={202}
                />
            </div>
            <div>
                <Image
                    src="/images/logo-simplymedical.png"
                    height={35}
                    width={204}
                    alt={'simplymedical'}
                />
            </div>
            <div>
                <Image
                    src="/images/logo-mckesson.png"
                    height={29}
                    width={170}
                    alt={'mckesson'}
                />
            </div>
            <div>
                <Image
                    src="/images/logo-rsfx.png"
                    height={35}
                    width={276}
                    alt={'rsfx'}
                />
            </div>
            <div>
                <Image
                    src="/images/logo-mobymax.png"
                    height={34}
                    width={130}
                    alt={'mobymax'}
                />
            </div>
            <div>
                <Image
                    priority
                    src="/images/logo-websense.png"
                    height={28}
                    width={156}
                    alt={'websense'}
                />
            </div>
        </section>
    )
}






