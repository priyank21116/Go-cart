import { Paper } from '@mui/material';
import React,{useState,useEffect} from 'react'

import Webcam from "react-webcam";


const VideoLive = () => {

      // create model and action state
      const [model, setModel] = useState(null)
      const [action, setAction] = useState(null)
      const [labels, setLabels] = useState(null)

      const loadModel = async () => {
            const recognizer = await speech.create("BROWSER_FFT")
            console.log("Model Loaded")
            // console.log("RECO",recognizer)

            // await recognizer.ensureModelLoaded()
            console.log("RECO2", recognizer)
            console.log(recognizer.wordLabels())
            setModel(recognizer)
            setLabels(recognizer.words);
            console.log("LABELS", labels)
      }
      console.log("LABELS", labels)

      useEffect(() => { loadModel() }, [])

      return (
            <Paper elevation={12} style={{ backgroundColor: "#DAF76E", borderRadius: 15, height: 250, justifyContent: "center", textAlign: "center", overflow: "hidden" }} >
                  <Webcam height={250} />
            </Paper>
      )
}

export default VideoLive
