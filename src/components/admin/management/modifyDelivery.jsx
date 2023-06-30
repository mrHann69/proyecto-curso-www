import {Card} from "@mui/material";
import {Stack} from "@mui/system";
import {useState} from "react";
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CardContent from '@mui/material/CardContent';
import AddDelivery from './addDelivery.jsx'

export default function ModifyDelivery(){
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
  <Stack direction={"row"} spacing={1}>
    <List>
        {
          ls.map((item,index)=>(
             <ListItem alignItems="flex-start"> 
                 <Card>
                   <CardActionArea onClick={()=>handleClick(index)}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>              
             </ListItem>
          ))
        }
      </List>
      <AddDelivery {...currentInfo}/>
  </Stack>);
}
