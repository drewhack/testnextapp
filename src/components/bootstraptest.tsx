'use client';
import { Container, Row, Col } from 'react-bootstrap';

export const BootstrapRow = () => {
  return (
    <Container>
        <Row>
            <Col>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">Bootstrap Style Slider</label>
                </div>
            </Col>
            <Col>
                2
            </Col>
            <Col>
                3
            </Col>
        </Row>
  </Container>
  );
};
