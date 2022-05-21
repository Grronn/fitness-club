import { observer } from 'mobx-react-lite';
import React  from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypesItem from '../components/TypesItem';
import TypesList from '../components/TypesList';
import { fetchTypes } from '../http/typeAPI';
import {Context} from "../index";
import Pages from './Pages';


const Types = observer(() => {
    const {types} = useContext(Context)
    useEffect(() => {
        fetchTypes(1,2).then(data => {
            types.setTypes(data)
            types.setTotalCount(data.count)
        })
        
    }, [])

    return (
        <Container>
            <TypesList/>
            <Pages/>
        </Container>
        
    );
});

export default Types;

/*<Row className='d-flex'>
                        {type.types.map(type =>
                            <TypesItem key={type.id} type={type}/>
                        )}

                    </Row>*/