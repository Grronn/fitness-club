import React  from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Context } from '..';
import PutSpec from '../components/modals/PutSpec';
import { deleteSpec, fetchOneSpec } from '../http/specAPI';
import { fetchOneType } from '../http/typeAPI';
import { SPEC_ROUTE } from '../utils/consts';


const SpecPage = () => {
    const {user}=useContext(Context)
    const [typeVisible, setTypeVisible] = useState(false)
    const [spec, setSpec] = useState({info: []})
    const {id}=useParams()
    const history = useHistory()
    useEffect(() => {
        fetchOneSpec(id).then(data=>setSpec(data))
    }, [])
    console.log(spec)

    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>Сотрудник</h2>
                <Row className="d-flex justify-content-between  mt-3">
                    <Container className="d-flex flex-column justify-content-center">
                        <Container className="ms-4">
                            Имя: {spec.name}
                        </Container>
                        <Container className="ms-4">
                            Фамилия: {spec.surname}                        
                        </Container>
                        <Container className="ms-4">
                            Отчество: {spec.patronymic}                        
                        </Container>
                        <Container className="ms-4">
                            Дата рождения: {spec.date}                        
                        </Container>
                        <Container className="ms-4">
                            Специальность: {spec.specialization}                        
                        </Container>
                        <Container className="ms-4">
                            Номер телефона: {spec.phone_number}                        
                        </Container>
                    </Container>
                    {user.isAuth ?
                        <Container className="d-flex flex-column justify-content-center">
                            <Button 
                                variant={"outline-dark"} 
                                className="mt-4 p-2"
                                onClick={() => setTypeVisible(true)}
                            >
                                Изменить
                            </Button>
                            <Button
                                variant={"outline-dark"} 
                                className="mt-4 p-2"
                                onClick={() => deleteSpec(id).then(data => {
                                    console.log(data)
                                    history.push(SPEC_ROUTE)
                                    
                                    
                                })}
                            >
                                Удалить
                            </Button>

                        </Container>
                    :
                        <Container></Container>
                    }        
                        <PutSpec show={typeVisible} onHide={() => setTypeVisible(false)}/>              
                </Row>
            </Card>
        </Container>
        
    );
};

export default SpecPage;


/*<Button 
                            variant={"outline-dark"} 
                            className="mt-4 p-2"
                            onClick={() => setTypeVisible(true)}
                        >
                            Изменить
                        </Button>
                        <Button
                            variant={"outline-dark"} 
                            className="mt-4 p-2"
                            onClick={() => deleteSpec(id).then(data => {
                                console.log(data)
                                history.push(SPEC_ROUTE)
                                
                                
                            })}
                        >
                            Удалить
                        </Button>*/