import React from 'react';
import s from './Myposts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";



const Myposts = (props) => {

    let MessageElement = props.posts.map((m) => {return( <Post id={m.id} message={m.message}/>);});
    let newPostElement = React.createRef();

    let onAddPost = ()=>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {MessageElement}

            </div>
        </div>
    );
}

export default Myposts;
