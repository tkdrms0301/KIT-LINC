import { Grid, TextField, Typography } from '@mui/material';
const FormUpload = () => {
    return (
        <Grid>
            <Grid>
                <Grid container spacing={3} align="center">
                    <Grid item>
                        <Typography variant="h3">계획서 업로드</Typography>
                    </Grid>
                    <Grid item>
                        <TextField variant="standard" fullWidth type="text" placeholder="선택된 파일없음" />
                    </Grid>
                    <Grid item>
                        <form>
                            <input className="ex_file" accept="video" type="file" />
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FormUpload;
