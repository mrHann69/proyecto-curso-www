import {useState,useEffect} from "react";

import List from '@mui/material/List'
import Pagination from '@mui/material/Pagination';
import UserItem from './UserItem.jsx'

import Box from '@mui/material/Box';

import axios from 'axios';

export default function UserList(){

    const [users, setUsers]=useState([])
    const [pag,setPag]=useState(1);
    const handlePagChange= (event,value)=>{
    
        setPag(value)
    }
    const token=localStorage.getItem('x_access_token');
    const getUserList=async ()=>{
                
                await  axios.get(process.env.REACT_APP_BACKEND_URI+'/users', {headers:{x_access_token:token}})
            .then(response=>{
                                setUsers(response.data); 
                            })
            .catch(error => {
                              console.error('Error:', error);
                            }); 
    }

    useEffect(()=>{
        getUserList();
    },[])
    
    return (
        <div>
            <Box
                bgcolor="white"
                width={700}
                height={500}
                boxShadow={1}
            >
                <List>
                    { users?.slice((5*pag)-5,5*pag).map((item)=>(
                        <UserItem primary={item.name} secondary={item.roleuser} id={item.id}/>
                    ))} 
                </List>     

                <Pagination 
                    color="primary" 
                    count={10}
                    page={pag}
                    onChange={handlePagChange}
                /> 

            </Box>
        </div>
    ); 
}
