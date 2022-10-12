import { Grid, Box, Typography, TextField, Button, Stack } from '@mui/material';

import MainCard from 'components/MainCard';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
const Login = () => {
    const navigation = useNavigate();
    const height = document.documentElement.clientHeight;
    const [login, setLogin] = useState({
        id: '',
        password: ''
    });
    const onChangeLogin = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        });
    };
    const onClickLogin = (e) => {
        console.log(login);
        const formData = new FormData();
        formData.append('loginId', login.id);
        formData.append('password', login.password);
        axios.defaults.withCredentials = true;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        };
        axios
            .post('http://337se.duckdns.org:80/api/member/login', formData, config)

            .then((res) => {
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            });

        //navigation('/');
    };
    return (
        <>
            <MainCard sx={{ height: height }}>
                <Grid
                    container
                    direction="column"
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: String(height / 4) + 'px' }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h2" sx={{ color: '#0168d2', textAlign: 'center' }}>
                            아이디 LOGIN
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ textAlign: 'center' }}>아이디와 비밀번호를 입력하세요</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="column" spacing={3} justifyContent="center" alignItems="center">
                            <Grid item xs={4}>
                                <TextField
                                    onBlur={onChangeLogin}
                                    name="id"
                                    defaultValue={login.id}
                                    placeholder="아이디"
                                    sx={{ width: '250px' }}
                                ></TextField>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    onBlur={onChangeLogin}
                                    name="password"
                                    defaultValue={login.password}
                                    placeholder="비밀번호"
                                    sx={{ width: '250px' }}
                                ></TextField>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={onClickLogin} variant="contained" sx={{ width: '250px' }}>
                                    로그인
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" spacing={3} justifyContent="center" alignItems="center">
                            <Grid item>
                                <Typography>아이디 찾기</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>비밀번호 찾기</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};
export default Login;
