import {GET_USERS ,DELETE_USERS , ADD_USERS , GETSINGLR_USER , UPDATE_USERS} from "./actionType"

import axios from 'axios'

const getData = (usersData) =>{
 return({
    type: GET_USERS,
    payload:usersData
 })
}
const deleteData =()=>{
    return({
        type:DELETE_USERS
    })
}
const addData =()=>{
    return({
        type:ADD_USERS
    })
}
const updateData =()=>{
    return({
        type:UPDATE_USERS
    })
}
const getSingleData =(single)=>{
    return({
        type:GETSINGLR_USER,
        payload:single
    })
}

// Redux Thunk middleware allows you to write action creators that return a 
// function instead of an action.
export const fetchData =()=>{
    return (dispatch) =>{
        axios.get("http://localhost:5000/users").then((res)=>{
            // debugger;
            dispatch(getData(res.data));
        }).catch((err) => err)
    }
}
export const deleteIt =(id)=>{
    return (dispatch) =>{
        axios.delete(`http://localhost:5000/users/${id}`).then((res)=>{
            // debugger;
            dispatch(deleteData());
            dispatch(fetchData());

        }).catch((err) => err)
    }
}
export const addIt =(userData)=>{
    return (dispatch) =>{
        axios.post(`http://localhost:5000/users` , userData).then((res)=>{
            // debugger;
            dispatch(addData());
            dispatch(fetchData());

        }).catch((err) => err)
    }
}
export const updateIt =(user , id)=>{
    return (dispatch) =>{
        axios.put(`http://localhost:5000/users/${id}` , user).then((res)=>{
            // debugger;
            // dispatch(addData());
            dispatch(updateData())
            dispatch(fetchData());

        }).catch((err) => err)
    }
}
export const singleUserData =(id)=>{
    return (dispatch) =>{
        axios.get(`http://localhost:5000/users/${id}`).then((res)=>{
            // debugger;
            // dispatch(addData());
            // dispatch(fetchData());
            dispatch(getSingleData(res.data))

        }).catch((err) => err)
    }
}