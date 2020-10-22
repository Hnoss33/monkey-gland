import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import '../Components/Styles/Layout.css'

const Layout = ({children}) => {
 return (
  <>
   <Header/>
   <div className="app__body">
   <Sidebar/>
   {children}
   </div>
  </>
 )
}

export default Layout
