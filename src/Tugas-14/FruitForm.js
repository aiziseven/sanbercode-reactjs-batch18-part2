import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FruitContext } from './FruitContext';

function FruitForm() {
    const { buahState, newBuahState, indexState, submittedState, disabledState, loadingState } = useContext(FruitContext);

    const [buah, setBuah] = buahState;
    const [newBuah, setNewBuah] = newBuahState;
    const [index, setIndex] = indexState;
    const [submitted, setSubmitted] = submittedState;
    const [disabled, setDisabled] = disabledState;
    const [loading, setLoading] = loadingState;

    const handleChange = (event) => {
        let formBuahNew = { ...newBuah };
        formBuahNew[event.target.name] = event.target.value;
        setNewBuah(formBuahNew);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit ', newBuah);
        if (index === -1) {
            setDisabled(true);
            axios.post('http://backendexample.sanbercloud.com/api/fruits', newBuah)
                .then(res => {
                    setSubmitted(submitted + 1);
                    console.log('submitted');
                    setNewBuah([
                        { id: 0, name: '', price: 0, weight: 0 }
                    ]);
                    setDisabled(false);
                })
        } else {
            console.log('updated');
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${newBuah.id}`, newBuah)
                .then(res => {
                    console.log('updated');
                    setNewBuah([
                        { id: 0, name: '', price: 0, weight: 0 }
                    ]);
                    setSubmitted(submitted + 1);
                })
        }
        setIndex(-1);
    }

    useEffect(() => {
        axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then(res => {
                setBuah(res.data);
                setLoading(false);
            })
    }, [submitted]);

    return (
        <div>
            <form className='container' onSubmit={handleSubmit}>
                <h1>Form Pembelian Buah</h1>
                <table className='form-center'>
                    <tbody>
                        <tr>
                            <td>Nama Buah</td>
                            <td>&nbsp;</td>
                            <td><input
                                type='text'
                                name='name'
                                id='name'
                                className='form-control'
                                value={newBuah.name || ''}
                                onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Harga</td>
                            <td>&nbsp;</td>
                            <td><input
                                type='number'
                                name='price'
                                id='price'
                                className='form-control'
                                value={newBuah.price || ''}
                                onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Berat</td>
                            <td>&nbsp;</td>
                            <td><input
                                type='number'
                                name='weight'
                                id='weight'
                                className='form-control'
                                value={newBuah.weight || ''}
                                onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    type='submit'
                                    className='btn'
                                    disabled={disabled ? true : false}>Kirim</button>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default FruitForm;