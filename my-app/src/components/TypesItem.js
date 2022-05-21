import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { SPEC_ROUTE, TYPE_ROUTE } from "../utils/consts";

const TypesItem = ({type}) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3} className={"mt-3"} onClick={()=>history.push(TYPE_ROUTE+'/'+type.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"red"} bg="white">
                <div className=" mt-1 d-flex justify-content-between align-items-center">
                    <Container className="d-flex justify-content-center align-items-center">
                        {type.name}

                    </Container>
                </div>

            </Card>

        </Col>
        
    );
};

export default TypesItem;