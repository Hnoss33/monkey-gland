import React, { useState, useEffect } from 'react'
import './Styles/Sidebar.css';
import SidebarOption from '../Components/SidebarOption'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Gorilla2 from './Styles/gorilla2.png'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GamesIcon from '@material-ui/icons/Games';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);


return (
  <div className="sidebar">
    <div className="sidebar__header">
      <div className="sidebar__info">
        <h2>Monkey Gland</h2>
        <h3>
          <VideogameAssetIcon />
          {user?.displayName}
        </h3>
      </div>
      <img 
        src={Gorilla2}
        alt=""
      />
    </div> 
    {/* add icons to get more bottons on the sidebar */}
    <SidebarOption Icon={GamesIcon} title="Games" />
    <SidebarOption Icon={ImportContactsIcon} title="Friends" />
    <hr />
    <SidebarOption Icon={ExpandMoreIcon} title="Chat" />
    <hr />
    <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
    {channels.map((channel) => (
      <SidebarOption title={channel.name} id={channel.id} />
    ))}
  </div>
);
}

export default Sidebar;
