import React from 'react';
import './Styles/SidebarOption.css'
import { useHistory } from "react-router-dom";
import db from "./firebase";

//https://reactrouter.com/web/api/Hooks
//este hook lo que hace es extraer del historial del navegador para dirigirnos con la funcion que se le propone
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  }; //si no sucede lo de arriba nos vamos a title este componente hay que hacerlo 
  

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;