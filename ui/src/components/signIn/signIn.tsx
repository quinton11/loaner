import "./signIn.css"

export const SignIn = ({ setMain }: any) => {
    const setM = setMain as React.Dispatch<React.SetStateAction<boolean>>
    console.log(setM)
    return <div className="signIn">Sign In</div>
}