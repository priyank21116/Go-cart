import React, { useState } from 'react'
// import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';

const AddItem = ({ addNewItem }) => {
      const [loading, setLoading] = React.useState(false);
      const [item, setitem] = useState({
            itemId: '',
            itemName: '',
            quantity: '',
            priceperItem: '',
      })
      function handleSubmitClick() {
            setLoading(true);
            addNewItem(item);
            setitem({ itemId: '', itemName: '', quantity: '', priceperItem: '', })
            setLoading(false)
      }

      const handleChange = (prop) => (event) => {
            setitem({ ...item, [prop]: event.target.value });
      };

      return (
            <Paper elevation={0} variant="outlined" style={{ margin: 15, padding: 5, borderRadius: 10, backgroundColor: "#eae2ef" }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl fullWidth sx={{ m: 1, width: '50ch' }}>
                              <InputLabel htmlFor="outlined-adornment-amount">itemId</InputLabel>
                              <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={item.itemId}
                                    onChange={handleChange('itemId')}
                                    label="Item Id"
                              />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1, width: '50ch' }}>
                              <InputLabel htmlFor="outlined-adornment-amount">itemName</InputLabel>
                              <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={item.itemName}
                                    onChange={handleChange('itemName')}
                                    label="itemName"
                              />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                              <InputLabel htmlFor="outlined-adornment-amount">Quantity</InputLabel>
                              <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={item.quantity}
                                    onChange={handleChange('quantity')}
                                    label="quantity"
                              />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                              <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                              <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={item.priceperItem}
                                    onChange={handleChange('priceperItem')}
                                    label="priceperItem"
                              />
                        </FormControl>
                        <LoadingButton
                              color="secondary"
                              onClick={() => { handleSubmitClick() }}
                              loading={loading}
                              loadingPosition="start"
                              variant="contained"
                        >
                              Add Item
                        </LoadingButton>
                        {/* <Button on variant="contained">Contained</Button> */}
                  </Box>
            </Paper>
      )
}

export default AddItem
