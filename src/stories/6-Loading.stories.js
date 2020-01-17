import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

import '../styles/styles.css';

export default {
  title: 'Components',
  component: 'Loadings',
};

export const Loadings = () => (

<div className='container mt-5'>
   <h1>Spinner</h1>
    <div className='container'>
        <Spinner animation="border" />
        <br/>
        <br/>
        <h1>Pulse</h1>
        <Spinner animation="grow" />
        <br/>
        <br/>
        <h1>Spinner Colors</h1>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
    </div>
</div>

);




