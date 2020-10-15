import React, { useContext } from 'react';
import { FruitProvider } from './FruitContext';
import { FruitContext } from './FruitContext';
import FruitForm from './FruitForm';
import FruitTable from './FruitTable';
import './Fruit.css';

const Fruit = () => {
    return (
        <FruitProvider>
            <FruitTable />
            <FruitForm />
        </FruitProvider>
    );
}

export default Fruit;