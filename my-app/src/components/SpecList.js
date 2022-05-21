import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import {Context} from "../index";
import SpecItem from "./SpecItem";
import TypesItem from "./TypesItem";

const SpecList = observer(() => {
    const {spec} = useContext(Context)
    return (
        <Row className="d-flex">
            {spec.spec.map(spec =>
                <SpecItem key={spec.id} spec={spec}/>
            )}

        </Row>
        
    );
});

export default SpecList;