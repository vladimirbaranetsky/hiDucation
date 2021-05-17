import React from 'react';
import photo from '../images/avatar_photo.jpg';
import photo3 from '../images/avatar_photo3.jpg';
const Team = () => {
    const employees = [
        {name: "Dr.Igor Karasin", position: "Co-Founder", description: "Bla-bla-bla", photo: ''},
        {name: "Just.Gabi Karasin", position: "Co-Founder", description: "Bla-bla-bla", photo:''},
        {name: "Prof.Kevin Manning", position: "Advisor", description: "Bla-bla-bla", photo: ''},
    ];

    const itemTeam = employees.map(employee => {
        return <div className="team__item">
            <div className="team__item-wrapper">
                <div className="team__content">
                    <div className="team__background oval__1"></div>
                    <div className="team__background oval__2"></div>
                    <div className="team__background oval__2-1"></div>
                    <div className="team__background oval__3"></div>
                    <div className="team__background oval__3-1"></div>
                    <div className="team__background oval__3-2"></div>
                    <div className="team__background oval__3-3"></div>
                    <div className="team__background oval__3-4"></div>
                    <div className="team__background oval__3-5"></div>
                    <div className="team__background oval__3-6"></div>
                    <div className="team__background oval__3-7"></div>
                    <div className="team__background oval__3-8"></div>
                    <div className="team__background oval__3-9"></div>
                    <div className="team__background oval__3-10"></div>
                    <div className="team__background oval__3-11"></div>
                    <div className="team__background oval__3-12"></div>
                    <div className="team__photo-wrapper">
                        <div className="team__photo">
                            <img src={photo3} alt="photo"/>
                        </div>
                    </div>
                    <div className="team__info">
                        <span className="team__info-title">{employee.name}</span>
                        <span className="team__info-subtitle">{employee.position}</span>
                    </div>
                    <div className="team__info-description">
                        So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. </div>
                </div>
            </div>
        </div>
    })
    return <React.Fragment>
        <div className="content">
            <div className="container">
                <div className="content__header">
                    <div className="content__header-strip">
                        <div/>
                    </div>
                    <span className="content__header-title">The Team hiMath Gaming</span>
                </div>
                <div className="content__body">
                    <div className="team__items">
                        {itemTeam}
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Team;

