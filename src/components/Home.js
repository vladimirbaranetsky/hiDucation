import React from "react";

const Home = () => {
    return <React.Fragment>
        <div className="content">
            <div className="container">
                <div className="content__header-home">
                    <span className="home__title">hiMath Gaming</span>
                    <span className="home__subtitle">Revolutionize Learning</span>
                </div>
                <div className="content__body">
                    <div>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="..." className="d-block w-100" alt="Slide1"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="Slide2"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="Slide3"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Home;