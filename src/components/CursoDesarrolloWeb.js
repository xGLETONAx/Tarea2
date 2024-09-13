import React from 'react';
import { Container, Row, Col, Table, ListGroup, Nav, Navbar } from 'react-bootstrap';
import './styles/Home.css';  

function CursoDesarrolloWeb() {
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
          <h1 className="text-center mt-3">Desarrollo Web</h1>


      <Container>
      {/* Objetivo General del Curso */}
      <Row className="my-4">
        <Col>
          <h2>Objetivo General del Curso</h2>
          <p>
            El estudiante estará en la capacidad de conformar equipos de trabajo de desarrollo de
            aplicaciones en una herramienta con tecnología de punta. Dado que a este nivel, el estudiante
            tiene los conocimientos de bases de datos y de análisis de sistemas, los cuales son puestos en
            práctica en este curso.
          </p>
        </Col>
      </Row>
      

      {/* Objetivos Específicos */}
      <Row className="my-4">
        <Col>
          <h2>Objetivos Específicos del Curso</h2>
          <ListGroup as="ol" numbered>
            <ListGroup.Item>Implementar sus conocimientos de Análisis de Sistemas.</ListGroup.Item>
            <ListGroup.Item>Aplicar sus conocimientos de BD.</ListGroup.Item>
            <ListGroup.Item>Ampliar sus conocimientos en ambiente WEB.</ListGroup.Item>
            <ListGroup.Item>Introducirlo al mundo de Internet por medio de proyectos Web.</ListGroup.Item>
            <ListGroup.Item>Darle los conocimientos que le permitan desarrollar aplicaciones en esta tecnología.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Resultados esperados */}
      <Row className="my-4">
        <Col>
          <h2>Resultados Esperados del Curso</h2>
          <p>Al finalizar el curso, el estudiante será capaz de:</p>
          <ListGroup as="ol" numbered>
            <ListGroup.Item>Aplicar los conocimientos de desarrollo de software para desarrollar aplicaciones web.</ListGroup.Item>
            <ListGroup.Item>Programar aplicaciones WEB utilizando PHP.</ListGroup.Item>
            <ListGroup.Item>Programar aplicaciones WEB utilizando Java.</ListGroup.Item>
            <ListGroup.Item>Programar aplicaciones WEB utilizando Dot Net.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Formato y Procedimientos */}
      <Row className="my-4">
        <Col>
          <h2>Formato y Procedimientos</h2>
          <p>
            Este curso está estructurado de la siguiente forma: principalmente se darán clases magistrales con el apoyo de presentaciones en PowerPoint. Se realizarán quizzes de 1 o 2 preguntas para repasar lo visto.
          </p>
          <p>
            Se espera que los estudiantes mantengan el respeto y compromiso en clase, participen activamente y completen el porcentaje mínimo de asistencia.
          </p>
        </Col>
      </Row>

      {/* Requerimientos */}
      <Row className="my-4">
        <Col>
          <h2>Requerimientos del Curso</h2>
          <p>
            Todas las tareas y asignaciones se darán con suficiente antelación. Las tareas deben ser entregadas en la fecha y por el medio establecido.
          </p>
          <ListGroup as="ol" numbered>
            <ListGroup.Item>
              <strong>Política de asistencia:</strong> Se requiere el 80% de asistencia a clases y participación constante.
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

export default CursoDesarrolloWeb;
