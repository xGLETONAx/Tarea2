import React from 'react';
import { Container, Row, Col, Table, ListGroup, Nav, Navbar } from 'react-bootstrap';
import './styles/Home.css';

function CursoArquitecturaComputadoras() {
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
      <h1 className="text-center mt-3">Arquitectura de Computadoras II</h1>

      <Container>
        {/* Objetivo General del Curso */}
        <Row className="my-4">
          <Col>
            <h2>Objetivo General del Curso</h2>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>
                Proporcionar el conocimiento teórico y práctico de los componentes físicos internos y externos de la computadora.
              </ListGroup.Item>
              <ListGroup.Item>
                Preparar al alumno para dar el diagnóstico exacto cuando la PC tiene problemas y dar la solución adecuada.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Objetivos Específicos */}
        <Row className="my-4">
          <Col>
            <h2>Objetivos Específicos del Curso</h2>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>Presentar la organización y diseño de la computadora personal.</ListGroup.Item>
              <ListGroup.Item>Examinar la arquitectura del CPU y sus componentes principales.</ListGroup.Item>
              <ListGroup.Item>Estudiar los dispositivos periféricos de la PC.</ListGroup.Item>
              <ListGroup.Item>Realizar en forma práctica la programación de interfaces con dispositivos básicos.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Resultados Esperados */}
        <Row className="my-4">
          <Col>
            <h2>Resultados Esperados del Curso</h2>
            <p>Al finalizar el curso, el estudiante será capaz de:</p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>Conocer la organización y diseño de la computadora.</ListGroup.Item>
              <ListGroup.Item>Conocer qué es la arquitectura von Neumann.</ListGroup.Item>
              <ListGroup.Item>Conocer qué es la arquitectura Harvard.</ListGroup.Item>
              <ListGroup.Item>Poder realizar proyectos utilizando microcontroladores.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Formato y Procedimientos */}
        <Row className="my-4">
          <Col>
            <h2>Formato y Procedimientos</h2>
            <p>
              Este curso está estructurado de la siguiente forma: principalmente se darán clases magistrales con el apoyo de presentaciones en PowerPoint, y se realizarán quizzes cortos sobre las clases anteriores. Se reforzará lo aprendido con laboratorios en grupo.
            </p>
            <p>
              Se espera de los estudiantes respeto hacia el catedrático y compañeros. Los celulares deberán estar en modo vibrador para no interrumpir la clase. Se requiere compromiso y dedicación, ya que el curso es esencial para la vida laboral y profesional.
            </p>
          </Col>
        </Row>

        {/* Requerimientos del Curso */}
        <Row className="my-4">
          <Col>
            <h2>Requerimientos del Curso</h2>
            <p>
              Todas las tareas y asignaciones se entregarán en la fecha y medio establecido, con suficiente antelación para su debida elaboración y entrega.
            </p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>
                <strong>Política de asistencia:</strong> Se requiere el 80% de asistencia y participación constante para enriquecer la discusión.
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

export default CursoArquitecturaComputadoras;
