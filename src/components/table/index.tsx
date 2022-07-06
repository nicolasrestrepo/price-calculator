import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from './styles';

import { IFlavors } from '../../pages/iceCream/iceCream.types'

function createData(
  name: string,
  value: number,
) {
  return { name, value};
};

interface IProps {
    data: IFlavors[]
}

export default function BasicTable({ data }: IProps) {

    const [ rows, setRows ] = useState<any[]>([])

    useEffect(() => {
        const newRows = data.filter(({value}) => value !== 0)
        .map(({name, value}: IFlavors) => createData(name, value));

        setRows(newRows);
    }, [data]);

  return (
   <Container>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of Flavor</TableCell>
            <TableCell align="right">Price</TableCell>
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
              <TableCell align="right">${row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Container>   

  );
}