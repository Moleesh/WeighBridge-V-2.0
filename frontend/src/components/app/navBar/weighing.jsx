import React from "react";
import { Row, Col, Form, Card } from "react-bootstrap";

import ColumnOne from "./weighing/columnOne";
import ColumnTwo from "./weighing/columnTwo";
import ColumnThree from "./weighing/columnThree";
import Bottom from "./weighing/bottom";

const Weighing = props => {
  let thisState = props.preState;
  return (
    <Form
      className="py-2"
      onKeyDown={event => {
        if (event.keyCode === 9) {
          event.preventDefault();
        }
      }}
    >
      <Row>
        <ColumnOne preState={thisState} />
        <Col sm="8">
          <Row className="justify-content-center bold my-3">
            <Card
              className="text-center w-75 display-2 "
              style={{
                color: "red",
                fontsize: "20px",
                fontFamily: "sans-serif"
              }}
            >
              <Card.Header>{thisState.weighing.weight}</Card.Header>
            </Card>
          </Row>
          <Row>
            <ColumnTwo preState={thisState} />
            <ColumnThree preState={thisState} />
          </Row>
        </Col>
      </Row>
      <Bottom preState={thisState} />
    </Form>
  );
};

export default Weighing;
