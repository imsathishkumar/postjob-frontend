import React from 'react';
import { useLocation } from 'react-router-dom';

function AppLayout(props) {
  const location = useLocation();
  const urlToAuthProcess = [
    "/login",
    "/signup",
  ];
  if(urlToAuthProcess.indexOf(location.pathname) > -1){
    <section>{props.children}</section>
  }
  return (
    <section className='app-layout'>{props.children}</section>
  );
}

export default AppLayout;