import React from "react";
import store from "../../../../store/store";
import  "./ProfileInfo.css"



const ProfileInfo = () => {
    const user = store.getState().auth.user;
    const displayName = user.firstName ? user.firstName + " " + user.lastName : user.email;
    console.log(user)
    return <React.Fragment>
        <div className="profile__info">
            <span className="profile__info-title">{displayName}</span>
        </div>
    </React.Fragment>
}

export default ProfileInfo;