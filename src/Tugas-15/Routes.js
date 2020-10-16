import React from 'react';
import { Switch, Route } from 'react-router';
import Table from '../Tugas-10/Table';
import Timer from '../Tugas-11/Timer';
import { Crud as FirstCrud } from '../Tugas-12/Crud';
import Crud from '../Tugas-13/Crud';
import Fruit from '../Tugas-14/Fruit';
import Form from '../Tugas-9/Form';

const Routes = () => {
    return (
        <Switch>
            <Route path='/tugas9'>
                <Form />
            </Route>
            <Route path='/tugas10'>
                <Table />
            </Route>
            <Route path='/tugas11'>
                <Timer />
            </Route>
            <Route path='/tugas12'>
                <FirstCrud />
            </Route>
            <Route path='/tugas13'>
                <Crud />
            </Route>
            <Route path='/tugas14'>
                <Fruit />
            </Route>
        </Switch>
    );
}

export default Routes;