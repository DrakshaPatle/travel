import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

// if user is not sign dont show any aof the pages only signup page for that use privatecomponet

const PrivateComponent = () => {

  const auth = localStorage.getItem('user');
  return auth? <Outlet /> : <Navigate to = "/signup"/>

}

export default PrivateComponent;
