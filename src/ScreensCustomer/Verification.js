import React, { useState } from 'react'
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import firebase from '../firebase'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import app from '../firebase';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';






const Verification = () => {
      const [name, setname] = useState()
      const [phone, setphone] = useState(null)
   
   
      return (
            <Box>
                  <Container maxWidth="sm" style={{ marginTop: 100, marginBottom: 140, justifyContent: "center", alignItems: "center", marginLeft: "auto" }}>
                        <Stack spacing={2}>
                              {/* <Item> */}
                              {/* <Grid > */}
                              <h1 alignItems="center">Enter Credencials</h1>
                              <div id="recaptcha-container"></div>
                              <TextField

                                    error={!isNaN(+ phone) ? false : true}
                                    helperText={!isNaN(+ phone) ? null : "Enter a valid NO"}
                                    id="outlined-basic"
                                    label="Phone number"
                                    variant="outlined"
                                    value={phone}
                                    onChange={(text) => {
                                          console.log(typeof (phone))
                                          setphone(text.target.value)
                                    }}
                              />

                              {/* <p style={{marginTop:-3}}>OTP will be send to this number for validation</p> */}
                              {/* </Grid> */}
                              {/* </Item> */}
                              {/* <Item> */}
                              <TextField

                                    id="outlined-basic"
                                    label="Enter name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(text) => {
                                          console.log(typeof (name))
                                          setname(text.target.value)
                                    }}
                              />
                              {/* </Item> */}
                              {/* <Item> */}
                              <Button variant="contained" onSubmit={console.log("hello")}>Verify</Button>
                              {/* </Item> */}
                        </Stack>

                  </Container>
            </Box>
      )
}

export default Verification
