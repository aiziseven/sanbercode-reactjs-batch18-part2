import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Crud.css';

function Crud() {
    const [buah, setBuah] = useState([
        { id: 0, name: '', price: 0, weight: 0 }
    ]
    );
    const [newBuah, setNewBuah] = useState(
        { id: 0, name: '', price: 0, weight: 0 }
    );
    const [index, setIndex] = useState(-1);
    const [submitted, setSubmitted] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(true);

    const header = ['Nama', 'Harga', 'Berat'];

    const handleChange = (event) => {
        let formBuahNew = { ...newBuah };
        formBuahNew[event.target.name] = event.target.value;
        setNewBuah(formBuahNew);
    }

    const handleEdit = (event) => {
        let formBuahNew = buah[event.target.value];
        setNewBuah(formBuahNew);
        setIndex(event.target.value);
    }

    const handleDelete = (event) => {
        let formBuahNew = buah[event.target.value];
        console.log(formBuahNew.id);
        setDisabled(true);
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${formBuahNew.id}`)
            .then(res => {
                console.log('deleted');
                setSubmitted(submitted + 1);
                setNewBuah([
                    { id: 0, name: '', price: 0, weight: 0 }
                ]);
                setDisabled(false);
            });
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
        loading ?
            <>
                <br />
                <div className='loader'></div>
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
            </>
            :
            <div>
                <h1 style={{textAlign:'center'}}>Tugas-13</h1>
                <h1 style={{ textAlign: 'center' }}>Tabel Harga Buah</h1>
                <table className='table-crud' id='table-crud'>
                    <thead>
                        <tr>
                            {header.map(head => {
                                return (
                                    <td key={head}>{head}</td>
                                )
                            })}
                            <td colSpan='2'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {buah.map((b, index) => {
                            let weightConv = b.weight / 1000;
                            return (
                                <tr key={b.id}>
                                    <td>{b.name}</td>
                                    <td>{b.price}</td>
                                    <td>{`${weightConv} Kg`}</td>
                                    <td align='center'>
                                        <button
                                            className='btn-crud'
                                            onClick={handleEdit}
                                            value={index}
                                            title={`Edit Data ${b.name}`}>
                                            Edit
                                        </button>
                                    </td>
                                    <td align='center'>
                                        <button
                                            className='btn-crud'
                                            onClick={handleDelete}
                                            value={index}
                                            title={`Delete Data ${b.name}`}
                                            disabled={disabled ? true : false}>
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br />

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

export default Crud;