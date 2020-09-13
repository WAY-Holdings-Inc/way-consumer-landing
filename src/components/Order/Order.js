  
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';



import qrcode from './assets/code.svg';

import glogo from './assets/glogo.svg';

import './Order.css'


function Home() {
    return (
        <div>
           
            <Container fluid className="way-container way-intro" id="learn">

            <Col className="ologo" >

               <a href="/"> <img src={glogo} alt="way logo"/></a>


            </Col>

                <Row className="">
                    <Col className="phonez ">
                        <h1 className="way-phone-text">SCAN TO ORDER</h1>
                         
                        <img src={qrcode} alt="qrcode"/>



                    </Col>
                </Row>
            </Container>





    

        <Container fluid className="way-containerz" id="learn">

          

                <Row className="rowed">
                    <Col className="phonez" >

                         <a className="insta" href="https://www.instagram.com/paywithway/"><div className="insta"></div></a>

                    </Col>
                    <Col className="phonez "  sm>
                         
                         <a className="email" href="mailto:business@paywithway.com"><div className="email"></div></a>



                    </Col>

                    <Col className="phonez text-center" sm>

                        <a className="face" href=""><div className="face"></div></a>

                    </Col>
                </Row>

                <Row className="">
                        <Col className="privacy" >

                        <a href="https://www.paywithway.com/terms">Terms of Service</a> <span>| </span> <a href="https://www.paywithway.com/privacy">Privacy Policy</a>
                        <br></br>

                        <h3>© 2020 WAY Holdings, Inc.</h3>

                        </Col>
                        
                    </Row>

         </Container>

        </div>
    )
}

export default Home