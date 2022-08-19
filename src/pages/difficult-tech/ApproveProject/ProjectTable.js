import * as React from 'react';
import { useState, useReducer } from 'react';

import {
    Button,
    Box,
    Grid,
    Stack,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

const formList = ['All', 'TechCare365', '지원요청서2', '지원요청서3', '지원요청서4', '지원요청서5'];

const SelectItem = ({ name, onChange }) => {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">지원형태</InputLabel>
            <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" name={name} onChange={onChange}>
                {formList.map((forms, index) => (
                    <MenuItem key={index} value={forms}>
                        {forms}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

const SortBar = ({ onChange }) => {
    return (
        <Grid container item xs={12} sx={{ mb: 3 }} justifyContent="flex-start" alignItems="flex-end">
            <SelectItem name="지원형태" onChange={onChange} />
            <Box>
                <Button variant="outlined" color="primary">
                    조회
                </Button>
            </Box>
        </Grid>
    );
};

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const ProjectTable = ({ selectedPost, handleProjectChange, rows }) => {
    // filter state
    const [state, dispatch] = useReducer(reducer, {
        name: '1',
        age: '2',
        date: '3'
    });

    const onChange = (e) => {
        dispatch(e.target);
    };

    const isSelected = (id) => selectedPost.id === id;

    return (
        <Grid item xs={12}>
            <MainCard title="프로젝트 리스트" codeHighlight>
                <SortBar onChange={onChange} />

                <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>프로젝트 이름</TableCell>
                                <TableCell align="center">내용</TableCell>
                                <TableCell align="center">태그</TableCell>
                                <TableCell align="right">날짜</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                const isItemSelected = isSelected(row.id);

                                return (
                                    <TableRow
                                        hover
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={(event) => handleProjectChange(event, row)}
                                        selected={isItemSelected}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.content}</TableCell>
                                        <TableCell align="center">{row.tags}</TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </MainCard>
        </Grid>
    );
};

export default ProjectTable;
