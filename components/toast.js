import global from "../lib/global";


export default function Toast() {

    return (
        <>
            <p className={`${global.form.showSuccess ? '' : 'hidden'} flex text-danger text-sm`}>Please enter your name.</p>
        </>
    );
}
