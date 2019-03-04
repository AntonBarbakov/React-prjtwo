import React, { Component } from 'react';
import stylePanel from './Panel.module.css';


const Panel = (props) => {
   return (<div>
      <div onClick={props.func}>
         <button value="+" >+</button>
         <button value="-" >-</button>
         <button value="*" >*</button>
         <button value="/" >/</button>
         <button value="1" >1</button>
         <button value="2" >2</button>
         <button value="3" >3</button>
         <button value="4" >4</button>
         <button value="5" >5</button>
         <button value="6" >6</button>
         <button value="7" >7</button>
         <button value="8" >8</button>
         <button value="9" >9</button>
         <button value="0" >0</button>
         </div>
          <button onClick={props.funcE} >=</button>
          <button onClick={props.funcC}>AC</button>
      
   </div>
   );
}



export default Panel;