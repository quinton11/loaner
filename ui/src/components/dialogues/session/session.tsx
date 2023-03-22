
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

import "./session.css"



export const SessionDialogue = ({ open }: any) => {
    const navigate = useNavigate()
    return <Dialog
        open={open}
        onClose={() => { }}
        id="session--box"
    >
        <DialogTitle id="alert-session-title">
            {"Loaner Invalid Session"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-session-description">
                Session Ended. Log in?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <button id="session--button" onClick={() => { }}>Exit</button>
            <button id="session--button" onClick={() => {
                navigate("/")
            }}>
                Log In
            </button>
        </DialogActions>
    </Dialog>

}