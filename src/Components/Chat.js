import React, { useState, useEffect } from 'react'
import "./Styles/Chat.css"
import { useParams } from "react-router-dom";
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import db from "./firebase";
import Message from "./Message";
import ChatInput from "../Components/ChatInput"

function Chat() {
 const { roomId } = useParams();
 const [roomDetails, setRoomDetails] = useState(null);
 const [roomMessages, setRoomMessages] = useState([]);

 useEffect(() => {
   if (roomId) {
     db.collection("rooms")
       .doc(roomId)
       .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
   }

   db.collection("rooms")
     .doc(roomId)
     .collection("messages")
     .orderBy("timestamp", "asc")
     .onSnapshot((snapshot) =>
       setRoomMessages(snapshot.docs.map((doc) => doc.data()))
     );
 }, [roomId]);

 console.log(roomDetails);
 console.log("MESSAGES >>> ", roomMessages);
 return (
   <div className="chat">
     <div className="chat__header">
       <div className="chat__headerLeft">
         <h4 className="chat__channelName">
           <strong>#{roomDetails?.name}</strong>
           <LocalActivityIcon />
         </h4>
       </div>

       <div className="chat__headerRight">
         <p>
           <FingerprintIcon style={{ fontSize: 22 }} /> Details
         </p>
       </div>
     </div>

     <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
  </div>
 );
}

export default Chat
//https://reactrouter.com/web/api/Hooks
//com el hook useParams exportamos a app.js EL roomID leer documentacion de useparams en router 