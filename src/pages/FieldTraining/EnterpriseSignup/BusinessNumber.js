import { Grid, Typography, TextField, Button } from '@mui/material';
const BusinessNumber = ({ businessNumberRef, businessNumber, handleBusinessNumber }) => {
    return (
        <Grid>
            <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item>
                    <Typography>사업자등록번호(아이디)</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        defaultValue={businessNumber ? businessNumber : null}
                        variant="standard"
                        placeholder="사업자 등록번호"
                        inputRef={businessNumberRef}
                    ></TextField>
                </Grid>
                <Grid item>
                    <form onClick={handleBusinessNumber}>
                        <Button variant="contained">중복 체크</Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default BusinessNumber;
