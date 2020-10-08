import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className='container'>
        <h1>Form Pembelian Buah</h1>
        <table className='form-center'>
          <tbody>

            <tr>
              <td>Nama Pelanggan</td>
              <td>&nbsp;</td>
              <td><input
                type='text'
                name='pelanggan'
                className='form-control' /></td>
            </tr>

            <tr>
              <td style={{ verticalAlign: 'bottom' }}>Daftar Item</td>
              <td>&nbsp;</td>
              <td>
                <input
                  type='checkbox'
                  name='item'
                  className='checkbox'
                  id='semangka' />
                <label htmlFor='semangka'>Semangka</label> <br />

                <input
                  type='checkbox'
                  name='item'
                  className='checkbox'
                  id='jeruk' />
                <label htmlFor='jeruk'>Jeruk</label> <br />

                <input
                  type='checkbox'
                  name='item'
                  className='checkbox'
                  id='nanas' />
                <label htmlFor='nanas'>Nanas</label> <br />

                <input
                  type='checkbox'
                  name='item'
                  className='checkbox'
                  id='salak' />
                <label htmlFor='salak'>Salak</label> <br />

                <input
                  type='checkbox'
                  name='item'
                  className='checkbox'
                  id='anggur' />
                <label htmlFor='anggur'>Anggur</label> <br />

              </td>
            </tr>

            <tr>
              <td>
                <button className='btn'>Kirim</button>
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

export default App;