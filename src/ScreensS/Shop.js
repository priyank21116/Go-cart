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
import LoadingButton from '@mui/lab/LoadingButton';

import database from '../firebase';

import ShopkList from '../Components/S/ShopkList';
import AddItem from '../Components/S/AddItem';

const Shop = () => {
      const [loading, setLoading] = React.useState(false);

      const [shopDetail, setshopDetail] = useState({
            ShopName: '',
            ShopUnquieId: '',
            ShopContact: '',
            Items: []
      })


      const handleChange = (prop) => (event) => {
            setshopDetail({ ...shopDetail, [prop]: event.target.value });
      };
      const addNewItem = (props) => {
            console.log("NNNNNNNNNNNN", [props])

            const key="Items"
            const value =[ ...shopDetail.Items,...[props]]
            // console.log("NNNNNNNNNNNN", [props])
            setshopDetail({ ...shopDetail, [key]: value });
            console.log("AAAAAAAA",shopDetail)
      }
      const handlePublishShop = () => {
            console.log("jjjjjjjjj")
            setLoading(true);
            const firestore = database.ref("/shop");
            let data = shopDetail
            firestore.push(data)
            setLoading(false)

      }

      return (
            <Paper elevation={0} variant="outlined" style={{ margin: 15, padding: 5, borderRadius: 10, backgroundColor: "#eae2ef" }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={shopDetail.ShopName}
                                    onChange={handleChange('ShopName')}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                          'aria-label': 'Shop Name',
                                    }}
                              />
                              <FormHelperText id="outlined-weight-helper-text">Shop Name</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={shopDetail.ShopUnquieId}
                                    onChange={handleChange('ShopUnquieId')}
                                    
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                          'aria-label': 'Enter Shop Unquie Id',
                                    }}
                              />
                              <FormHelperText id="outlined-weight-helper-text">Enter Shop Unquie Id</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                              <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={shopDetail.ShopContact}
                                    onChange={handleChange('ShopContact')}
                                    
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                          'aria-label': 'ShopContact',
                                    }}
                              />
                              <FormHelperText id="outlined-weight-helper-text">ShopContact</FormHelperText>
                        </FormControl>


                        <ShopkList items={shopDetail.Items} />

                        <AddItem style={{}} addNewItem={addNewItem} />
                        <LoadingButton
                              color="primary"
                              onClick={() => { handlePublishShop() }}
                              loading={loading}
                              loadingPosition="start"
                              variant="contained"
                        >
                         Publish Shop
                        </LoadingButton>
                  </Box>

            </Paper>
      )
}

export default Shop
