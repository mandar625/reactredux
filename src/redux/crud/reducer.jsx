import {GET_USERS ,DELETE_USERS , ADD_USERS, GETSINGLR_USER, UPDATE_USERS} from "./actionType"

const initialState ={
    loading : true,
    users:[],
    user:{},
    error:""
    
}

const crudReducer = (state= initialState , action ) => {
  // debugger;
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: '' 
      }
    case DELETE_USERS:
      return {
        ...state,
        loading: false,
       
      }
    case ADD_USERS:
    case UPDATE_USERS:
      return {
        ...state,
        loading: false,
       
      }
    case GETSINGLR_USER:
      return {
        ...state,
        loading: false,
        user: action.payload
       
      }
    default: 
      return state;
  }
}

export default crudReducer;

