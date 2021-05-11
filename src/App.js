import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, NavbarComponent, Menu } from "./components";
import { API_URL } from "./utils/const";
import axios from "axios";

function App() {
  const [menus, setMenus] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}products`)
      .then(function (response) {
        // handle success
        setMenus(response.data);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Product</strong>
              </h4>
              <hr />
              <Row>
                {menus &&
                  menus.map((menu) => <Menu key={menu.id} menus={menu} />)}
              </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
