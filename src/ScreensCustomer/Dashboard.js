import React from 'react';

import ShopDetail from '../Components/ShopDetail';
import VideoLive from '../Components/VideoLive';
import VoiceMsgDeatected from '../Components/VoiceMsgDeatected';
import TotalAmount from '../Components/TotalAmount';
import ItemsList from '../Components/ItemsList';

import { Grid } from '@mui/material';
import database from '../firebase';

const Dashboard = ({ shopUnquieId }) => {
      const [shopp, setshopp] = React.useState({
            Items: [],
            ShopContact: "",
            ShopName: "",
            ShopUnquieId: ""
      })
      const [CartItems, setCartItems] = React.useState([{itemId: '#12', itemName: 'Detergent', priceperItem: '196', quantity: 4}])

      React.useEffect(() => {
            const firestore = database.ref("/shop/-MmGXvFqt287kdmNouls");
            firestore.on('value', (res) => {
                  console.log("??????????????????", res.val())
                  const data = res.val();
                  setshopp(data)
            })

      }, [])

      console.log("SSSSSSSSS",shopp)

      return (
            <div>
                  <Grid container spacing={3}>

                        <Grid item xs={6} md={7}>
                              {/* SHOP DETAILS */}
                              {/*  <ShopDetail /> */}
                              <ShopDetail  ShopContact= {shopp.ShopContact}  ShopName={shopp.ShopName}   ShopUnquieId={shopp.ShopUnquieId}  />

                              {/* VOICE MESSAGE DETECTED */}
                              <VoiceMsgDeatected />
                        </Grid>


                        <Grid item xs={6} md={5}>
                              {/* TOTAL BILL SECTION */}
                              <TotalAmount />
                        </Grid>
                  </Grid>



                  <Grid container spacing={3}>
                        <Grid item xs={12} md={9}>
                              {/* ITEM LIST */}
                              <ItemsList CartItems={CartItems}/>
                        </Grid>

                        <Grid item xs={12} md={3}>

                              {/* VEDIO DETECTION */}
                              <VideoLive />

                        </Grid>
                  </Grid>


            </div>
      )
}

export default Dashboard

