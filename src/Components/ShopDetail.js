import { Paper, TextField } from '@mui/material'
import React from 'react'

const ShopDetail = ({ShopContact, ShopName, ShopUnquieId}) => {
      return (
            <Paper elevation={3} style={{backgroundColor : "#6666ff",  borderRadius: 15, height:150,marginBottom:20,justifyContent:"center",textAlign:"center"}}>
                  <h1>{ShopName}</h1>
                  <h3>{ShopContact}</h3>
                  <h4>{ShopUnquieId}</h4>
            </Paper>
      )
}

export default ShopDetail
