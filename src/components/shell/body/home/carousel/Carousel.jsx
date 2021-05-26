import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const CarouselView = () => {
    return <React.Fragment>
        <Carousel fade>
            <Carousel.Item>
                {/*<img*/}
                {/*    className="d-block w-100"*/}
                {/*    src="holder.js/800x400?text=First slide&bg=373940"*/}
                {/*    alt="First slide"*/}
                {/*/>*/}
                <p2 className="d-block w-100">The mission - hiMath Gaming is a new project aimed to improve the higher education system, both online and offline by offering a full coverage of the most popular subjects in a form of mobile and web applications that allow students to learn serious materials in an offline guided way with gaming elements. The student can choose what to learn, when and at the best possible pace for him/her at any place using only hiMath platform, no papers or videos required, just a smart phone.</p2>
                <Carousel.Caption>
                    {/*<h3>First slide label</h3>*/}
                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<img*/}
                {/*    className="d-block w-100"*/}
                {/*    src="holder.js/800x400?text=Second slide&bg=282c34"*/}
                {/*    alt="Second slide"*/}
                {/*/>*/}
                <p2 className="d-block w-100">The idea - hiMath Gaming offers a set of applications that teach students step by step higher math materials, it is divided into 3 crucial steps, Theory, Exercise and Exams, each of them is designed in a form of gaming actions using moving elements, puzzle solutions, dragging and dropping, etc…</p2>
                <Carousel.Caption>
                    {/*<h3>Second slide label</h3>*/}
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<img*/}
                {/*    className="d-block w-100"*/}
                {/*    src="holder.js/800x400?text=Third slide&bg=20232a"*/}
                {/*    alt="Third slide"*/}
                {/*/>*/}
                <p2 className="d-block w-100">
                    What do we need?
                    In order to have a fully functioning system we need to follow the student’s progress and users’ statistics that will include the student registration and login, monitoring the student assessment and so on. We need this access both from mobile and browser apps
                    See how good they progressed, what were their strong/weak parts and so on, it will be available both from the mobile application itself and from browser
                    Marketing website this will be the face of hiMath Gaming towards clients, students, and in general whoever will come around our products.
                </p2>

                <Carousel.Caption>
                    {/*<h3>Third slide label</h3>*/}
                    {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </React.Fragment>
}

export default CarouselView;