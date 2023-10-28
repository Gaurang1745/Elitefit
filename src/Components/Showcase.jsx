import "./Showcase.css";
import CButton from "./CButton";
const Showcase = () => {
  //perform task after the page is loaded
  window.addEventListener("load", () => {
    const circularTextGenerator = ({ id }) => {
      const degreeToRadian = (angle) => {
        return angle * (Math.PI / 180);
      };

      // console.log(id);
      const radius = window.innerWidth > 769 ? 250 : 150;
      const diameter = radius * 2;

      const circle = document.querySelector(`${id}`);
      // console.log(circle);
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;

      const text = circle.innerText;
      const characters = text.split("");
      circle.innerText = null;

      const startAngle = -150;
      const endAngle = -30;
      const angleRange = endAngle - startAngle;

      const deltaAngle = angleRange / characters.length;
      let currentAngle = startAngle;

      characters.forEach((char, index) => {
        const charElement = document.createElement("span");
        charElement.innerText = char;
        const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
        const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

        const transform = `translate(${xPos}px, ${yPos}px)`;
        const rotate = `rotate(${-60 + index * deltaAngle}deg)`;
        charElement.style.transform = `${transform} ${rotate}`;

        currentAngle += deltaAngle;
        circle.appendChild(charElement);
      });
    };
    circularTextGenerator({ id: "#circular-text" });
    circularTextGenerator({ id: "#circular-text-2" });
  });

  return (
    <div>
      {/* <Container>
        <Row>
          <Col lg={6}>
            <img src="./img_1.jpeg" alt="image1" className="images" />
            <div className="texts">
              <div id="circular-text">MADE FOR YOU</div>
              <div id="linear-text">PISTONS</div>
            </div>
          </Col>
          <Col lg={6}>
            <img src="./img_1.jpeg" alt="image1" className="images" />
          </Col>
        </Row>
      </Container> */}
      <div className="rowx">
        <div className="colx">
          <img src="./img_1_1.png" alt="image1" className="images" />
          <div className="texts">
            <div id="circular-text">MADE FOR YOU</div>
            <div id="linear-text">PISTONS</div>
          </div>
        </div>
        <div className="colx">
          <img src="./img_2_1.png" alt="image1" className="images" />
          <div className="shop_pens_head">
            <div className="shop_pens">
              <div className="textlines">YOU WERE MADE TO</div>
              <div className="textlines">MAKE AN IMPACT.</div>
              <div className="temp">
                <CButton boxText="SHOP PENS" variant="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rowx rev">
        <div className="colx ">
          <img src="./img_3_1.png" alt="image1" className="images" />
          <div className="shop_pens_head">
            <div className="shop_pens">
              <div className="textlines">MADE FOR THE BEST</div>
              <div className="textlines">CHANGE MAKERS.</div>
              <div className="temp">
                <CButton boxText="SHOP BRANDS" variant="dark" />
              </div>
            </div>
          </div>
        </div>
        <div className="colx">
          <img src="./img_4_1.png" alt="image1" className="images" />
        </div>
      </div>
      <div className="rowx">
        <div className="colx ">
          <img src="./img_5_1.png" alt="image1" className="images" />
        </div>
        <div className="colx">
          <img src="./img_6_1.png" alt="image1" className="images" />
          <div className="shop_pens_head lower">
            <div className="shop_pens">
              <div className="textlines">SAVOUR THE PRESENT.</div>
              <div className="temp">
                <CButton boxText="SHOP MONT BLANC" variant="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rowx">
        <div className="full ">
          <img src="./img_7_1.png" alt="image1" className="images" />

          <div className="overlay_text">
            <div className="textlines">WHERE QUALITY MEETS CLASS.</div>
            <div className="texts">
              <div id="circular-text-2">MADE FOR YOU</div>
              <div id="linear-text">PISTONS</div>
            </div>
            <div className="temp">
              <CButton
                boxText="SHOP THE FALL 2023 COLLECTION"
                variant="light"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
