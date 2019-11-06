import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = (props)=> {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode =()=>{
        setEditMode(true);
    };
    let deactivateEditMode = ()=>{
        setEditMode(false);
        props.updateStatus(status);
    };
    let onStatusChange = (e)=>{
            setStatus(e.currentTarget.value);
    };
        return (
            <div>
                {!editMode &&
                <div>
                   <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                </div>}
                {editMode &&
                <div>
                    <input  onChange={onStatusChange}  autoFocus={true}  value={status} onBlur={deactivateEditMode}/>
                </div>}
            </div>
        )
    }



export default ProfileStatusWithHooks;
