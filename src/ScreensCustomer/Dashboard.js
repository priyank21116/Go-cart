import React from 'react';

import ShopDetail from '../Components/ShopDetail';
import VideoLive from '../Components/VideoLive';
import VoiceMsgDeatected from '../Components/VoiceMsgDeatected';
import TotalAmount from '../Components/TotalAmount';
import ItemsList from '../Components/ItemsList';
import LastCommandComp from '../Components/LastCommandComp';
import Commands from '../Components/Commands';

import { Grid } from '@mui/material';
import database from '../firebase';

const Dashboard = ({ shopUnquieId }) => {
      const [shopp, setshopp] = React.useState({
            Items: [],
            ShopContact: "",
            ShopName: "",
            ShopUnquieId: ""
      })
      const [lastCommand, setlastCommand] = React.useState([])
      const [CartItems, setCartItems] = React.useState([{ itemId: '#12', itemName: 'Detergent', priceperItem: '196', quantity: 4 }])

      React.useEffect(() => {
            const firestore = database.ref("/shop/-MmGXvFqt287kdmNouls");
            firestore.on('value', (res) => {
                  const data = res.val();
                  setshopp(data)
            })

      }, [])

      const addToCart = async ({ iid, quant }) => {
            const itemm = await shopp.Items.find(obj => obj.itemId === iid)
            const itemtoCart = { ...itemm, quantity: quant }
            const cart = [...CartItems].push(itemtoCart)
            setCartItems(cart)
            setlastCommand([...lastCommand, `Add ${iid} Quantity ${quant}`])

      }

      const updateItemOnCart = async ({ iid, quant }) => {
            const item = CartItems.find(obj => obj.itemId === iid)
            setlastCommand([...lastCommand, `Update ${iid} Quantity ${quant}`])

      }
      // const firestore = database.ref("/:userID/itemsList").child(`id`);
      // firestore.update({
      //       quantity: '',
      //       pricepi: 0,
      // })
      // OnupdateItemlistCall()

      const removeItemFCart = ({ iid }) => {
            const cart = CartItems.filter(obj => obj.itemId !== iid)
            setCartItems(cart)
            setlastCommand([...lastCommand, `remove ${iid}`])

      }
      // const removeItem = (id) => {
      //       const firestore = database.ref("/:userID/itemsList").child(`id`);
      //       firestore.remove()  }

      const checkout = () => {
            setlastCommand([...lastCommand, `Checkout`])
            const firestore = database.ref("/clientid");
            let data = { CartItems: CartItems, ShopUnquieId: shopp.ShopUnquieId, ShopName: shopp.ShopName }
            firestore.push(data)
      }



      return (
            <div>
                  <Grid container spacing={3}>

                        <Grid item xs={6} md={8}>
                              
                              <Commands />
                              
                              <ShopDetail ShopContact={shopp.ShopContact} ShopName={shopp.ShopName} ShopUnquieId={shopp.ShopUnquieId} />

                              
                              <VoiceMsgDeatected addToCart={addToCart} checkout={checkout} removeItemFCart={removeItemFCart} updateItemOnCart={updateItemOnCart} />
                        </Grid>


                        <Grid item xs={6} md={4}>
                              
                              <TotalAmount />
                        </Grid>
                  </Grid>



                  <Grid container spacing={3}>
                        <Grid item xs={12} md={9}>
                              {/* ITEM LIST */}
                              <ItemsList CartItems={CartItems} />
                        </Grid>

                        <Grid item xs={12} md={3}>

                              {/* VEDIO DETECTION */}
                              <VideoLive />


                              <LastCommandComp  lastCommand={lastCommand}/>


                        </Grid>
                       

                  </Grid>


            </div>
      )
}

export default Dashboard

