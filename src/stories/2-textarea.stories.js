import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Components',
  component: 'textarea',
};

export const Textarea = () => (
  <div className='container'>
    <h1>Simple textarea </h1>
    <textarea className='form-control'>Hello Textarea</textarea>
  </div>
);