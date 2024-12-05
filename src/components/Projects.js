import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg6 from "../assets/img/dataAalysis.PNG";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.PNG";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTabOne = [
    {
      title: "Information and Payment Website for an Education Institute",
      description: "Web Application Development",
      imgUrl: projImg3,
      link: "https://earlyrain.vercel.app/",
    },
    {
      title: "Demo Website For Ghana Athletics Federation",
      description: "Front End Website",
      imgUrl: projImg2,
      link: "https://ghanacyclingfederation.netlify.app/",
    },
    {
      title: "Car Auction Website",
      description: "Fullstack Website using MERN stack",
      imgUrl: projImg4,
      link: "https://car-auction-gh.vercel.app/",
    },
    {
      title: "Church Web App for TAC-Nii Boiman Central",
      description: "Web App with AI Chat",
      imgUrl: projImg1,
      link: "https://niiboimancentral.vercel.app/",
    },
    {
      title: "A Restaurant Whatsapp AI Chatbot",
      description: "Send the message on the link to start chatting",
      imgUrl: projImg5,
      link: "https://wa.link/dpul0u",
    },
  ];

  const projectsTabTwo = [
    {
      title: "Data Analysis Portfolio",
      description: "A link to my project profile on maven analytics.",
      imgUrl: projImg6,
      link: "https://mavenanalytics.io/profile/Kelvin-Arhin/154524847",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my diverse range of projects that showcase my expertise in design and development. Each project reflects my commitment to quality and innovation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web / AI Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          projectsTabOne.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        {
                          projectsTabTwo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be updated</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=" "></img>
    </section>
  )
}
