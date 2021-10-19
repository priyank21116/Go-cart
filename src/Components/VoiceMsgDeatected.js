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

            const utter = new SpeechSynthesisUtterance(choice.confirmvoice)

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
            setCommand(text);

            let mtArr = text.split(" ")

            if (e.results[0].isFinal) {
                  if (text.includes('add')) {
                        console.log("ADDDDDDDDD",mtArr)
                        utterloud(commadslist[0])
                        addToCart(mtArr[1], mtArr[3])

                  }
                  if (text.includes('remove')) {
                        console.log("REMOVED",mtArr)

                        removeItemFCart(mtArr[1])
                        utterloud(commadslist[1])

                  }
                  if (text.includes('update')) {
                        console.log("UPDATE",mtArr)

                        updateItemOnCart(mtArr[1], mtArr[3])
                        utterloud(commadslist[2])

                  }
                  if (text.includes('checkout')) {
                        console.log("checkout",mtArr)

                        checkout()
                        utterloud(commadslist[3])

                  }
            }

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
                  <Paper elevation={3} style={{ backgroundColor: "#ffccdd", marginTop: 50, marginBottom: 75, borderRadius: 15, height: 50, justifyContent: "center" }}>
                        <h2>
                              {commandCame}
                        </h2>
                        <div style={{ alignItems: 'center', textAlign: 'right', justifyContent: "center" }}>
                              <Button onClick={() => { utterloud(commadslist[0]); addToCart("#13", "3") }} variant="contained">AddItem13</Button>
                              <Button onClick={() => { utterloud(commadslist[0]); addToCart("#14", 12) }} variant="contained">AddItem12</Button>
                              <Button onClick={() => { utterloud(commadslist[0]); addToCart("#15", 12) }} variant="contained">AddItem12</Button>
                              <Button onClick={() => { utterloud(commadslist[0]); addToCart("#12", 12) }} variant="contained">AddItem12</Button>

                              <Button onClick={() => { utterloud(commadslist[1]); removeItemFCart("#14") }} variant="contained">remove</Button>
                              <Button onClick={() => { utterloud(commadslist[2]); updateItemOnCart("#13", 6) }} variant="contained">update</Button>
                              <Button onClick={() => {utterloud(commadslist[3]); checkout() }} variant="contained">checkout</Button>
                              <Button onClick={() => { recognition.start() }} variant="contained">Contained</Button>

                        </div>

                  </Paper>


            </>
      )
}

export default VoiceMsgDeatected
