import "./signUp.css"

export const SignUp = ({ setMain }: any) => {
    const setM = setMain as React.Dispatch<React.SetStateAction<boolean>>
    console.log(setM)
    return <div className="signUp">Sign Up</div>
}