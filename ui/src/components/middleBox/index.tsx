import CircularProgress from '@mui/joy/CircularProgress'
/* import { createTheme } from '@mui/material/styles'; */
import "./index.css"


export const MiddleBox = () => {
    return <div className="middle--box">
        <div className="middle--text">Dashboard</div>
        <div className="middle--info">
            <div className="info--balance">
                <div className="balance--header">Loan Balance:</div>
                <div className="balance--amount">
                    <span id="ghc">GHC</span>
                    4200
                </div>
            </div>
            <div className="info--balance">
                <div className="balance--header">Interest Rate:</div>
                <div className="balance--amount" id="ir">
                    %4.5
                </div>
            </div>
            <div className="info--balance">
                <div className="balance--header">%Paid:</div>
                <div className="balance--amount">

                    <CircularProgress id="circpro" determinate variant="soft" color="primary" value={23.2} thickness={3}>
                        %23.2
                    </CircularProgress>
                </div>
            </div>

        </div>
    </div>
}