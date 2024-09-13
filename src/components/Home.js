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
                  Estudia el diseño y la programación de sitios web. Se centra en tecnologías como HTML, CSS, JavaScript y frameworks para crear aplicaciones web interactivas y funcionales.
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
                Aborda el diseño y funcionamiento de los componentes de un ordenador, como el procesador, la memoria y los sistemas de almacenamiento, y cómo interactúan entre sí.
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
                  Se enfoca en la planificación, desarrollo y mejora de sistemas informáticos. Incluye la recolección de requisitos y la creación de soluciones tecnológicas para problemas organizacionales.
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
                  Explora los principios éticos y la responsabilidad profesional en el ámbito de la tecnología, ayudando a tomar decisiones éticas en situaciones complejas.
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
                  Estudia cómo se conectan y comunican las computadoras a través de redes, cubriendo protocolos, configuración de routers y seguridad en la transmisión de datos.
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
