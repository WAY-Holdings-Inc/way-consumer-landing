  
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';


import logo from './assets/logo.svg';
import qrcode from './assets/qrcode.png';
import watch from './assets/watch.svg';

import tower from './assets/tower.svg';
import phone from './assets/phone.png';

import mockup from './assets/emailmock.png';
import message from './assets/message.png';

import store from './assets/store.png';
import aid from './assets/aid.svg';

import emoji from './assets/emojis.png';


import './Home.css'


function Home() {
    return (
        <div>
            <Container fluid className="way-containerl way-intro">
                <Row>
                    <Col lg={6}>
                        <div className="home-title">
                        <div className="logo">
                            <img  src={logo} alt="WAY logo"/>
                            </div>
                            <div class="top-left">
                           
                                <h1>
                                Collegetown<br></br>
                                Is Contactless.
                                </h1>
                                <p>
                                The new Way to order food on campus.
                                </p>
                                <button class="btn">Order Now</button> 
                                </div>


                                <div className="d-block">

                            

                        </div>
                        </div>
                       
                    </Col>
                    <Col lg={6} className="store text-center">
                    <img src={phone} alt="mockup"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="way-container way-intro" id="learn">
                <Row className="parent">
                    <Col className="phonez text-center b" lg={6}>
                    </Col>
                    <Col className="phonez c">
                        <h1 className="way-phone-text">The convenience of pickup.<br></br> In a better Way.</h1>
                         
                        <p className="" >Your portal to your favorite Collegetown restaurants lives on campus.</p>
                        <img src={tower} alt="clocktower"/>

                        <p className="break" >Way is a breakthrough pickup platform designed to make sure you don’t waste a second of your day. Just scan from thousands of our unique QR codes around campus to order and pay on your way home, on your way to class, or simply on your way.</p>

                        <h1 className="text-centers">It’s as easy <br></br> as it sounds.</h1>

                    </Col>
                </Row>
            </Container>

            <Container fluid className="way-containerb way-bg text-white text-center pt-5" id="How">
        
                </Container>


                <Container fluid className="way-containerc way-bg text-white text-center pt-5" id="How">
                <Row className="steps">
                    <Col xs={12}>

                   <h1> You’ve never experienced <br></br> an easier Way than this.</h1>

                   <button class="btnn">Order Now</button> 

                    </Col>
                </Row>
                </Container>




            <Container fluid className="way-containerd">
                <Row>
                    <Col lg={6}>
                        <div className="benefita">
                            <div className="text">
                            <h3>This Way helps you keep it contactless.</h3>
                            <p>Avoid touching buttons and exchanging <br></br> cash. Order and Pay digitally. Do it <br></br>instantly and securely with digital wallets.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="photoa">
                             <img src={qrcode} alt="qr code"/>

                        </div>
                    </Col>
                </Row>
            </Container>




            <Container fluid className="way-containere">
                <Row>

                <Col lg={6}>
                        <div className="photob">
                             <img src={watch} alt="apple watch"/>

                        </div>
                 </Col>



                    <Col lg={6}>
                        <div className="benefitb">
                            <div className="text">
                                <h3>It saves you when you’re in a rush.</h3>
                                <p> Scan for coffee on your way to class. Grab <br></br> lunch in-between meetings. Or pickup your <br></br>dinner since it’ll be a late one in the stacks. </p>                           
                             </div>
                        </div>
                    </Col>
                </Row>

            </Container>



            <Container fluid className="way-containerf">
                <Row>
                    <Col lg={6}>
                        <div className="benefitc">
                            <div className="text">
                            <h3>And lets you go without guessing.</h3>
                            <p>With real-time order updates, you can get a <br></br> text on your walk or an email from your  <br></br>desk. All from one simple scan.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="photoca">
                            <img src={message} alt="Sarahs message"/>
                            </div>
                       <div className="photocb">
                        <img src={mockup} alt="qr code"/>

                        </div>
                    </Col>
                </Row>
            </Container>



            <Container fluid className="way-containerg">
                <Row>

                <Col lg={6}>
                        <div className="photod">
                            <img src={store} alt="Sarahs message"/>
                            </div>
                    </Col>

                    <Col lg={6}>
                        <div className="benefitd">
                            <div className="text">
                            <h3>This Way loves local businesses.</h3>
                            <p>Your local Collegetown favorites missed <br></br> you last spring.</p>
                            </div>
                        </div>
                    </Col>

                  
                </Row>
            </Container>





            <Container fluid className="way-containerh">
                <Row>
                    <Col lg={6}>
                        <div className="benefite">
                            <div className="text">
                            <h3>And keeps everyone safe.</h3>
                            <p>With contactless technology, you’ll help <br></br> protect yourself and employees from risk <br></br>of COVID-19.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="photoe">
                            <img src={aid} alt="Sarahs message"/>
                            </div>


                    </Col>
                </Row>
            </Container>


            <Container fluid className="way-containeri">
                <Row>
                <Col lg={6}>
                        <div className="photof">
                            <img src={emoji} alt="emojis"/>
                            </div>


                    </Col>

                    
                    <Col lg={6}>
                        <div className="benefitf">
                            <div className="text">
                            <h3>This Way helps you crush your day.</h3>
                            <p>With QR codes strategically placed on the  <br></br> street, in the classroom, and on your path, <br></br> it’s made for all your day’s twists and turns.</p>
                            </div>
                        </div>
                    </Col>

                    
                </Row>
            </Container>




            <Container className="way-why text-center steps why" id="benefits">
                <Row>
                    <Col xs={12}><h4>This Way helps you crush your day.</h4></Col>
                    <Col xs={12}><p>With QR codes strategically placed on the street, in the classroom, and on your path, it’s made for all your day’s twists and turns. </p></Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home