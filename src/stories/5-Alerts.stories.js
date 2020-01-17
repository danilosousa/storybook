import React from 'react';

// import { Alert }from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'

import '../styles/styles.css';

export default {
    title: 'Components',
    component: 'Inputs',
};
export const Alerts = () => (
<div className='container mt-5'>
    <h1>Mensagens de alerta</h1>
    <Alert variant='primary'>Primary</Alert>

    <Alert variant='secondary'>secondary</Alert>

    <Alert variant='success'>success</Alert>

    <Alert variant='danger'>danger</Alert>

    <Alert variant='warning'>warning</Alert>

    <Alert variant='info'>info</Alert>

    <Alert variant='light'>light</Alert>

    <Alert variant='dark'>dark</Alert>
</div>
);



