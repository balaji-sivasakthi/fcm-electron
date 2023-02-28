import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const {ipcRenderer} = require('electron')

function Hello() {

  const handlenNotification=()=>{

   ipcRenderer.send('notification',)

  }

  return (
    <div>
     <h1>Hello, Balaji</h1>
     <button onClick={()=>handlenNotification()}>Send Notification</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
