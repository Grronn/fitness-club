import React from 'react';
import { useContext } from 'react';
import { Component } from 'react';
import {Routes, Route, Redirect, Navigate} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Context } from '../index';

import { authRoutes, publicRoutes } from '../routes';



import { MAIN } from '../utils/consts';

const AppRouter = () => {
    const {user}=useContext(Context)
    console.log(user)
    return(

        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN}/>
        </Switch>

    );
};

export default AppRouter;