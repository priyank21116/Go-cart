import React,{useEffect,useState} from 'react'
import Paper from '@mui/material/Paper';

//Import Dependences
import * as tf from '@tensorflow/tfjs'
import * as speech from '@tensorflow-models/speech-commands'

//create Recogniser
// Listen for Actions
// Display command to screen


const VoiceMsgDeatected = () => {
      //create model and action state
const [model, setModel] = useState(null)
const [action, setAction] = useState(null)
const [labels, setLabels] = useState(null)

const loadModel = async ()=>{
      const recognizer = await speech.crea
}


      return (
            <Paper elevation={3} style={{backgroundColor : "#ffccdd",marginTop:25,marginBottom:25,  borderRadius: 15, height:50,justifyContent:"center",textAlign:"center"}}>
           
                VoiceMsgDetected
            
            </Paper>
      )
}

export default VoiceMsgDeatected
