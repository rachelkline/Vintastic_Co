import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class Dashboard extends React.Component {
    render() {
        return (
            <Container>
        <Row className="mt-5">
            
        </Row>
        <Row className="mt-5">
          <Col xs={12} sm={12} md={12} lg={6}>
            <Card className="shadow">
            <Card.Body>
            <h2>
              <strong>BLAHBLAHBLAH</strong>
            </h2>
            </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} sm={12} md={12} lg={6}>
            {/* <Test /> */}
            <div className="mt-3">
              {/* <Nested /> */}
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Card className="shadow">
                  <Card.Body>A BOX! </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Card className="shadow">
                  <Card.Body>ANOTHER BOX!</Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            {/* <Itinerary /> */}
          </Col>
        </Row>
            </Container>
        )
    }
}

export default Dashboard;