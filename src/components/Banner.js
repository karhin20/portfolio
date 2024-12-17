import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-scroll';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const TYPING_SETTINGS = {
    toRotate: ["A Data Analyst", "A Web Developer", "An AI Application Developer"],
    period: 2000,
    initialDelay: 500,
    deleteSpeed: 2
  };

  const tick = useCallback(() => {
    let i = loopNum % TYPING_SETTINGS.toRotate.length;
    let fullText = TYPING_SETTINGS.toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / TYPING_SETTINGS.deleteSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(TYPING_SETTINGS.period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prevLoopNum => prevLoopNum + 1);
      setIndex(1);
      setDelta(TYPING_SETTINGS.initialDelay);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }, [isDeleting, loopNum, text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  const handleConnect = () => {
    const contactSection = document.getElementById('connect');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    <div>Hi! I'm Kelvin</div>
                    <span 
                      className="txt-rotate" 
                      data-period={TYPING_SETTINGS.period}
                      data-rotate={JSON.stringify(TYPING_SETTINGS.toRotate)}
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I specialize in meticulous data analysis and I'm a dedicated developer committed to crafting elegant and user-centric web solutions.
                  </p>
                  <Link 
                    to="connect" 
                    smooth={true} 
                    duration={500} 
                    className="connect-button"
                    style={{
                      padding: "10px 0",
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "18px",
                      marginTop: "30px",
                      letterSpacing: "0.8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      transition: "0.3s ease-in-out",
                      textDecoration: "none",
                      width: "fit-content"
                    }}
                  >
                    Let's Connect <ArrowRightCircle size={25} />
                  </Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}