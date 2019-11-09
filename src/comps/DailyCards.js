import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

class Daily extends React.Component {


    render() {

            return (
                
                    <Card >
                        <CardBody>
                            <CardTitle>{/* day */}</CardTitle>
                            <CardTitle>{/* icon */}
                            </CardTitle>
                            <CardText>{/* temp */} </CardText>
                        </CardBody>
                    </Card>
                );
        }
    }

export default Daily;