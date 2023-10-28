import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
const Testimonials = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = "https://elitefit-proxy-zly1.vercel.app/api/testimonials";
    axios
      .get(apiUrl)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    data != null && (
      <div className="testimonials">
        <h1 className="heading">TESTIMONIALS</h1>
        <Container>
          <Row>
            {data.map((item, index) => (
              <Col key={index} xl={3} md={6}>
                <div
                  className="columns"
                  style={{ backgroundImage: `url(${item["image"]})` }}
                  data-hover={item["message"]}
                >
                  {item["name"]}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  );
};

export default Testimonials;
