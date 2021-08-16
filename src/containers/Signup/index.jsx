import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";

function Signup() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input 
                        label="First Name"
                        placeholder="First Name"
                        value=""
                        type="text"
                        onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Input 
                        label="Last Name"
                        placeholder="Last Name"
                        value=""
                        type="text"
                        onChange={() => {}}
                    />
                  </Col>
                </Row>
                    <Input 
                        label="Email"
                        placeholder="Email"
                        value=""
                        type="email"
                        onChange={() => {}}
                    />
                    <Input 
                        label="Password"
                        placeholder="Password"
                        value=""
                        type="Password"
                        onChange={() => {}}
                    />
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Signup;
