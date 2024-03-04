import React from 'react';
import { Card, CardContent } from '@mui/material';
import Paper from '@mui/material/Paper';
import { TableContainer, TableBody, TableCell, TableRow, TableHead, Table, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#11ba81",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: theme.palette.common.white,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#11ba81",
    },
    '&:nth-of-type(odd)': {
        backgroundColor: "#1ec18a",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function ListCases() {
    const rows = [
        {
            status: "status 1",
            cases: "100 Case"
        },
        {
            status: "status 1",
            cases: "100 Case"
        },
        {
            status: "status 1",
            cases: "100 Case"
        },
        {
            status: "status 1",
            cases: "100 Case"
        },
        {
            status: "status 1",
            cases: "100 Case"
        },
        {
            status: "status 1",
            cases: "100 Case"
        },
    ]
    return (


        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} sx={{ fontWeight: 600, textAlign: "center",fontSize:"1.5rem" }} >Open Cases Status Category</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <StyledTableRow key={idx} >
                            <StyledTableCell sx={{ textAlign: "center" }} >{row.status}</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: "center" }} >{row.cases}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>


    )
}

export default ListCases;