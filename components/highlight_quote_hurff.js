

export default function HighlightQuoteHurff() {
    return (
        <section className="">
            <div className="flex flex-row justify-center items-center max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                <div className='flex flex-col flex-shrink-0 pr-12 hidden lg:block'>
                    <img
                        src="/image/quote-graphic.png"
                        height={198}
                        width={56}
                        alt={'simple quote graphic'}
                    />
                </div>
                <div className="flex flex-col">
                <span className="lg:text-3xl text-2xl">
                        &quot;Roger is the most talented UX/UI specialist I have ever worked with.
                        ...his real gift is in being able to make a software application&apos;s user interface easy
                        to use while simultaneously filling the business needs at hand.&quot;
                    </span>
                    <span className="font-bold text-sm pt-2">
                        Jimmy Hurff <br/>
                        <span className="font-light">Senior VP, GHX
                    </span>
                    </span>
                </div>
            </div>
        </section>
    )
}






