import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function ShopkList({items}) {
  // const [itemss, setitems] = React.useState([])
  // setitems(items.props)
  console.log("AAAAAAaa",items)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item Id</TableCell>
            
            <TableCell align="right">Item Name</TableCell>
            <TableCell align="right">Quantity Available</TableCell>
            <TableCell align="right">Price/item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((row) => (
            <TableRow
              key={row.itemId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.itemId}</TableCell>
              <TableCell align="right">{row.itemName}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.priceperItem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
