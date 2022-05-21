import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { SPEC_ROUTE, TYPE_ROUTE } from "../utils/consts";

const SpecItem = ({spec}) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3} className={"mt-3"} onClick={()=>history.push(SPEC_ROUTE+'/'+spec.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"red"} bg="white">
                <div className=" mt-1 d-flex justify-content-between align-items-center">
                    <Container className="d-flex justify-content-center align-items-center">
                        {spec.surname}

                    </Container>
                </div>

            </Card>

        </Col>
        
    );
};

export default SpecItem;