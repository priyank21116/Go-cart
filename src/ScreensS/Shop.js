import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import ShopkList from '../Components/S/ShopkList';
import AddItem from '../Components/S/AddItem';

const Shop = () => {
      const [shopDetail, setshopDetail] = useState({
            ShopName: '',
            ShopUnquieId: '',
            ShopContact: '',
            Items: []
      })


      const handleChange = (prop) => (event) => {
            setValues({ ...shopDetail, [prop]: event.target.value });
      };
      const addNewItem = (props) => {
            setValues({ ...shopDetail, [Items]: shopDetail.Items.push(props.item) });
            console.log(shopDetail)
      }
      const handleSubmit = () => {
            console.log("Submit")
      }

      return (
            <Paper elevation={0} variant="outlined" style={{ margin: 15, padding: 5, borderRadius: 10, backgroundColor: "#eae2ef" }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={shopDetail.ShopName}
                                    onChange={handleChange('weight')}
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                          'aria-label': 'weight',
                                    }}
                              />
                              <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={shopDetail.ShopUnquieId}
                                    onChange={handleChange('weight')}
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                          'aria-label': 'weight',
                                    }}
                              />
                              <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={shopDetail.ShopContact}
                                    onChange={handleChange('weight')}
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                          'aria-label': 'weight',
                                    }}
                              />
                              <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                        </FormControl>


                        <ShopkList items={setshopDetail} />

                        <AddItem style={{}} addNewItem={addNewItem} />

                  </Box>

            </Paper>
      )
}

export default Shop
