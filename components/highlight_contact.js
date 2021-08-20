import Link from "next/link";
import Modal from "./modal";
import useModal from "../lib/useModal";

export default function HighlightContact() {
    const {isShowing, toggle} = useModal();
    return (
        <>
            <section className="">
                <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 xl:py-24 py-12">
                <div className="flex flex-row justify-center">
                    <div className="">
                        <div className="lg:text-3xl text-2xl text-center">
                                Reach out.  I want to hear from you.
                        </div>
                        <div className="flex justify-center lg:pt-6">
                            <Link href=''>
                                <button
                                    onClick={toggle}
                                    className="hover:bg-hoverLink text-white  text-2xl uppercase hover:text-gray-50 p-4 bg-link hover:border-white lg:mt-0 mt-4 lg:mx-8"
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </>
    )
}

