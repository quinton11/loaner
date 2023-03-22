import "./index.css"
export const LoanBox = ({ loans }: any) => {
    return <div className="main--loans">
        {loans ? "exist" : <div className="none">No Loans</div>}
    </div>
}


