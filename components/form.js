import Link from "next/link";
import useForm from "../lib/useForm"


export default function Form(){

    const { formData, validateName, validateEmail, validateForm, handleInputChange} = useForm(
        {
            name: "",
            email: '',
            message: ""
        }
    );

    const { name, email, message } = formData;

    return (
        <form>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <label
                        className="uppercase tracking-wide text-xs">
                        Name*
                    </label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        className={`${validateName ? 'border-danger mb-0' : 'border-darkGray mb-6'} bg-gray-200 text-black border py-3 px-4 `}
                    />
                    <p className={`${validateName ? '' : 'hidden'} flex text-danger text-sm mb-4`}>Please enter your name.</p>
                </div>
                <div className="flex flex-col">
                    <label
                        className="uppercase tracking-wide text-xs">
                        Email*
                    </label>
                    <input
                        name="email"
                        type="email"
                        onChange={handleInputChange}
                        placeholder="example: joe@abc.com"
                        className={`${validateEmail ? 'border-danger  mb-0' : 'border-darkGray mb-4'} bg-gray-200 text-black border py-3 px-4 `}
                    />
                    <p className={`${validateEmail ? '' : 'hidden'} flex text-danger text-sm mb-4`}>Please enter your email address.</p>
                </div>
                <div className="">
                    <div className="">
                        <label
                            className="uppercase tracking-wide text-xs">
                            Anything else?
                        </label>
                        <div>
                        <textarea
                            name="message"
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="What&apos;s on your mind?"
                            className="w-full border border-darkGray py-3 px-4 mb-4"
                        />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Link href=''>
                            <button
                                onClick={(e)=>{validateForm(e)}}
                                type="submit"
                                className="hover:bg-secondary text-white text-2xl uppercase hover:text-gray-50 py-4 px-8 bg-link">
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}