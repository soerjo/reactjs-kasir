import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import numberWithCommas from "../utils/utils";

function Menu({ menus }) {
  console.log(menus);
  console.log(`images/${menus.category.nama.toLowerCase()}/${menus.gambar}`);

  return (
    <Col xl={4} md={6} xs={12} className="mb-3">
      <Card className="shadow">
        <Card.Img
          style={{
            width: "auto",
            height: "200px",
            objectFit: "cover",
          }}
          variant="top"
          src={`images/${menus.category.nama.toLowerCase()}/${menus.gambar}`}
        />
        <Card.Body>
          <Card.Title>
            {menus.nama} ({menus.kode})
          </Card.Title>
          <Card.Text>Rp {numberWithCommas(menus.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Menu;
