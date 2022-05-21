import React, {useContext} from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {Context} from "../index";
import { ADMIN_ROUTE, GRAPH, LOGIN_ROUTE, MAIN, SPEC_ROUTE, TYPE_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
    const {user}=useContext(Context)
    const history=useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="secondary" variant="dark">
            <Container>
                <NavLink style={{textDecoration: 'none', color:'white'}} to={MAIN}>Fitness</NavLink>
                <NavLink style={{textDecoration: 'none', color:'white'}} to={TYPE_ROUTE}>Типы</NavLink>
                <NavLink style={{textDecoration: 'none', color:'white'}} to={SPEC_ROUTE}>Специалисты</NavLink>
                <NavLink style={{textDecoration: 'none', color:'white'}} to={GRAPH}>График</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=>history.push(ADMIN_ROUTE)} >Добавление</Button>
                        <Button variant={"outline-light"} onClick={()=>logOut()} className="ms-4">Выйти</Button>
                    </Nav>                  
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=>history.push(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                    </Nav>
                }
                
                
                
            </Container>
        </Navbar>
    );
});

export default NavBar;