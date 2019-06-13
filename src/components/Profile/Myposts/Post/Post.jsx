import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
  
          <div className={s.item} key={props.id}>
          <img src='https://avatars.mds.yandex.net/get-pdb/1054037/08c62f5b-3811-44df-ad70-39ed8e1fe202/s1200'/>
          {props.message}
          </div>
  );
};

export default Post;
