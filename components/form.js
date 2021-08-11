import {useState} from "react";



export const Form = ({ initialRef}) => {

    const initialState = {
        name: '',
        email: '',
        contactMessage: ''
    };

    const [formState, setFormState] = useState(initialState);
    const [toastMessage, setToastMessage] = useState({
        type: '',
        message: ''
    });

    const clearFormState = () => {
        setFormState({ ...initialState });
    };

    const handleContactFormSubmit = async (e) => {
        e.preventDefault()
        const { name, email} = formState
        const { message } = toastMessage
        if (name && email) {
            try {
                fetch('https://5zk902u879.execute-api.us-east-1.amazonaws.com/contactForm', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                        'Content-Type': 'application/json; charset=utf-8',
                        'Access-Control-Allow-Origin' : '*',
                        "Access-Control-Allow-Methods" : "OPTIONS,POST",
                        "X-Requested-With" : "*"
                    },
                    body: JSON.stringify(formState)
                }).then((res) => {
                    if (res.status === 200) {
                        setToastMessage({message:(
                                <div className="text-green-800 absolute bottom-0 -mb-10">
                                    Thank you for reaching out to me.  I'll respond to you shortly!  Have a great day.
                                </div>
                            )})
                        clearFormState()
                    }
                })
            } catch (e) {
                setToastMessage({message:(
                        <div className="text-danger absolute bottom-0 -mb-10">
                            Deepest apologies.  There was an error with your request.  Please try again later.
                        </div>
                    )})
            }
        } else {
            setToastMessage({message:(
                    <div className="text-danger absolute bottom-0 -mb-10">
                        Please verify all fields are filled out.
                    </div>
                )})
        }
    };



    return (
        <>
        <form onSubmit={handleContactFormSubmit}>
            <div className="flex flex-col relative">

                {/*show message to user*/}
                {toastMessage.message}

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
                            value={formState.contactMessage}
                            onChange={(e) =>
                                setFormState({ ...formState, contactMessage: e.target.value })
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