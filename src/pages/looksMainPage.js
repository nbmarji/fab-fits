import React from "react";
import Navbar from "../components/navbar.js";
import looksData from "../assets/looksData.js";
import { Link } from "react-router-dom";
import {Col, Row, Jumbotron } from "react-bootstrap";
import Footer from "../components/footer.js"

//looks main page component
function LooksMainPage (){
    return(
        <>
            <Navbar />
            
            <Jumbotron fluid className ="align-items-center">
            <Col lg={12}>
                <div id="headingGroup" className="text-black text-center d-lg-block mt-5">
                    <h1 className ="">LOOKS</h1>
                    <p>check out our exclusive styles here!</p>
                </div>
            </Col>
            </Jumbotron>

            <Row>

                {
                looksData.map((look, index) => (
                    <Col md={4} className= "lookprev" key = {index}>
                        <Link to={`/look/${index + 1}`}><img src={look.image} alt=""/></Link>
                    </Col>
                ))}
            </Row>
            <Footer />
        </>
    );
};

export default LooksMainPage;