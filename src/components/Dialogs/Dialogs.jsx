import React from 'react';
import styleDialogs from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
   return <div className={styleDialogs.autor}>
   <NavLink to = {'/dialogs/'+props.id}>{props.name}</NavLink> 
</div>
}


const UserDialog = (props) => {
  return <div className={styleDialogs.dialogPart}>{props.message }</div>
}


const Dialogs = (props) => {
    
    let dialogsData = [
        {id: '1', name: 'Antoxa'},
        {id: '2',name: 'Dimich'},
        {id: '3', name: 'Marina'},
        {id: '4', name: 'Andrey'}
    ];


    let messageData = [
        {id: '1', message: 'hey'},
        {id: '2', message: 'how are you doing'},
        {id: '3', message: 'fine'}
    ];

    let dialogElements = dialogsData.map((elem)=><DialogItem name = {elem.name}  id = {elem.id} />);
    
    let messageElements = messageData.map((elem)=><UserDialog message = {elem.message + ' ' + props.prp} id = {elem.id}/>);

    return (
        <div className={styleDialogs.dialogPage}>
            <div className={styleDialogs.autors}>
               {dialogElements}
            </div>
            <div className={styleDialogs.dialog}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;