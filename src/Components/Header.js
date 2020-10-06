import React from 'react'
import './Styles/Header.css';
import { Avatar } from "@material-ui/core"
// import AccessTimeIcon from "@material-ui/icons/AccessTime"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from "../StateProvider";

const Header = () => {
const [{ user }] = useStateValue();

 return (
  <div className="header">
   <div className="header__left">
         <Avatar className="header__avatar"
         alt={user?.displayName}
         src={user?.photoURL}
         />
         {/* <AccessTimeIcon /> */}
   </div>
   <div className="header__search">
         <SearchIcon />
         <input placeholder="Monkey Search"/>
   </div>
   <div className="header__right">
         <HelpOutlineIcon/>

      </div>
   </div>
 )
}

export default Header
