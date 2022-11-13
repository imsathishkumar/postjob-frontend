import React from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from './topbar';

function AppLayout(props) {
  const location = useLocation();
  const urlToAuthProcess = [
    "/login",
    "/signup",
  ];
  if(urlToAuthProcess.indexOf(location.pathname) > -1){
    return <section>{props.children}</section>
  }
  return (
    <React.Fragment>
      <Topbar/>
      <section className='app-layout container mx-auto'>{props.children}</section>
    </React.Fragment>
  );
}

export default AppLayout;
