import React from 'react'


import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState } from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks'

firebase.initializeApp({

})

const auth = firebase.auth();
const firestore =firebase.firestore();


const Chat = () => {
      return (
            <div>
                  
            </div>
      )
}

export default Chat
