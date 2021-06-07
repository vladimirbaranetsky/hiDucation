import React from "react";
import style from "../logout/Logout.module.css";
import {useDispatch} from "react-redux";
import {logout} from "../../../../actions/action-auth";

const Logout = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(logout());
    }
    return <React.Fragment>
        <div className={style.logout}>
            <div className={style.logout__header}>
                <div className={style.logout__header_strip}>
                    <div />
                </div>
                <span className={style.logout__header_title}>Logout</span>
            </div>
            <div className={style.logout__body}>
                <span className={style.logout__title}>
                    Thank you!
                </span>
                <span className={style.logout__subtitle}>
                    See you again :)
                </span>
                <div className={style.logout__wrapper}>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={style.logout__item}>
                            <button className={style.logout__item_button} type="submit">Sign out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Logout;