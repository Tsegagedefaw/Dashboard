import * as React from 'react';
import './Table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/material';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status};
}

const rows = [
  createData('Frozen yoghurt', 100121, '1 Jun 2023', "Approved"),
  createData('Ice cream sandwich', 100122, '2 Jun 2023', "Pending"),
  createData('Eclair', 100123, '2 Jun 2023', "Approved"),
  createData('Cupcake', 100124, '2 Jun 2023', "Pending"),
  createData('Gingerbread', 100125, '2 Jun 2023',"Delivered"),
];

const makeStyle=(status)=>{
    if(status === 'Approved'){
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    }else if(status === 'Pending'){
        return {
            background: '#ffada8',
            color: 'red'
        }
    }else{
        return {
            background: '#59bfff',
            color: 'blue'
        }
    }
}

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
        <TableContainer component={Paper}
        style={{boxShadow: '0px 13px 20px 0px #80808029'}}
        >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">TrackingID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.trackingId}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <span className='status' style={makeStyle(row.status)}>
                    {row.status}
                </span>
              </TableCell>
              <TableCell align="right">Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}
