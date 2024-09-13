import React from 'react';
import { Container, Row, Col, Table, ListGroup, Navbar, Nav } from 'react-bootstrap';
import './styles/Home.css';

function CursoAnalisisSistemas() {
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

      {/* Título */}
      <h1 className="text-center mt-3">Análisis de Sistemas II</h1>

      <Container>
        {/* Objetivo General del Curso */}
        <Row className="my-4">
          <Col>
            <h2>Objetivo General del Curso</h2>
            <p>
              Proporcionar herramientas conceptuales, metodológicas y de tecnología, necesarias para consolidar capacidades y habilidades en el estudiante relativas a la utilización de técnicas y herramientas para el diseño lógico de soluciones mediante el planteamiento y puesta en marcha de principios correctos para el desarrollo de sistemas de información empresariales.
            </p>
          </Col>
        </Row>

        {/* Objetivos Específicos */}
        <Row className="my-4">
          <Col>
            <h2>Objetivos Específicos del Curso</h2>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>
                Proporcionar al estudiante herramientas conceptuales, metodológicas y de tecnología para consolidar la capacidad de análisis y diseño orientado a objetos.
              </ListGroup.Item>
              <ListGroup.Item>
                Desarrollar la habilidad de diseñar arquitecturas lógicas en proyectos de sistemas de información empresariales.
              </ListGroup.Item>
              <ListGroup.Item>
                Ofrecer una visión amplia sobre tópicos especiales de la ingeniería de software, metodologías CASE y métricas de calidad.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Resultados Esperados */}
        <Row className="my-4">
          <Col>
            <h2>Resultados Esperados del Curso</h2>
            <p>Al finalizar el curso, el estudiante será capaz de:</p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>
                Aplicar distintas metodologías de desarrollo de sistemas.
              </ListGroup.Item>
              <ListGroup.Item>
                Utilizar metodologías de desarrollo ágiles y robustas.
              </ListGroup.Item>
              <ListGroup.Item>
                Tomar decisiones sobre qué metodología usar según el proyecto.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Formato y Procedimientos */}
        <Row className="my-4">
          <Col>
            <h2>Formato y Procedimientos</h2>
            <p>
              El curso está estructurado en clases magistrales apoyadas por presentaciones y quizzes sobre clases previas. Se refuerza con laboratorios en grupo. Se espera respeto y compromiso por parte de los estudiantes.
            </p>
            <p>
              Los celulares deben estar en modo vibrador para no interrumpir la clase. Se requiere compromiso, dedicación y una participación activa.
            </p>
          </Col>
        </Row>

        {/* Requerimientos del Curso */}
        <Row className="my-4">
          <Col>
            <h2>Requerimientos del Curso</h2>
            <p>
              Todas las tareas y proyectos se entregarán en la fecha establecida. Las tareas y proyectos serán entregados de manera anticipada.
            </p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>
                <strong>Política de asistencia:</strong> Se requiere el 80% de asistencia y participación en clase.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Ponderación del Curso */}
        <Row className="my-4">
          <Col>
            <h2>Ponderación del Curso</h2>
            <p>Notas o punteos para las diferentes actividades del curso:</p>
            <Table bordered>
              <thead>
                <tr>
                  <th>Actividades</th>
                  <th>Ponderación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Evaluación Parcial 1</td>
                  <td>15 puntos</td>
                </tr>
                <tr>
                  <td>Evaluación Parcial 2</td>
                  <td>15 puntos</td>
                </tr>
                <tr>
                  <td>Tareas</td>
                  <td>20 puntos</td>
                </tr>
                <tr>
                  <td>Proyecto de Curso</td>
                  <td>15 puntos</td>
                </tr>
                <tr>
                  <td>Evaluación Final</td>
                  <td>35 puntos</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>Gustavo Letona - 9490-21-3142</p>
      </footer>
    </div>
  );
}

export default CursoAnalisisSistemas;
