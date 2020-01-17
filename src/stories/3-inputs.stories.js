import React from 'react';

import { InputGroup, FormControl }from 'react-bootstrap';

import '../styles/styles.css';

export default {
    title: 'Components',
    component: 'Alerts',
};
export const Input = () => (
<div className='container mt-5'>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <br />
        <InputGroup size="lg">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
</div>
);

