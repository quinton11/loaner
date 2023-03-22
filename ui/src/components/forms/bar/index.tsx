/* import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from "@material-ui/core/IconButton"; */


import "./index.css"

/* Create form container with id form--case which holds span of error message for validation */
export const Bar = ({ name, isname, register, errors, validParams }: any) => {
    var cl = "";
    var type = "text"
    if (isname && name === "Last Name") {
        cl = "form--case-last"
    } else if (isname && name === "First Name") {
        cl = "form--case"
    }

    if ((name === "Date of Birth") || (name === "Due Date")) {
        type = "date"
    }
    else if ((name === "Password") || (name === "Password Again")) {
        type = "password"
    }

    return <div className="form--container" id={cl}>
        <span className="error--message">{errors[name]?.message as string}</span>
        {name === "isEmployed" ?
            <select className={isname ? "form-name" : "form"} {...register(name, validParams)}>
                <option value="employed">Employed</option>
                <option value="jobless">Jobless</option>
            </select> :
            <input className={isname ? "form-name" : "form"} placeholder={name}
                {...register(name, validParams)} type={type}>
            </input>}

    </div>
}