import React, { Component } from 'react';
import styleHeader from './Header.module.css';

const Header = () => {

    return (
        <header className={styleHeader.header}>
            <img src="https://banner2.kisspng.com/20180420/hwq/kisspng-skull-and-bones-skull-and-crossbones-human-skull-s-5ad9c50dee7da9.6447893415242211979769.jpg" alt="skull"></img>
        </header>
    );
}

export default Header;