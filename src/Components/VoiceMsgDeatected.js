import React, { useEffect, useRef, useState } from 'react'
import Paper from '@mui/material/Paper';


// import firebase from '../firebaseConfig';
// import  firebase from 'firebase';

import database from '../firebase';

//Import Dependences
import * as tf from '@tensorflow/tfjs'
import * as speech from '@tensorflow-models/speech-commands'
import { Button } from '@mui/material';

//create Recogniser
// Listen for Actions
// Display command to screen


const VoiceMsgDeatected = ({shopUnquieId}) => {

      const synthRef = useRef(window.speechSynthesis)
      const [commadslist, setcommadslist] = useState(null)
      let [commandCame, setCommand] = useState("")
      const [lastCommand, setlastCommand] = useState([])
      const [itemtoUpdate, setItemtoUpdate] = useState({  itemId: '',  quantity: '',   pricepi: '',   discountp: '',  })

 const customerID = '12qw32'
      const startShopping = () => {
            const firestore = database.ref("/:customerID");
            let data = {
                  "ShopId": 1,
                  "allowed": true,
                  "itemsList": [],
                  "Total": 0
            }
            firestore.push(data)
      }


      const addItem = () => {
            const firestore = database.ref("/:userID/itemsList");
            let data = {
                  "itemid": 1.1,
                  "quantity": 1,
                  "pricepi": 120,
                  "discountp": 12,
            }
            firestore.push(data)
      }

      const updateItem = () => {
            const firestore = database.ref("/:userID/itemsList").child(`id`);
            firestore.update({
                  quantity: '',
                  pricepi: 0,
            })
            OnupdateItemlistCall()
      }

      const OnupdateItemlistCall = () => {
            //get the item
      }

      const onInstructiontoUpdate = (data) => {
            setItemtoUpdate(data)// see cnot correct
      }

      const removeItem = (id) => {
            const firestore = database.ref("/:userID/itemsList").child(`id`);
            firestore.remove()
      }




      const instruction = [
            ["Added", "Add __ Quatity __"],
            ["Removed", "remove ___"],
            ["Update", "Update __ Quantity to __"],
            [" Ready to Checkout Billing your items", "Checkout"],
            [" YOur Total amount to pay", "Get bill"],
      ]


      useEffect(() => {
            const Allcommad = instruction.flatMap(([valueA, valueB]) => {
                  return [
                        { listenfor: valueB, confirmvoice: valueA }
                  ]
            })
            // console.log("LAL", Allcommad)
            setcommadslist(Allcommad)
      }, [])


      const utterloud = (choice) => {
            console.log("1", choice)
            const utter = new SpeechSynthesisUtterance(choice.confirmvoice)
            console.log("LLLLLLL", utter)
            synthRef.current.speak(utter)
      }




      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      const recognition = new window.SpeechRecognition();
      recognition.interimResults = true;

      recognition.onstart = function () {
            console.log("READY TO LISTen")
      }

      recognition.onresult = function (e) {
            const text = Array.from(e.results)
                  .map(result => result[0])
                  .map(result => result.transcript)
                  .join(' ')
            console.log("RESUILT", text)
            setCommand(e)
      }

      return (
            <>
                  <Paper elevation={3} style={{ backgroundColor: "#ffccdd", marginTop: 25, marginBottom: 25, borderRadius: 15, height: 50, justifyContent: "center", textAlign: "center" }}>

                        VoiceMsgDetected

                  </Paper>
                  <Button onClick={() => { recognition.start() }} variant="contained">Contained</Button>
                  <Button onClick={() => { utterloud(commadslist[0]) }} variant="contained">say</Button>
            </>
      )
}

export default VoiceMsgDeatected
