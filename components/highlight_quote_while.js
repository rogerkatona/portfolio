
export default function HighlightQuoteWhile() {
    return (
        <section className="w-full xl:px-0 md:px-12 px-6 xl:py-24 py-12">
            <div className="flex flex-row justify-center items-center max-w-7xl mx-auto ">
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
                              &quot;While it’s true a website can perform many functions, it must still perform your websites primary task above and if
                              necessary at the cost of all others.&quot;
                </span>
                    <span className="font-bold text-sm pt-2">
                        Roger Katona
                    </span>
                </div>
            </div>
        </section>
    )
}






