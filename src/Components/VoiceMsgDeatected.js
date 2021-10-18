import React, { useEffect, useRef, useState } from 'react'
import Paper from '@mui/material/Paper';

import database from '../firebase';
// import * as tf from '@tensorflow/tfjs'
// import * as speech from '@tensorflow-models/speech-commands'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

const VoiceMsgDeatected = ({ addToCart, checkout, removeItemFCart, updateItemOnCart }) => {

      const synthRef = useRef(window.speechSynthesis)
      const [commadslist, setcommadslist] = useState(null)
      let [commandCame, setCommand] = useState("")


      const instruction = [
            ["Added", "Add __ Quatity __"],
            ["Removed", "remove ___"],
            ["Update", "Update __ Quantity  __"],
            [" Ready to Checkout Billing your items", "Checkout"],
            [" YOur Total amount to pay", "Get bill"],
      ]

      useEffect(() => {
            const Allcommad = instruction.flatMap(([valueA, valueB]) => {
                  return [
                        { listenfor: valueB, confirmvoice: valueA }
                  ]
            })
            setcommadslist(Allcommad)
      }, [])
      //Give commandlist as array


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
            setCommand(text)


            // if(text.split[0]==xx){
            // utterloud(textobject)
            // text.split(" ")
            // }

            // update updateItemOnCart(iid,quant)
            // addToCart(iid,quant)
            //removeItemFCart(iid)
            //checkout()
      }

      return (
            <>
                  <Paper elevation={3} style={{ backgroundColor: "#ffccdd", marginTop: 25, marginBottom: 25, borderRadius: 15, height: 50, justifyContent: "center" }}>
                        <h2>
                              {commandCame}
                        </h2>
                        <div style={{ alignItems: 'center',textAlign:'right',justifyContent: "center"  }}>
                        <Button  onClick={() => { recognition.start() }} variant="contained">Contained</Button>      
                        </div>
                        
                  </Paper>


            </>
      )
}

export default VoiceMsgDeatected
