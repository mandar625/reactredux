import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux'
import { deleteIt, fetchData } from '../redux/crud/action';
import {useNavigate } from "react-router-dom"

// import { fetchData } from '../redux';


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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Home = () => {
  //  debugger;
  const { users } = useSelector(state => state.crudOpusers)
  let disPatch = useDispatch()
  useEffect(() => {
    disPatch(fetchData())
  }, [])

  const handleDelete = (id) =>{
     disPatch(deleteIt(id))
    }
  
    let navigate  = useNavigate ()
  return (
    <>
    <Button
      onClick={()=>navigate("/addUser")}
    >Add Users</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Contact</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell >{user.name}</StyledTableCell>
              <StyledTableCell >{user.phone}</StyledTableCell>
              <StyledTableCell >{user.email}</StyledTableCell>
              <StyledTableCell >
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button onClick={() => navigate(`/editUser/${user.id}`)} >Edit</Button>
                  <Button onClick={()=> handleDelete(user.id)}>Delete</Button>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

// const mapStateToProps = state =>{
//   // debugger;
//   return{

//     usersDataTag : state.ucrudOpusers
//   }
// }
// const mapDispatchToProps = dispatch =>{
//   return{
//     fetchData : () => dispatch(fetchData())
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Home);
export default Home;