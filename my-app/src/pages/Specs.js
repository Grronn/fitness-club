import { observer } from 'mobx-react-lite';
import React  from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SpecList from '../components/SpecList';
import TypesItem from '../components/TypesItem';
import TypesList from '../components/TypesList';
import { fetchSpecs } from '../http/specAPI';
import { fetchTypes } from '../http/typeAPI';
import {Context} from "../index";


const Specs = observer(() => {
    const {spec} = useContext(Context)
    useEffect(() => {
        fetchSpecs().then(data => spec.setSpecs(data))
    }, [])

    return (
        <Container>
            <SpecList/>
        </Container>
        
    );
});

export default Specs;