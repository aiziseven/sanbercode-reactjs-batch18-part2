import React, { Component } from 'react';
import './Table.css';

const header = ['Nama', 'Harga', 'Berat'];

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class Table extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Tugas-10</h1>
                <h1 style={{ textAlign: 'center' }}>Tabel Harga Buah</h1>
                <table className='table' id='table'>
                    <thead>
                        <tr>
                            {header.map(head => {
                                return (
                                    <td key={head}>{head}</td>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map(buah => {
                            let beratConv = buah.berat / 1000;
                            return (
                                <tr key={buah.nama}>
                                    <td>{buah.nama}</td>
                                    <td>{buah.harga}</td>
                                    <td>{`${beratConv} Kg`}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br />
            </div>
        );
    }
}

export default Table;