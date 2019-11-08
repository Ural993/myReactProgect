import React from 'react';
import s from './Myposts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";


const Myposts = (props) => {

    let MessageElement = props.posts.map((m) => {
        return (<Post key={m.id} id={m.id} message={m.message}/>);
    });
    let addNewPost = (values)=>{
        props.addPost(values.newPostBody);
    };


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>

            <div className={s.posts}>
                {MessageElement}
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
        </div>
    );
};
const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPostBody"} placeholder="Enter your post"
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>)
}
const AddPostFormRedux = reduxForm({form:"dialogAddPostForm"})(AddNewPostForm)
export default Myposts;
