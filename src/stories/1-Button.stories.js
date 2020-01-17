import React from 'react';

import { Button } from 'react-bootstrap';

import '../styles/styles.css';

export default {
  title: 'Components',
  component: 'Button',
};

export const Buttons = () => (

<div className='container'>
   <h1>Button styles </h1>
    <div className='main'>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
    </div>
</div>

);


