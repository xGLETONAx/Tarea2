import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import './styles/Home.css';  

function Home() {
  return (
    <div className="principalContainer">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-light">
        <Container>
          <Navbar.Brand href="/">Página de Cursos</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <a className='btn btn-secondary m-1 btn-md' type="button" href="/">Inicio</a>
              <a className='btn btn-secondary m-1 btn-md' type="button" href="/desarrollo-web">Desarrollo Web</a>
              <a className='btn btn-secondary m-1 btn-md' type="button" href="/arquitectura-computadoras">Arquitectura de Computadoras II</a>
              <a className='btn btn-secondary m-1 btn-md' type="button" href="/analisis-sistemas">Análisis de Sistemas II</a>
              <a className='btn btn-secondary m-1 btn-md' type="button" href="/etica-profesional">Ética Profesional</a>
              <a className='btn btn-secondary m-1 btn-md' type="button" href="/redes-computadoras">Redes de Computadoras I</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carrusel */}
      <center>
      <div className='carrusel-edit mt-2'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/img/img1.jpg`}
              alt="Primera imagen"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/img/img2.jpg`}
              alt="Segunda imagen"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      </center>

      {/* Sección de Objetivo */}
      <Container className="my-5">
        <h2>Objetivo Principal</h2>
        <p>
          El objetivo principal de esta página es brindar información acerca de los cursos 
          disponibles a los cuales los estudiantes que aprobaron al menos uno de los cinco 
          cursos del séptimo semestre se podrán asignar durante el segundo semestre del año en curso.
        </p>
      </Container>

      {/* Listado de cursos */}
      <Container className="my-5">
        <h2>Cursos Disponibles</h2>
        <Row className="justify-content-center">
          <Col md={2}>
            <Card>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/img3.jpg`} />
              <Card.Body>
                <Card.Title>Desarrollo Web</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/img4.jpg`} />
              <Card.Body>
                <Card.Title>Arquitectura de Computadoras II</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/img5.jpg`} />
              <Card.Body>
                <Card.Title>Análisis de Sistemas II</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/img6.jpg`} />
              <Card.Body>
                <Card.Title>Ética Profesional</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/img7.jpg`} />
              <Card.Body>
                <Card.Title>Redes de Computadoras I</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>Gustavo Letona - Carnet: 9490-21-3142</p>
      </footer>
    </div>
  );
}

export default Home;
