import "./index.css"

export const Bar = ({ name, isname }: any) => {
    /* Create form container with id form--case which holds span of error message for validation */
    return <input className="form" id={isname ? "form-name" : ""} placeholder={name} onFocus={() => {
        console.log("Focus")
    }} />
}