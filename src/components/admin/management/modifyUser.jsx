import {Stack} from "@mui/system";
import {useState} from "react";
import Modify from './auxmodify/modify.jsx';
import UserList from './auxmodify/UserList.jsx';

import manageReducer from './reducers/manageReducer.js';
import {  createStore  } from 'redux';
import { Provider } from 'react-redux';

export default function ModifyUser(){

  const modifyStore= createStore (manageReducer);
  const ls=[{name:"jangel", email:"angel.juan@gmail.com", phoneNumber: "3143645710",password:"assdsada",confirmPassword:"assdsada"},
            { name:"manuel patiño", email:"manuel@gmail.com",phoneNumber: "3143645710",password:"assdsada",confirmPassword:"assdsada"},
            { name: "karen Vichota", email:"kvichota@gmail.com",phoneNumber: "3143645710",password:"assdsada",confirmPassword:"assdsada"}]

  const [currentInfo,setCurrentInfo]=useState({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
  });

  const handleClick=(index)=>{
    setCurrentInfo(index);
  }

  return( 
  <Provider store={modifyStore}>
  <Stack direction={"row"} spacing={1}>
    <Modify {...currentInfo}/>
    <UserList/>
  </Stack>
  </Provider>
);
}
