import {useState} from "react";


export const Form = ({ initialRef}) => {

    const [submitState, setSubmitState] = useState()
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [toast, setToast] = useState({
        title: '',
        type: '',
        message: ''
    })



    const clearFormState = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({setFormState: {}});
    }


    const handleContactFormSubmit = async (e) => {
        e.preventDefault()
        const { name, email } = formState
        const { title, type, message } = toast
        if (name && email) {
            try {
                console.log('if an error occurs, will submitting form')
                setToast({type: "success" });
                console.log(toast.type);
                clearFormState()
            } catch (e) {
                console.log('if an error occurs, will submitting form')
            }
        } else {
            console.log('enter that email and name need to be filled out')


        }
    }

    return (
        <>
        <form onSubmit={handleContactFormSubmit}>
            <div className="flex flex-col relative">

                {/*show message to user*/}
                <div className={`${toast ? 'block' : 'hidden'} text-danger absolute bottom-0 -mb-10 `}>
                    Please verify all fields are filled out.
                </div>

                <div className="flex flex-col">
                    <label
                        className="uppercase tracking-wide text-xs">
                        Name*
                    </label>
                    <input
                        ref={initialRef}
                        className="bg-gray-200 text-black border py-3 px-4 mb-4"
                        placeholder="Enter your name"
                        value={formState.name}
                        onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="uppercase tracking-wide text-xs">
                        Email*
                    </label>
                    <input
                        className="bg-gray-200 text-black border py-3 px-4 mb-4"
                        placeholder="yourname@email.com"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                        }
                    />
                </div>
                <div className="">
                    <div className="">
                        <label
                            className="uppercase tracking-wide text-xs">
                            Anything else?
                        </label>
                        <div>
                        <textarea
                            className="w-full border border-darkGray py-3 px-4 mb-4"
                            rows="4"
                            value={formState.message}
                            onChange={(e) =>
                                setFormState({ ...formState, message: e.target.value })
                            }
                        />
                        </div>
                    </div>
                </div>
                <div className="">
                            <button
                                type="submit"
                                className="hover:bg-secondary text-white text-2xl uppercase hover:text-gray-50 py-4 px-8 bg-link">
                                Submit
                            </button>
                </div>
            </div>
        </form>
        </>
    )
}