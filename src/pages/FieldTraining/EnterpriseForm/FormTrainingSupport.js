import {
    Grid,
    FormControlLabel,
    Checkbox,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Radio,
    Button,
    Stack,
    RadioGroup
} from '@mui/material';
const FormTrainingSupport = ({ requestInfo, onChangeRequestInfo, onChangeEtcResource, etcResourceCheck }) => {
    const etcResources = ['식사', '교통', '기숙사'];

    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h5">정규실습시간</Typography>
                    <Grid container spacing={3}>
                        <Grid item>
                            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                <InputLabel>월/주 선택</InputLabel>
                                <Select
                                    label="실습 구분"
                                    name="txRegularTrainingSelect"
                                    value={requestInfo.txRegularTrainingSelect}
                                    onChange={onChangeRequestInfo}
                                >
                                    <MenuItem value={'월'}>월</MenuItem>
                                    <MenuItem value={'주'}>주</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField
                                name="txRegularMoney"
                                defaultValue={requestInfo.txRegularMoney}
                                onBlur={onChangeRequestInfo}
                                type="text"
                                variant="standard"
                                label="지급기준/원"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">지급예정일</Typography>
                    <Grid container spacing={3}>
                        <Grid item>
                            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                <InputLabel>당월/익월 선택</InputLabel>
                                <Select
                                    label="당월/익월 선택"
                                    name="txPaymentSelect"
                                    value={requestInfo.txPaymentSelect}
                                    onChange={onChangeRequestInfo}
                                >
                                    <MenuItem value={'당월'}>당월</MenuItem>
                                    <MenuItem value={'익월'}>익월</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField
                                name="txPaymentDate"
                                defaultValue={requestInfo.txPaymentDate}
                                onBlur={onChangeRequestInfo}
                                type="text"
                                variant="standard"
                                label="일"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid>
                        <Typography variant="h5">연장실습시간</Typography>
                        <Grid>
                            <TextField
                                name="txExtension"
                                defaultValue={requestInfo.txExtension}
                                onBlur={onChangeRequestInfo}
                                type="text"
                                variant="standard"
                                label="지급기준/원"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">기타 지원 사항</Typography>
                    <Grid container>
                        {etcResources.map((etcResource, index) => (
                            <Grid item xs={4} key={index}>
                                <FormControlLabel
                                    value={etcResource}
                                    onChange={(e) => onChangeEtcResource(e.target.checked, e.target.value)}
                                    control={<Checkbox />}
                                    label={etcResource}
                                    checked={etcResourceCheck.includes(etcResource) ? true : false}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FormTrainingSupport;
