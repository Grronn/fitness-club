import React  from 'react';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createSpec } from '../../http/specAPI';


const CreatSpec = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [value5, setValue5] = useState('')
    const [value6, setValue6] = useState('')
    const addSpec = () => {
        createSpec(value,value2,value3,value4,value5,value6).then(data => {
            setValue('')
            setValue2('')
            setValue3('')
            setValue4('')
            setValue5('') 
            setValue6('')
            onHide()        
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить нового сотрудника
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-2"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите имя"}
                    />

                    <Form.Control
                        className="mt-2"
                        value={value2}
                        onChange={e => setValue2(e.target.value)}
                        placeholder={"Введите фамилию"}
                    />
                    <Form.Control
                        className="mt-2"
                        value={value3}
                        onChange={e => setValue3(e.target.value)}
                        placeholder={"Введите отчество"}
                    />
                    <Form.Control
                        className="mt-2"
                        value={value4}
                        onChange={e => setValue4(e.target.value)}
                        placeholder={"Введите дату рождения"}
                    />
                    <Form.Control
                        className="mt-2"
                        value={value5}
                        onChange={e => setValue5(e.target.value)}
                        placeholder={"Введите специальность"}
                    />
                    <Form.Control
                        className="mt-2"
                        value={value6}
                        onChange={e => setValue6(e.target.value)}
                        placeholder={"Введите номер телефона"}
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addSpec}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatSpec;