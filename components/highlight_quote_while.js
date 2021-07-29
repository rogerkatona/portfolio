
export default function HighlightQuoteWhile() {
    return (
        <section className="bg-gray w-full my-24">
            <div className="flex flex-row justify-center items-center max-w-7xl mx-auto lg:py-24 p-8">
                <div className='flex flex-col flex-shrink-0 mr-24 hidden lg:block'>
                    <img
                        src="/image/quote-graphic.png"
                        height={198}
                        width={56}
                        alt={'simple quote graphic'}
                    />
                </div>
                <div className="flex flex-col my-12">
                <span className="lg:text-3xl text-2xl">
                              &quot;While it’s true a website can perform many functions, it must still perform your websites primary task above and if
                              necessary at the cost of all others.&quot;
                </span>
                    <span className="font-bold text-sm mt-2">
                        Roger Katona
                    </span>
                </div>
            </div>
        </section>
    )
}






