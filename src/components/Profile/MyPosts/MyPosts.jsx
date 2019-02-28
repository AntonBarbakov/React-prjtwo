import React from 'react';
import stylePosts from './MyPosts.module.css';
import Post from './Posts/Posts'

const MyPosts = () =>{
    return (<div className={stylePosts.panel}>
        <Post name="Serega" age="44" id="1" message = "how are you"/>
        <Post name="Sashka" age="14" id="2" message = "its not your buisness"/>
        <Post name="Belka" age="13" id="3" message = "fine"/>
        <Post name="Gogi" age="27" id="4"/>
        <Post name="Nina" age="99" id="5"/>
        </div>
    )
}

export default MyPosts;