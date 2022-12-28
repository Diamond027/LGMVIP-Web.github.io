import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const UserCard = ({ email, first_name, last_name, avatar }) => {
  return (
    <Card className="container-fluid" style={{ width: "13rem" }}>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>
          {first_name} {last_name}
        </Card.Title>
        <Card.Text>email={email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
