import CircularProgress from '@mui/joy/CircularProgress'
/* import { createTheme } from '@mui/material/styles'; */
import "./index.css"
import { totalAmount, totalPaid } from '../../utils/util';


export const MiddleBox = ({ loans }: any) => {
    const exists: boolean = (loans);

    return <div className="middle--box">
        <div className="middle--text">Dashboard</div>
        <div className="middle--info">
            <div className="info--balance">
                <div className="balance--header">Loan Balance:</div>
                <div className="balance--amount">
                    <span id="ghc">GHC</span>
                    {exists ? totalAmount(loans) : 0}
                </div>
            </div>
            <div className="info--balance">
                <div className="balance--header">Interest Rate:</div>
                <div className="balance--amount" id="ir">
                    %{exists ? loans[0].rate : 0}
                </div>
            </div>
            <div className="info--balance">
                <div className="balance--header">%Paid:</div>
                <div className="balance--amount">

                    <CircularProgress id="circpro" determinate variant="soft" color="primary" value={exists ? totalPaid(loans) : 0} thickness={3}>
                        %{exists ? totalPaid(loans) : 0}
                    </CircularProgress>
                </div>
            </div>

        </div>
    </div>
}