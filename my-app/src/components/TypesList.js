import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import {Context} from "../index";
import TypesItem from "./TypesItem";

const TypesList = observer(() => {
    const {types} = useContext(Context)
    return (
        <Row className="d-flex">
            {types.types.map(type =>
                <TypesItem key={type.id} type={type}/>
            )}

        </Row>
        
    );
});

export default TypesList;