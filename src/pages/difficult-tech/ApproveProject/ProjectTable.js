import * as React from 'react';
import { useState, useReducer } from 'react';
import ProjectSort from './ProjectSort';

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

const ProjectTable = ({ requestForm, onChangeRequestForm, onSubmitRequestForm, selectedPost, handleProjectChange, rows, categoryList }) => {
    const isSelected = (id) => selectedPost.id === id;
    return (
        <Grid item xs={12}>
            <MainCard title="애로기술 리스트" codeHighlight>
                <ProjectSort
                    requestForm={requestForm}
                    onChangeRequestForm={onChangeRequestForm}
                    onSubmitRequestForm={onSubmitRequestForm}
                    categoryList={categoryList}
                />

                <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>지원형태</TableCell>
                                <TableCell>프로젝트 이름</TableCell>
                                <TableCell>프로젝트 내용</TableCell>
                                <TableCell>날짜</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                const isItemSelected = isSelected(row.id);

                                return (
                                    <TableRow
                                        hover
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={(event) => handleProjectChange(event, row)}
                                        selected={isItemSelected}
                                    >
                                        <TableCell>{row.projectType}</TableCell>
                                        <TableCell>{row.projectName}</TableCell>
                                        <TableCell>{row.projectDetail}</TableCell>
                                        <TableCell>{row.createdDate}</TableCell>
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
