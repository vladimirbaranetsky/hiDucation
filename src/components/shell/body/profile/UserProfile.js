import React, {useState} from "react";
import style from "./UserProfile.module.css"
import {DIGITS_NAME, DIGITS_PASSWORD, VALIDATE} from "../../../../config/config-credentials";


const Profile = () => {

    const [data, setData] = useState({
        body: {
            id: "",
            firstName: "",
            lastName: "",
            email: '',
            password: "",
            institute: "",
            degree: "",
            fields: "",
            apps: [
                ""
            ],
            stillStudent: true,
            roles: [
                ""
            ]
        }
    });
    const[hidden, setHidden] = useState(true);
    const [isInvalid, setIsInvalid] = useState(false);

    const[errors, setErrors] = useState({
        email: "",
        password: "",
        confirm: ""
    });

    const validateEmail = (email) => {
        return  VALIDATE.test(String(email).toLowerCase());
    };

    const handleChangeFirstName = (event) => {
        event.preventDefault();
        const name = event.target.value;
        setData({...data, firstName: name})
    }

    const handleChangeLastName = (event) => {
        event.preventDefault();
        const name = event.target.value;
        setData({...data, lastName: name})
    }

    const handleChangeInstitute = (event) => {
        event.preventDefault();
        const name = event.target.value;
        setData({...data, institute: name})
    }

    const handleChangeDegree = (event) => {
        event.preventDefault();
        const name = event.target.value;
        setData({...data, degree: name})
    }

    const handleChangeSubject = (event) => {
        event.preventDefault();
        const name = event.target.value;
        setData({...data, fields: name})
    }

    const handleChangeEmail = (event) => {
        event.preventDefault();
        const email = event.target.value;
        let textError = '';
       if(!validateEmail(email)){
           textError = 'Invalid email address'
       }else{
           setData({...data, email: email})
       }
       setErrors({...errors, password: textError})
    }

    const  handleChangePassword = (event) => {
        event.preventDefault();
        const password = event.target.value;
        let textError = '';

        if(password.length < DIGITS_PASSWORD){
            textError = `Use ${DIGITS_PASSWORD} or more characters with a mix of letters and numbers`;
        }else {
            setData({...data, password: password})
        }
        setErrors({...errors, password: textError})
    }

    const checkForHide = () => {

    }

    const updateData = () => {
        setHidden(false)
    }


    return <React.Fragment>
        <div className={style.profile}>
            <div className={style.profile__header}>
                <div className={style.profile__header_strip}>
                    <div/>
                </div>
                <span className={style.profile__header_title}>Profile</span>
            </div>
            <div className={style.profile__body}>
                <form>
                    <div className={style.profile__row}>
                        <div className={style.profile__col}>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>First Name</label>
                                <input hidden={hidden} className={style.profile__item_input} type="text" name="firstName" onChange={handleChangeFirstName}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Last Name</label>
                                <input hidden={hidden} className={style.profile__item_input} type="text" name="lastName" onChange={handleChangeLastName}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Institute</label>
                                <input hidden={hidden} className={style.profile__item_input} type="text" name="institute" onChange={handleChangeInstitute}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Degree</label>
                                <input hidden={hidden}  className={style.profile__item_input} type="text" name="degree" onChange={handleChangeDegree}/>
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Email</label>
                                <input hidden={hidden} className={style.profile__item_input} type="email" name="email" onChange={handleChangeEmail}/>
                                {errors.email.length > 0 && <span className={style.input__error_message}>{errors.email}</span>}
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Password</label>
                                <input hidden={hidden} className={style.profile__item_input} type="password" name="password" onChange={handleChangePassword}/>
                                {errors.password.length > 0 && <span className={style.input__error_message}>{errors.password}</span>}
                            </div>
                            <div className={style.profile__item}>
                                <label className={style.profile__item_title}>Subject</label>
                                <input hidden={hidden} className={style.profile__item_input} type="text" name="subject" onChange={handleChangeSubject}/>
                            </div>
                        </div>

                            <button disabled={!hidden} className={style.profile__item_button} type="button" value="signUp" onClick={updateData}>Update data</button>

                    </div>

                </form>
            </div>
        </div>
    </React.Fragment>
}
export default Profile;