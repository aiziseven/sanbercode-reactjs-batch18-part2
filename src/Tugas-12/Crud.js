import React, { Component } from 'react';
import './Crud.css';

const header = ['Nama', 'Harga', 'Berat'];

class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            newBuah: [
                { nama: 'asd', harga: 0, berat: 0 }
            ],
            index: -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        let newBuahVal = this.state.newBuah;
        newBuahVal[event.target.id] = event.target.value;
        this.setState({
            newBuah: newBuahVal
        });

    }

    handleEdit(event) {
        let index = event.target.value;
        this.setState({ newBuah: this.state.buah[index], index })
    }

    handleDelete(event) {
        let index = event.target.value;
        this.state.buah.splice(index, 1);
        this.setState({ buah: this.state.buah })
    }

    handleSubmit(event) {
        event.preventDefault();
        let index = this.state.index;
        let newBuah = this.state.newBuah;
        let buah = this.state.buah;
        console.log('index ', index);

        if (index === -1) {
            this.setState({
                buah: [...this.state.buah, this.state.newBuah],
                newBuah: [
                    { nama: '', harga: 0, berat: 0 }
                ]
            })
        } else {
            buah[index] = newBuah
            this.setState({
                buah,
                newBuah: { nama: '', harga: 0, berat: 0 },
                index: -1
            })
        }
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Tugas-12</h1>
                <h1 style={{ textAlign: 'center' }}>Tabel Harga Buah</h1>
                <table className='table' id='table'>
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
                        {this.state.buah.map((b, index) => {
                            let beratConv = b.berat / 1000;
                            let number = index + 1;
                            return (
                                <tr key={number}>
                                    <td>{b.nama}</td>
                                    <td>{b.harga}</td>
                                    <td>{`${beratConv} Kg`}</td>
                                    <td align='center'>
                                        <button
                                            className='btn'
                                            onClick={this.handleEdit}
                                            value={index}
                                            title={`Edit Data ${b.nama}`}>
                                            Edit
                                        </button>
                                    </td>
                                    <td align='center'>
                                        <button
                                            className='btn'
                                            onClick={this.handleDelete}
                                            value={index}
                                            title={`Delete Data ${b.nama}`}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br />

                <form className='container' onSubmit={this.handleSubmit}>
                    <h1>Form Pembelian Buah</h1>
                    <table className='form-center'>
                        <tbody>
                            <tr>
                                <td>Nama Buah</td>
                                <td>&nbsp;</td>
                                <td><input
                                    type='text'
                                    name='nama'
                                    id='nama'
                                    className='form-control'
                                    value={this.state.newBuah.nama || ''}
                                    onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Harga</td>
                                <td>&nbsp;</td>
                                <td><input
                                    type='number'
                                    name='harga'
                                    id='harga'
                                    className='form-control'
                                    value={this.state.newBuah.harga || ''}
                                    onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Berat</td>
                                <td>&nbsp;</td>
                                <td><input
                                    type='number'
                                    name='berat'
                                    id='berat'
                                    className='form-control'
                                    value={this.state.newBuah.berat || ''}
                                    onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <button type='submit' className='btn'>Kirim</button>
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
}

export { Crud };