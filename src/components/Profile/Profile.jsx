import React, { Component } from 'react';
import styleProfile from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (<div className={styleProfile.content}>
        <img src="https://cdn.playbuzz.com/cdn/b949b7bf-cb3d-41db-81c7-e6401d9cd4c9/004f8a04-7ca1-4211-8b51-0c51ef7fd706.jpg"
         alt="dragon" className={styleProfile.pimg}></img>
        <MyPosts />
    </div>
    
    );
}


export default Profile;