import React from 'react';

import ShopDetail from '../Components/ShopDetail';
import VideoLive from '../Components/VideoLive';
import VoiceMsgDeatected from '../Components/VoiceMsgDeatected';
import TotalAmount from '../Components/TotalAmount';
import ItemsList from '../Components/ItemsList';

import { Grid } from '@mui/material';

const Dashboard = () => {
      return (
            <div>
              {/* VOICE MESSAGE DETECTED */}
             

                  <Grid container spacing={3}>


                        {/* SHOP DETAILS */}
                        <Grid item xs={6} md={7}>
                              <ShopDetail />
                              <ShopDetail />
                              <VoiceMsgDeatected />
                        </Grid>


                        {/* VEDIO DETECTION */}
                        <Grid item xs={6} md={5}>
                              <TotalAmount />
                        </Grid>
                  </Grid>

                

                  <Grid container spacing={3}>
                  
                        <Grid item xs={12} md={9}>
                              {/* ITEM LIST */}
                              
                              <ItemsList />
                        </Grid>

                        <Grid item xs={12} md={3}>
                              {/* TOTAL BILL SECTION */}
                              <VideoLive />
                              
                        </Grid>
                  </Grid>


            </div>
      )
}

export default Dashboard
