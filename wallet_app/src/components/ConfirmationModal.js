import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

function ConfirmationModal({ openDialog, closeDialog, onConfirmed, message }) {
    return (
        <Dialog open={openDialog} onClose={closeDialog}>
            <DialogTitle>Megerősítés szükséges</DialogTitle>
            <DialogContent>
                <Typography variant={"body1"}>
                    {message}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant={"contained"} color={"error"} onClick={() => {
                    onConfirmed();
                    closeDialog();
                }}>Igen</Button>
                <Button variant={"outlined"} onClick={closeDialog}>Nem</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationModal