
const Toast = props => (
    <div className="text-danger absolute bottom-0 -mb-10">
        <div>
            {props.message}
        </div>
    </div>
);


const ToastItem = props => (
    <>
        {props.toastItems.map(item => (
            <Toast
                key={item.type}
                type={item.type}
                message={item.message}
            />
        ))}
    </>
);

export default ToastItem;