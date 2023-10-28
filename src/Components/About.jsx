import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const About = () => {
  return (
    <div className="about">
      <Container fluid>
        <Row>
          <Col lg={6} className="left">
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showArrows={false}
              showStatus={false}
              centerMode={true}
              centerSlidePercentage={90}
            >
              <div>
                <img src="./car_1.png" />
              </div>
              <div>
                <img src="./car_2.png" />
              </div>
              <div>
                <img src="./car_3.png" />
              </div>
              <div>
                <img src="./car_4.png" />
              </div>
            </Carousel>
          </Col>
          <Col lg={6} className="right">
            <h1>ABOUT PISTONS</h1>
            <h2>
              Established in 1897, our beloved fountain pen haven, 'PISTONS,'
              has been a haven for pen enthusiasts for generations. With a
              century-long dedication to fine writing instruments, we've bridged
              tradition and modernity, offering a curated selection of vintage
              and contemporary fountain pens. Our little shop, nestled in the
              heart of town, continues to inspire a love for the art of writing,
              connecting past and present through the timeless elegance of ink
              on paper.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
