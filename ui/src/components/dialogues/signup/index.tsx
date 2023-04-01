
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

import "./index.css"



export const SignUpDialogue = ({ open, setOpen, success }: any) => {
    const navigate = useNavigate()
    const failedText = "Couldn't create user"
    const normText = "User created successfully"
    return <Dialog
        open={open}
        onClose={() => { }}
        id="signup--box"
    >
        <DialogTitle id="alert-signup-title">
            {"Loaner Sign-Up"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-signup-description">
                {success ? normText : failedText}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <button id="signup--button" onClick={() => { setOpen(false) }}>Back</button>
            <button id="signup--button" onClick={() => {
                navigate("/")
                setOpen(false)
            }}>
                Done
            </button>
        </DialogActions>
    </Dialog>

}