import React from 'react';
import stylePosts from './Posts.module.css';


const Post = (props) => {

    let state = 0;
    function likeCount() {

        state += 1;
        document.getElementById(props.id).innerHTML = state;
    }

    return (
        <div className={stylePosts.item}>
            <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="ava"
                className={stylePosts.imga}></img>
            <div className={stylePosts.information}>
                <p> Name : {props.name}<br />
                    Age : {props.age}   Likes :<span><span id={props.id}></span></span></p>
                <button onClick={likeCount}>Like</button>
            </div>
            <div className={stylePosts.chat}>
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default Post;