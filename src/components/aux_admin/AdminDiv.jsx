import "./AuxAdmin.css";

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  flexGrow: 1,
  textAlign: 'center',
   margin:"auto",
   paddingTop:65,
}));

export default function AdminDiv(props){
    return(  
    <Item sx={{ width: "90%" , height:"85%"}}>
        {props.component}
    </Item>
 );
}
