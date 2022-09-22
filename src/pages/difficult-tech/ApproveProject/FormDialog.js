import { Button, DialogTitle, Dialog, DialogContent, TextField, DialogActions } from '@mui/material';

export default function FormDialog({ open, handleClose, rejectReasonRef, onSubmitRejectProject }) {
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>프로젝트 거절</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="프로젝트 거절 사유"
                        type="email"
                        sx={{ width: '400px' }}
                        variant="standard"
                        inputRef={rejectReasonRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button variant="contained" onClick={onSubmitRejectProject}>
                        거절
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
