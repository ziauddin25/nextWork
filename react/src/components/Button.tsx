export default function Button({onclick, children}:any) {
    return (
        <button onClick={onclick}>{children}</button>
    )
};