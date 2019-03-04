import React, { Component } from 'react';
import styleDisplay from './Display.module.css';



const Display = (props) => {
   return (
       <div className = {styleDisplay.Display}>{props.inner}</div>
   );
}



export default Display;