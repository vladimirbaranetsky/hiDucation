import React from 'react';
import photo3 from '../../../../images/avatar_photo3.jpg';
import style from './Team.module.css'
import {useSelector} from "react-redux";

const Team = () => {
    const theme = useSelector(state => state.theme.theme)
    const employees = [
        {id: 1, name: "Dr.Igor Karasin", position: "Co-Founder", description: "Bla-bla-bla", photo: ''},
        {id: 2, name: "Just.Gabi Karasin", position: "Co-Founder", description: "Bla-bla-bla", photo: ''},
        {id: 3, name: "Prof.Kevin Manning", position: "Advisor", description: "Bla-bla-bla", photo: ''}
    ];

    const itemTeam = employees.map(employee => {
        return <div key={employee.id} className={style.team__item}>
            <div className={style.team__item_wrapper}>
                <div className={style.team__background}>
                    <div className={style.background__oval_1}></div>
                    <div className={style.background__oval_2}></div>
                    <div className={style.background__oval_2_1}></div>
                    <div className={style.background__oval_3}></div>
                    <div className={style.background__oval_3_1}></div>
                    <div className={style.background__oval_3_2}></div>
                    <div className={style.background__oval_3_3}></div>
                    <div className={style.background__oval_3_4}></div>
                    <div className={style.background__oval_3_5}></div>
                    <div className={style.background__oval_3_6}></div>
                    <div className={style.background__oval_3_7}></div>
                    <div className={style.background__oval_3_8}></div>
                    <div className={style.background__oval_3_9}></div>
                    <div className={style.background__oval_3_10}></div>
                    <div className={style.background__oval_3_11}></div>
                    <div className={style.background__oval_3_12}></div>
                    <div className={style.team__photo_wrapper} style={theme === "dark" ? {backgroundColor: "black"} : {backgroundColor: "white"}}>
                        <div className={style.team__photo}>
                            <img src={photo3} alt=" "/>
                        </div>
                    </div>
                    <div className={style.team__info}>
                        <span className={style.team__info_title}>{employee.name}</span>
                        <span className={style.team__info_subtitle}>{employee.position}</span>
                    </div>
                    <div className={style.team__info_description}>
                        So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. </div>
                </div>
            </div>
        </div>
    })
    return <React.Fragment>
        <div className={style.team}>
            <div className={style.team__header}>
                <div className={style.team__header_strip}>
                    <div/>
                </div>
                <span className={style.team__header_title}>The Team </span>
            </div>
            <div className={style.team__body}>
                <div className={style.team__items}>
                    {itemTeam}
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Team;

