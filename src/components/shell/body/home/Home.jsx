import React from "react";
import style from './Home.module.css';
import Carousel from "./carousel/Carousel";
import temp_video from "../../../../video/temp_video.mp4"

const Home = () => {
    return <React.Fragment>
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.home__title}>
                    <span className={style.title}>Revolutionize Learning</span>
                    <video className={style.video} controls autoPlay muted loop>
                        <source src={temp_video}/>
                    </video>
                    {/*<span className={style.subtitle}>Revolutionize Learning</span>*/}
                </div>
                <Carousel/>
            </div>
        </div>

    </React.Fragment>
}

export default Home;
