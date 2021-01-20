import React from "react";
import looks from "../assets/looksData.js";
import Navbar from "../components/navbar"
import Footer from "../components/footer.js"
import {Row, Image} from "react-bootstrap";


// LookPage component
const LookPage = ({ match, location }) => {
    const { params: { lookId } } = match;

    return (
    <>
    <Navbar />
    <section className = "lookpage" style = {{backgroundImage: "url("+looks[lookId-1].bgimage +")"}}>
        <Row className = "lookcontent mt-5 justify-content-center">
            <div className = "look ml-5 justify-content-center">
                <h4> {looks[lookId-1].title} </h4>
                <p> {looks[lookId-1].description} </p>
                <Image fluid src={looks[lookId-1].image} alt = ""/>
            </div>
        </Row>
        <Row className = "lookcontent mt-5 justify-content-center">
            <div className = "lookthumbnails mr-5 ml-5">
              { 
                //map out each thumbnail's link and image 
                looks[lookId-1].thumbnails.map((item)=>(
                    <span key = {item.id}>
                    <a href ={item.link}> <img src={item.image} alt=""/></a>
                    </span>
                ))

              }
            </div>
        </Row> 
    
    </section>
    <Footer />
    
      </>
    );
  };

export default LookPage;