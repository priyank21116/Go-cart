import React,{useState} from 'react'
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

const AddItem = ({addNewItem}) => {
      const [loading, setLoading] = React.useState(false);
      const [item, setitem] = useState({
             itemId: '',
             itemName:'',
             quantity:'',
             priceperItem:''
      })
      function handleClick() {
            setLoading(true);
      }
      return (
            <Paper elevation={0} variant="outlined" style={{ margin: 15, padding: 5, borderRadius: 10, backgroundColor: "#eae2ef" }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                              <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                              <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={shopDetail.amount}
                                    onChange={handleChange('amount')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                              />
                        </FormControl>
                        <LoadingButton
                              color="secondary"
                              onClick={()=>{addNewItem(item)}}
                              loading={loading}
                              loadingPosition="start"

                              variant="contained"
                        >
                              Save
                        </LoadingButton>
                        <Button on variant="contained">Contained</Button>
                  </Box>
            </Paper>
      )
}

export default AddItem
