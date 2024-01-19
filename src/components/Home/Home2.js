import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,AiFillMail 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As an accomplished full-stack developer with a rich tapestry of <span className="purple">8+ years </span>in the field and a <span className="purple">master's degree </span> in Computer Science, I bring a depth of expertise that spans the entire software development lifecycle. My journey has been marked by a commitment to <span className="purple">innovation, precision, and a mastery </span> of both frontend and backend technologies. With a proven track record of delivering <span className="purple">robust, scalable </span>solutions, I combine a passion for cutting-edge technology with a dedication to achieving business objectives. My multifaceted skill set, honed through years of hands-on experience, positions me as a versatile and strategic asset in crafting impactful digital solutions.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Spring Boot, Microservices, REST API, Hybernate, Kafka, MySQL, Jenkins and AWS. </b>
              </i>
              <br />
              <br />
               I am passionate about crafting innovative solutions using  &nbsp;
              <i>
                <b className="purple">Java technologies, specializing in the development of web-based applications and products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Digital Services.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Java, Spring Boot Microservices, Hybernate</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
      <a
        href="mailto:sriram.alokam006@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
      >
        <AiFillMail />
      </a>
    </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sriramalokam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/sriram-006"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
