import React from "react";
import style from "./UserProfile.module.css"


const Profile = () => {



    return <React.Fragment>
        <div className={style.profile}>
            <div className={style.profile__header}>
                <div className={style.profile__header_strip}>
                    <div/>
                </div>
                <span className={style.profile__header_title}>Profile</span>
            </div>
        </div>
    </React.Fragment>
}

export default Profile;