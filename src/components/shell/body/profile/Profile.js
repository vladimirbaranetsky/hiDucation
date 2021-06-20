import React, {useEffect, useState} from "react";
import style from "./Profile.module.css"
import store from "../../../../store/store";
import {updateInputField, updateProfile} from "../../../../actions/profileAction";
import {useSelector} from "react-redux";
import {
    NEW_EMAIL,
    NEW_FIRST_NAME,
    NEW_LAST_NAME,
    NEW_PASSWORD,
    SET_PHOTO_AVATAR
} from "../../../../actions/typesAction";
import {DIGITS_PASSWORD, VALIDATE} from "../../../../config/config-credentials";
//"https://image.freepik.com/free-photo/cheerful-teenager-with-toothy-smile-afro-hairstyle-holds-modern-cell-phone-chats-online-with-boyfriend_273609-30470.jpg"

const Profile = () => {
    const userProfile = useSelector(state => state.userProfile)
    let nameAvatar = userProfile.lastName && userProfile.firstName ? userProfile.firstName.charAt(0).toUpperCase() + userProfile.lastName.charAt(0).toUpperCase()  : "";
console.log(nameAvatar)

    const [isInvalid, setIsInvalid] = useState(true);
    const [inputActive, setInputActive] = useState(false);
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    });

    const validateEmail = (email) => {
        return  VALIDATE.test(String(email).toLowerCase());
    };

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        switch (name) {
            case "firstName":
                return store.dispatch(updateInputField(NEW_FIRST_NAME, value));
            case "lastName":
                return store.dispatch(updateInputField(NEW_LAST_NAME, value));
            case "email":
                if(!validateEmail(value)){
                    setErrors({...errors, email: 'Invalid email address'});
                }else{
                    setErrors({...errors, email: ''});
                }
                return store.dispatch(updateInputField(NEW_EMAIL, value));
            case "password":
                if(value.length < DIGITS_PASSWORD){
                    setErrors({
                        ...errors,
                        password: `Use ${DIGITS_PASSWORD} or more characters with a mix of letters and numbers`,
                        confirm: `Confirm the password`
                    });
                }else{
                    setErrors({...errors, password: ''});
                }
                return store.dispatch(updateInputField(NEW_PASSWORD, value));
            case "password_confirm":{
                if(userProfile.password !== value){
                    setErrors({...errors, confirm: `Password is invalid`});
                }else{
                    setErrors({...errors, confirm: ''});
                }
                break;
            }
            default:
               break;
        }
    }

    const handleChangePhoto = (event) => {
        event.preventDefault();
        store.dispatch(updateInputField(SET_PHOTO_AVATAR, URL.createObjectURL(event.target.files[0])))
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        store.dispatch(updateProfile(userProfile.email, userProfile));
        setInputActive(false);
        setIsInvalid(true);
        form.reset();
    }

    function showInput() {
        setInputActive(true);
    }

    useEffect(() => {
        const isValidate = () =>{
            return (errors.email === "" && errors.password === "" && errors.username === "" && errors.confirm === "")
        };
        setIsInvalid(isValidate());
    },[errors]);

    return <React.Fragment>
        <div className={style.profile}>
            <div className={style.profile__header}>
                <div className={style.profile__header_strip}>
                    <div/>
                </div>
                <span className={style.profile__header_title}>Profile</span>
            </div>
            <div className={style.profile__body}>
                <form onSubmit={onSubmit} noValidate>
                    <div className={style.profile__row}>
                        <div className={style.profile__col}>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>First Name</label>
                                <input className={style.profile__item_input} type="text" name="firstName"  value={userProfile.firstName} onChange={handleChange} readOnly={!inputActive}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Last Name</label>
                                <input className={style.profile__item_input} type="text" name="lastName" value={userProfile.lastName} onChange={handleChange} readOnly={!inputActive}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Institute</label>
                                <input className={style.profile__item_input} type="text" name="institute" onChange={handleChange} readOnly={!inputActive}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Degree</label>
                                <input className={style.profile__item_input} type="text" name="degree" onChange={handleChange} readOnly={!inputActive}/>
                            </div>
                        </div>


                        <div className={style.profile__col_avatar}>
                            <div className={style.profile__avatar_inner}>
                                <span className={style.profile__avatar_title}>{nameAvatar}</span>
                                {/*<div className={style.profile__avatar_wrapper}>*/}
                                {/*    {userProfile.photo ? <img className={style.profile__avatar_img} src={userProfile.photo}/> : "nameAvatar"}*/}
                                {/*</div>*/}
                                {/*<div className={style.profile__avatar_input} hidden={!inputActive}>*/}
                                {/*    <label htmlFor="files">Edit photo...</label>*/}
                                {/*    <input onChange={handleChangePhoto} id="files" type="file" style={{display: "none"}}/>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className={style.profile__col}>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Subject</label>
                                <input className={style.profile__item_input} type="text" name="subject" onChange={handleChange} readOnly={!inputActive}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Email</label>
                                <input className={style.profile__item_input} type="email" name="email" value={userProfile.email} onChange={handleChange} readOnly={!inputActive}/>
                                {errors.email.length > 0 && <span className={style.input__error_message}>{errors.email}</span>}
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Password</label>
                                <input className={style.profile__item_input} type="password" name="password" value={userProfile.password}  onChange={handleChange} readOnly={!inputActive}/>
                                {errors.password.length > 0 && <span className={style.input__error_message}>{errors.password}</span>}
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Confirm your password</label>
                                <input required className={style.profile__item_input} type="password" name="password_confirm"
                                       placeholder="Please confirm password..."
                                       onChange={handleChange}
                                       readOnly={!inputActive}
                                />
                                {errors.confirm.length > 0 && <span className={style.input__error_message}>{errors.confirm}</span>}
                            </div>
                        </div>
                    </div>
                    <div className={style.profile__row_button}>
                        <div className={style.profile__item} >
                            <button className={style.profile__button_edit} onClick={showInput} type="button" >Edit profile</button>
                        </div>
                        <div className={style.profile__item}>
                            <button disabled={!isInvalid || !inputActive} className={style.profile__button_submit} type="submit" >Update profile</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </React.Fragment>
}
export default Profile;