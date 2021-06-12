import React from "react";
import style from './Home.module.css';
import video from "../../../../video/formula.mp4"
import Carousel from "./carousel/Carousel";

const Home = () => {
    return <React.Fragment>
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.home__title}>
                    <span className={style.title}>hiMath Gaming</span>
                    <span className={style.subtitle}>Revolutionize Learning</span>
                    <div className={style.video}>
                        <video width={640} height={360} controls autoPlay loop muted>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <Carousel/>
            </div>

        </div>
    </React.Fragment>
}

export default Home;
