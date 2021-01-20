import React from "react";
import Navbar from "../components/navbar"
import glasspalace from "../assets/glasspalace.jpg";
import noraglasspalace from "../assets/noraglasspalace.jpg";
import {Button, Row, Col, Container, Jumbotron, Carousel, Image} from 'react-bootstrap';
import Footer from "../components/footer.js"

class Homepage extends React.Component {
    render(){
        return (
            <>
            <Navbar />
            
                <div className = "parallax"></div>
                <div className = "parallax">
                    <Jumbotron fluid className ="align-items-center">
                        <Container>
                        <Col lg={12} className = "text-center">
                            <h1>WELCOME</h1>
                            <p> to your new virtual stylist.</p>
                            <a href="/looks"> <Button variant="basic"> shop the looks</Button></a>
                        </Col>
                        </Container>
                    </Jumbotron>  
                </div>

                <Container fluid className="carouselcontainer">
                    <Carousel>
                        <Carousel.Item>
                            <Image src={glasspalace} alt="First slide"/>
                            <Carousel.Caption>
                            <h2>discover the latest in european fashion</h2> 
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={noraglasspalace} alt="Second slide" />
                        </Carousel.Item>
    
                    </Carousel>
                </Container>

                <Row className = "parallax2">
                    <Col lg={6} className = "text-center instagrambox">
                        <a href="https://www.instagram.com/fab_fits/"><span className="btn btn-basic instagrambutton">FOLLOW US ON <i className="fab fa-instagram"></i> </span> </a>
                    </Col>
                </Row>
                <Footer />
            </>
        )
    }
}

export default Homepage;