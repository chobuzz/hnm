import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    const url = `http://localhost:3004/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} style={{ maxWidth: "70%", float: "right" }} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>

          <Dropdown
            style={{
              marginTop: "10px",
            }}
          >
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey={"S"}>S</Dropdown.Item>
              <Dropdown.Item eventKey={"M"}>M</Dropdown.Item>
              <Dropdown.Item eventKey={"L"}>L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              width: "70%",
              marginTop: "10px",
            }}
          >
            추가
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
