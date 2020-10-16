import React, { useContext } from 'react';
import { FruitProvider } from './FruitContext';
import { FruitContext } from './FruitContext';
import FruitForm from './FruitForm';
import FruitTable from './FruitTable';
import './Fruit.css';

const Fruit = () => {
    return (
        <FruitProvider>
            <h1 style={{textAlign:'center'}}>Tugas-14</h1>
            <FruitTable />
            <FruitForm />
        </FruitProvider>
    );
}

export default Fruit;