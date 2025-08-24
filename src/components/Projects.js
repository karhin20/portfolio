import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg6 from "../assets/img/dataAalysis.PNG";
import projectimg7 from "../assets/img/project-img7.png";
import projImg3 from "../assets/img/1.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6Alt from "../assets/img/project-img6.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTabOne = [
    {
      title: "Staff Overtime, Transport and Risk Management System",
      description: "Calculates overtime, transport and risk allowances for staff",
      imgUrl: projImg3,
      link: "https://otrams.vercel.app/",
    },
    {
      title: "Personal Finance Management App",
      description: "Typescripts, Vite & Supabase Project",
      imgUrl: projectimg7,
      link: "https://diligencefinance.netlify.app/",
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
    {
      title: "Webapp for a Caterer",
      description: "A project developed using the Vite",
      imgUrl: projImg6Alt,
      link: "https://kobbiecusine.vercel.app",
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

  const projectsTabThree = [
    {
      title: "Workflow Automation Portfolio",
      description: "Coming soon - showcasing automation solutions and process optimization projects.",
      imgUrl: projImg1, // Using existing image as placeholder
      link: "#",
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
                <p>Explore my diverse range of projects that showcase my expertise in design and development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web / AI Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Workflow Automation</Nav.Link>
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
                      <Row className="justify-content-center">
                        {
                          projectsTabThree.map((project, index) => {
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
