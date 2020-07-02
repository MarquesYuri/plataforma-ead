import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Main from './components/Main';
import Dashboard from './pages/DashboardScreen';
import Aula from './pages/Aula';
import ProvasProfessor from './pages/ProvasProfessor';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} exact/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/dashboard/aula' component={Aula}/>
                <Route path="/provas" component={ProvasProfessor} />
                <Route component={Aula} path='/aula' />
                
                </Switch>
        </BrowserRouter>
    )
}
export default Routes;