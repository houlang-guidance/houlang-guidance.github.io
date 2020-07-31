import React from 'react';
import Layout from '@theme/Layout';
import { Container, Row, Col } from 'reactstrap';
import Link from '@docusaurus/Link';

export default () => (
  <Layout>
    <Container>
      <h1 className="text-center m-5">神奇的百宝箱</h1>
      <Row>
        <Col sm={4}>
          <Link to="/tools/ask-better">技术提问</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
);
