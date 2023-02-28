import { Grid, TextField } from '@mui/material';
const FormManager = ({ managerInfo, onChangeManagerInfo }) => {
    const managerInfoList = [
        {
            name: 'miDepartment',
            label: '부서명',
            default: managerInfo.miDepartment
        },
        {
            name: 'miName',
            label: '성명',
            default: managerInfo.miName
        },
        {
            name: 'miPosition',
            label: '직위',
            default: managerInfo.miPosition
        },
        {
            name: 'miContact',
            label: '연락처',
            default: managerInfo.miContact
        },
        {
            name: 'miPhoneNum',
            label: '휴대폰',
            default: managerInfo.miPhoneNum
        },
        {
            name: 'miEmail',
            label: '이메일',
            default: managerInfo.miEmail
        }
    ];
    return (
        <Grid>
            <Grid container spacing={3}>
                {managerInfoList.map((managerInfos, index) => (
                    <Grid item xs={6} key={index}>
                        <TextField
                            required
                            name={managerInfos.name}
                            defaultValue={managerInfos.default}
                            fullWidth
                            type="text"
                            variant="standard"
                            label={managerInfos.label}
                            onBlur={onChangeManagerInfo}
                        ></TextField>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};
export default FormManager;
