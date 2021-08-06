import React from "react";
import style from './Home.module.css';
import Carousel from "./carousel/Carousel";
import temp_video from "../../../../video/temp_video.mp4"
import Background from "../../../background/Background";

const Home = () => {
    return <React.Fragment>
        {/*<Background/>*/}
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.home__title}>
                    <span className={style.title}>hiDucation</span>
                    <span className={style.subtitle}>Revolutionize Learning</span>
                    {/*<video className={style.video} controls autoPlay muted loop>*/}
                    {/*    <source src={temp_video}/>*/}
                    {/*</video>*/}
                </div>
                <Carousel/>
            </div>
        </div>

    </React.Fragment>
}

export default Home;
