import React from 'react';
import { Container, Row, Col, Table, ListGroup, Navbar, Nav } from 'react-bootstrap';
import './styles/Home.css';

function CursoEticaProfesional() {
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
      <h1 className="text-center mt-3">Ética Profesional</h1>

      <Container>
        {/* Objetivo General del Curso */}
        <Row className="my-4">
          <Col>
            <h2>Objetivo General del Curso</h2>
            <p>
              El estudiante desarrolla un carácter íntegro mediante el conocimiento, análisis, reflexión y aplicación de principios éticos y morales establecidos por la Palabra de Dios; relaciona los principios con su plan personal de vida para decidir su futuro.
            </p>
          </Col>
        </Row>

        {/* Objetivos Específicos */}
        <Row className="my-4">
          <Col>
            <h2>Objetivos Específicos del Curso</h2>
            <ListGroup as="ul">
              <ListGroup.Item>
                Muestra una mejora en su autoestima y desarrolla su potencial humano a fin de convertirse en un profesional exitoso.
              </ListGroup.Item>
              <ListGroup.Item>
                Asume una actitud positiva con respecto a los valores cristianos y alinea su conducta personal de acuerdo a los mismos.
              </ListGroup.Item>
              <ListGroup.Item>
                Reconoce la importancia de las relaciones humanas y del trabajo en equipo, para lograr resultados provechosos en su vida familiar, ambiente de trabajo y su entorno social.
              </ListGroup.Item>
              <ListGroup.Item>
                Decide ser un profesional responsable, consciente de su importante participación en la sociedad guatemalteca.
              </ListGroup.Item>
              <ListGroup.Item>
                Interioriza una responsabilidad cívica, social, ecológica, y una conciencia de cristianismo activo.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Resultados Esperados */}
        <Row className="my-4">
          <Col>
            <h2>Resultados Esperados del Curso</h2>
            <p>Al finalizar el curso, el estudiante será capaz de:</p>
            <p>
              Fomentará las relaciones humanas y el trabajo en equipo para el logro de resultados provechosos en su vida familiar, laboral y social. Coadyuvará con la Universidad Mariano Gálvez a graduar profesionales éticamente responsables en la participación cívica, social, ecológica y cristiana en la sociedad guatemalteca.
            </p>
          </Col>
        </Row>

        {/* Formato y Procedimientos */}
        <Row className="my-4">
          <Col>
            <h2>Formato y Procedimientos</h2>
            <p>
              Este curso está estructurado de la siguiente forma: principalmente se darán clases magistrales con el apoyo de presentaciones que ayudarán a fijar por medio de la memoria visual los conceptos vistos en clase. Se realizarán quizzes de 1 o 2 preguntas de las clases anteriores, para repasar lo aprendido. Se reforzará lo aprendido en clase con laboratorios en grupo sobre el tema principal.
            </p>
            <p>
              Se espera respeto hacia el catedrático y los compañeros. Los celulares deberán estar en modo vibrador para no interrumpir la clase. Se requiere compromiso y dedicación, ya que el curso es parte fundamental de la vida profesional.
            </p>
          </Col>
        </Row>

        {/* Requerimientos del Curso */}
        <Row className="my-4">
          <Col>
            <h2>Requerimientos del Curso</h2>
            <p>
              Todas las tareas y proyectos se entregarán en la fecha y medio establecidos, con tiempo suficiente para su elaboración.
            </p>
            <ListGroup as="ol" numbered>
              <ListGroup.Item>
                <strong>Política de asistencia:</strong> Se requiere el 80% de asistencia y participación constante en clase.
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

export default CursoEticaProfesional;
