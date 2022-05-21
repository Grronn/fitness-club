import React  from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Context } from '..';
import PutType from '../components/modals/PutType';
import { deleteType, fetchOneType } from '../http/typeAPI';
import { TYPE_ROUTE } from '../utils/consts';


const TypePage = () => {
    const {user}=useContext(Context)
    const [typeVisible, setTypeVisible] = useState(false)
    const [type, setType] = useState({info: []})
    const {id}=useParams()
    const history = useHistory()
    useEffect(() => {
        fetchOneType(id).then(data=>setType(data))
    }, [])

    
    

    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>Абонемент</h2>
                <Row className="d-flex justify-content-between  mt-3">
                    <Container className="d-flex flex-row justify-content-center">
                        <Container className="ms-4">
                            Название: {type.name}
                        </Container>
                        <Container className="ms-4">
                            Стоимость: {type.cost}                        
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
                            onClick={() => deleteType(id).then(data => {
                                console.log(data)
                                history.push(TYPE_ROUTE)
                                
                                
                            })}
                        >
                            Удалить
                        </Button>

                        </Container>
                        :
                        <Container>                         
                        </Container>

                    }
                        
                        <PutType show={typeVisible} onHide={() => setTypeVisible(false)}/>
                    
                    
                        
                    

                    
                </Row>
            </Card>
        </Container>
        
    );
};

export default TypePage;