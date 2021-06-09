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
            {/*<div className={style.profile__body}>
                <form>
                    <div className={style.profile__row}>
                        <div className={style.profile__col}>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>First Name</label>
                                <input className={style.profile__item_input} name="firstName" value=""/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Last Name</label>
                                <input className={style.profile__item_input} name="lastName" value=""/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Institute</label>
                                <input className={style.profile__item_input} name="institute" value=""/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Degree</label>
                                <input className={style.profile__item_input} name="degree" value=""/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Email</label>
                                <input className={style.profile__item_input} name="email" value=""/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>*/}
        </div>
    </React.Fragment>
}

export default Profile;