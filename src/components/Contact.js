import React from "react";
import {AiOutlineGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

const Contact = () => {


    return <React.Fragment>
        <div className="content">
            <div className="container">
                <div className="content__header">
                    <div className="content__header-strip">
                        <div/>
                    </div>
                    <span className="content__header-title">Contact hiMath Gaming</span>
                </div>
                <div className="content__body">
                    <span className="contact__title">
                        Get In Touch
                    </span>
                    <span className="contact__subtitle">
                        We'd love to hear your thoughts and be in touch with us
                    </span>
                    <textarea className="contact__message"  name="" placeholder="Message"/>
                    <div className="contact__buttons">
                        <input required className="input__email"  type="email" name="email" placeholder="Email Address"/>
                        <input required className="input__name"  type="text" name="name" placeholder="Full Name"/>
                        <button className="nav__link--btn btn__send" type="submit">Send</button>
                    </div>
                </div>
                <div className="content__footer">
                    <div className="footer__inner">
                        <div className="footer__credits">
                            <div className="footer_copyright">
                                © 2021 hiMath Gaming
                            </div>
                            <div className="footer__social">
                                <a className="footer__link" href=" " >
                                    < AiOutlineGithub className="footer__icon"/>
                                </a>
                                <a className="footer__link" href=" ">
                                    <FaFacebook className="footer__icon"/>
                                </a>
                                <a className="footer__link" href=" ">
                                    <FaInstagram className="footer__icon"/>
                                </a>
                                <a className="footer__link" href=" ">
                                    <AiFillTwitterCircle className="footer__icon"/>
                                </a>
                                <a className="footer__link" href=" ">
                                    <AiFillLinkedin className="footer__icon"/>
                                </a>
                                <a className="footer__link" href=" ">
                                    <AiOutlineWhatsApp className="footer__icon"/>
                                </a>
                                <a className="footer__link" href=" ">
                                    <FaYoutube className="footer__icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </React.Fragment>
}

export default Contact;