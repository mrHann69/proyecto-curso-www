
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import YupValidation from "./YupValidation.js";

const AddDelivery = (props) => {
  let initialValue={};

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));
    //TODO update or create 

    props.resetForm();
  };

  if ( props.name===""){
     initialValue = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };
  }else{
     initialValue = {
      name: props.name,
      email: props.email,
      phoneNumber: props.phoneNumber,
      password: props.password,
      confirmPassword: props.confirmPassword,
    };

  }

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Add a delivery</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
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
                    <Field
                      as={TextField}
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="confirmPassword" />}
                      error={
                        props.errors.confirmPassword &&
                        props.touched.confirmPassword
                      }
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

export default AddDelivery;
