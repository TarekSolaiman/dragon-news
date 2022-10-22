import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Container>
        <Row>
          <Col className="d-none d-lg-block" lg="2">
            <LeftSideNav />
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
