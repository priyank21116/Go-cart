import { Paper } from '@mui/material';
import React from 'react'

import Webcam from "react-webcam";


const VideoLive = () => {
      return (
           <Paper elevation={12} style={{backgroundColor : "#DAF76E", borderRadius: 15, height:250,justifyContent:"center",textAlign:"center", overflow:"hidden" }} >
                  <Webcam height={250} />
            </Paper>
      )
}

export default VideoLive
