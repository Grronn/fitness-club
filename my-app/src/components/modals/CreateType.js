import React  from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { createType } from '../../http/typeAPI';




const CreatType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const addType = () => {
        createType(value,value2).then(data => {
            setValue('')
            setValue2('')
            onHide()
            
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}       
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                    className="mt-2"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название типа"}
                    />

                    <Form.Control
                    className="mt-2"
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                    placeholder={"Введите название типа"}
                    type="number"
                    />
                    <hr/>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatType;