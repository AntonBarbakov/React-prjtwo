import React from 'react';
import stylePosts from './MyPosts.module.css';
import Post from './Posts/Posts'





const MyPosts = () =>{

    let posts = [
        { name : 'Serega', age : '44', id : '1'},
        { name : 'Sashka', age : '14', id : '2'},
        { name : 'Belka', age : '13', id : '3'},
        { name : 'Gogi', age : '27', id : '4'},
        { name : 'Nina', age : '14', id : '25'},
    ]
    
    let postsRender = posts.map((elem)=><Post name={elem.name} age={elem.age} id= {elem.id}/>);

    return (<div className={stylePosts.panel}>
        {postsRender}
        </div>
    )
}

export default MyPosts;