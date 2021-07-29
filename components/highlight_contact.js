import Link from "next/link";
import Modal from "./modal";
import useModal from "../lib/useModal";

export default function HighlightContact() {
    const {isShowing, toggle} = useModal();
    return (
        <>
            <section className="lg:m-24 mx-8 my-24">
                <div className="flex flex-row justify-center">
                    <div className="">
                        <div className="text-3xl text-center">
                                Reach out.  I want to hear from you.
                        </div>
                        <div className="flex justify-center pt-6">
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

