import React  from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreatSpec from '../components/modals/CreateSpec';
import CreatType from '../components/modals/CreateType';


const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [specVisible, setSpecVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип</Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
                onClick={() => setSpecVisible(true)}
            >
                Добавить сотрудника</Button>
            <CreatType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreatSpec show={specVisible} onHide={() => setSpecVisible(false)}/>
        </Container>
        
        
    );
};

export default Admin;