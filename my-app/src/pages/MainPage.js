import React  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BSCarousel from '../components/BSCarousel';


const Main = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
          <BSCarousel/>
        </Container>

        /*<Row>
            <Col md={3}>
            </Col>
            <Col md={9}>
            </Col>
          </Row>*/
    );
};

export default Main;
