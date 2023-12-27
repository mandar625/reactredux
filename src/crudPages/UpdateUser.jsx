import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate , useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { singleUserData, updateIt } from '../redux/crud/action';


const UpdateUser = () => {
  let disPatch = useDispatch()
  const {user } = useSelector(state=> state.crudOpusers)

    const [state, setState] = useState({
        name :"",
        phone:"",
        email:""
    })
    let navigate  = useNavigate ()
    let {id } = useParams()
    useEffect(()=>{
        disPatch(singleUserData(id))
    },[])
    useEffect(()=>{
        setState({
           ...user

        })
    },[user])
    const {name , email, phone} = state
    const handeChange = (e ,fieldName)=>{
        // debugger
        // let {name , value } = e.taget
        setState({
            ...state,
            [fieldName]:e.target.value

        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        disPatch(updateIt(state, id))
        navigate('/')
    }
    return (
        <><Button onClick={( )=> navigate('/')} >
            go back
        </Button>
         <h3>Edit</h3>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

                <form onSubmit={handleSubmit}>

                    <TextField id="standard-basic" label="Standard" value={name} type='text' onChange={ e =>handeChange(e ,"name")} />
                    <TextField id="standard-basic" label="Standard" value={email} type='text' onChange={e => handeChange(e,"email" )}/>
                    <TextField id="standard-basic" label="Standard" value={phone} type='text' onChange={e =>handeChange(e, "phone")}/>
                    <Button type='submit'>
                        Update
                    </Button>
                </form>
            </Box></>
    )
}

export default UpdateUser