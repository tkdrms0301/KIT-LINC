import { Grid, TextField, Typography, Button } from '@mui/material';
const FormUpload = () => {
    return (
        <Grid>
            <Grid>
                <Grid container spacing={3} alignItems="center">
                    <Grid item>
                        <Typography variant="h3">계획서 업로드</Typography>
                    </Grid>
                    <Grid item>
                        <TextField variant="standard" fullWidth type="text" placeholder="선택된 파일없음" />
                    </Grid>
                    <Grid item>
                        <Button component="label" variant="contained">
                            파일 선택
                            <input accept="video" type="file" hidden />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FormUpload;
