const initialState={
    user:{
      id: "",
      name: "",
      email: "",
      phoneNumber:"",
      address:"",
      city:"",
      address:"", 
      password: "",
    }
}

export default function manageReducer (state=initialState,action){
    switch (action.type){
        case 'UPDATE_PERSONAL':
            return {user:action.user, ... state}
        default:
            return state;
    }
} 
