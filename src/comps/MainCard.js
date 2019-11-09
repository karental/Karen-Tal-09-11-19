import React from "react";
import{
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink
} from "reactstrap";

function MainCard(){
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <CardTitle tag="h4">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#pablo" onClick={e => e.preventDefault()}>
            Card link
          </CardLink>
          <CardLink href="#pablo" onClick={e => e.preventDefault()}>
            Another link
          </CardLink>
        </CardBody>
      </Card>
    </>
  );
}

export default MainCard