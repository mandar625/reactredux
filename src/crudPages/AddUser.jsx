import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { addIt } from '../redux/crud/action';


const AddUser = () => {
  let disPatch = useDispatch()

    const [state, setState] = useState({
        name :"",
        phone:"",
        email:""
    })
    let navigate  = useNavigate ()

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
        disPatch(addIt(state))
        navigate('/')
    }
    return (
        <><Button onClick={( )=> navigate('/')} >
            go back
        </Button><Box
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
                        submit
                    </Button>
                </form>
            </Box></>
    )
}

export default AddUser