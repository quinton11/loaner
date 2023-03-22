import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

import "./loanDialogue.css"


export const LoanDialogue = ({ open, set, success }: any) => {
    const navigate = useNavigate()
    return <Dialog open={open} onClose={() => { }} >
        <DialogTitle id="loan-dialogue-title">Create Loan</DialogTitle>
        <DialogContent>
            <DialogContentText id="loan-dialogue-text">
                {success ? "Loan application successful" : "Sorry,couldn't apply for loan"}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {
                set(false)
                navigate(-1)
            }} id="loan--button">Ok</Button>
        </DialogActions>
    </Dialog>
}