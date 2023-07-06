
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import YupValidation from "../YupValidation.js";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function  Modify(props){
  const usr=useSelector(state=>state.user) 

  const name=useSelector(state=>state.user.name);
  const [email,setEmail]=useState(usr.email);
  const [phoneNumber,setPhoneNumber]=useState(usr.phoneNumber);
  const [password,setPassword]=useState(usr.password);
  const [city,setCity]=useState(usr.city);
  const [address,setAdress]=useState(usr.address);

  const initialValue = useSelector(state=> state.user);

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));
    //TODO update or create 

    props.resetForm();
  };


  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={3} p={3}>
            <Typography variant="h5">Modify user</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                return (
                  <Form>
                    {/* First Way */}
                    <TextField
                      label="Name"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      value={name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="name" />}
                      error={props.errors.name && props.touched.name}
                      required
                    />
                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="Email"
                      type="Email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="email" />}
                      error={props.errors.email && props.touched.email}
                    />

                    <Field
                      as={TextField}
                      label="Phone Number"
                      name="phoneNumber"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="phoneNumber" />}
                      error={
                        props.errors.phoneNumber && props.touched.phoneNumber
                      }
                    />

                    <TextField
                      label="Address"
                      name="address"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="address" />}
                      error={props.errors.name && props.touched.name}
                      required
                    />
                    <TextField
                      label="City"
                      name="city"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="city" />}
                      error={props.errors.name && props.touched.name}
                      required
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                      error={props.errors.password && props.touched.password}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};

