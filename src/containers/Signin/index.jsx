import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";

function Signin() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: '50px'}}>
            <Col md={{span: 6, offset: 3}}>
              <Form>
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

export default Signin;
