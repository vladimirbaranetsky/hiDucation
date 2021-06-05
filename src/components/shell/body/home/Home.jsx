import React from "react";
import style from './Home.module.css';
import Carousel from "./carousel/Carousel";

const Home = () => {
    return <React.Fragment>
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.home__title}>
                    <span className={style.title}>hiMath Gaming</span>
                    <span className={style.subtitle}>Revolutionize Learning</span>
                </div>
                <Carousel/>
            </div>
        </div>
    </React.Fragment>
}

export default Home;
