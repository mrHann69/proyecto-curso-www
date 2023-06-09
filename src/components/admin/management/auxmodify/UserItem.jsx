import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBox from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


export default function UserItem(props){
    const [showComponent, setShowComponent] = useState(true);
    const dispatch=useDispatch();

    const handleClickDelete=async ()=>{

        try{
            const token=localStorage.getItem('x_access_token');
            await axios.delete(
                  process.env.REACT_APP_BACKEND_URI+'/user',
                {
                    params:{id:props.id},
                    headers: { 
                      x_access_token:token,
                    },
                  }
            );

            alert("se ha eliminado con exito");
            setShowComponent(false)
        }catch (error) {
          console.log(error.response);
        }
        
    }
    const handleClickupdate=async()=>{

        const token=localStorage.getItem('x_access_token');
        await axios.get(process.env.REACT_APP_BACKEND_URI+'/user'
            ,{
                params:{id:props.id},
                headers:{x_access_token:token}
            }).
        then(response=>{
            dispatch({type:'UPDATE_PERSONAL',user:response.data})                
        })
        
    }

    return (
        <div>
        { showComponent &&
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccountBox/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.primary} secondary={props.secondary}/>
                <Button sx={{ backgroundColor: 'purple', width:'60px',height:'30px' }} onClick={handleClickupdate}>
                  Update 
                </Button>
                <Button sx={{ backgroundColor: 'red' ,width:'60px',height:'30px' }} onClick={handleClickDelete}>
                    Delete
                    
                </Button>
            </ListItem>
        }
        </div>
    );
}
