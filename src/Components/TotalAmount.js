import { Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Divider } from '@mui/material';
import { Grid } from '@mui/material';


const TotalAmount = ({ total }) => {
      // const [total, settotal] = useState(0)
      const [finaltotal, setFinaltotal] = useState(0)

      const discount = 5
      useEffect(() => {
            const temp = total - ((discount / 100) * total)
            setFinaltotal(temp)
      }, [total])


      return (
            <Paper elevation={3} style={{ backgroundColor: "#4dff4d", borderRadius: 15, height: 250, justifyContent: "center", textAlign: "center" }}>

                  <Grid container style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 45, paddingRight: 50 }}>

                        <h3>
                              Total Sum
                        </h3>

                        <h3>{finaltotal}</h3>
                  </Grid>
                  <Grid container style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 45, paddingRight: 50 }}>

                        <h3>
                              Discount
                        </h3>
                        <h3>{discount} %</h3>
                  </Grid>

                  <Divider />
                  <Divider />
                  <Grid container style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 45, paddingRight: 50 }}>

                        <h2>
                              Amount to pay
                        </h2>
                        <h2>{finaltotal}</h2>
                  </Grid>
            </Paper>
      )
}

export default TotalAmount
