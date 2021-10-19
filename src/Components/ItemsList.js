import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import  firebase from 'firebase';
import database from '../firebase';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
      },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
            border: 0,
      },
}));

// function createData(name, calories, fat, carbs, protein) {
//       return { name, calories, fat, carbs, protein };
// }

// const rows = [
//       createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//       createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//       createData('Eclair', 262, 16.0, 24, 6.0),
//       createData('Cupcake', 305, 3.7, 67, 4.3),
//       createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


const ItemsList = ({ CartItems }) => {


      // console.log("::::::::::", CartItems)
      return (
            <Paper elevation={8} style={{ backgroundColor: "#99ffff", borderRadius: 15, height: 550, justifyContent: "center", textAlign: "center",margin:0,padding:20 }}>
                  <TableContainer component={Paper}>
                        <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
                              <TableHead>
                                    <TableRow>
                                          <StyledTableCell>S.No.</StyledTableCell>
                                          <StyledTableCell>Item Id</StyledTableCell>
                                          <StyledTableCell >Item name</StyledTableCell>
                                          <StyledTableCell align="right">Quantity</StyledTableCell>
                                          <StyledTableCell align="right">MRP</StyledTableCell>
                                          <StyledTableCell align="right">price</StyledTableCell>
                                          <StyledTableCell align="right">Total</StyledTableCell>

                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {CartItems?.map((row, i) => (
                                          <StyledTableRow key={row.itemId}>
                                                <StyledTableCell >{i +1}</StyledTableCell>
                                                <StyledTableCell >{row.itemId}</StyledTableCell>

                                                <StyledTableCell component="th" scope="row">
                                                      {row.itemName}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                                                <StyledTableCell align="right">{row.priceperItem}</StyledTableCell>
                                                <StyledTableCell align="right">{row.priceperItem - 1}</StyledTableCell>
                                                <StyledTableCell align="right">{row.quantity * (row.priceperItem - 1)}</StyledTableCell>
                                          </StyledTableRow>
                                    ))}
                              </TableBody>
                        </Table>
                  </TableContainer>
            </Paper>
      )
}

export default ItemsList

