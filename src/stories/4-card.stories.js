
import React from 'react';
import Card from 'react-bootstrap/Card'

import '../styles/styles.css';

export default {
    title: 'Components',
    component: 'Cards',
};
export const Cards = () => (
<div className='container mt-5'>
    <h1>Cards</h1>
    
  <Card>
    <Card.Img variant="top" src="https://via.placeholder.com/731x80.png" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://via.placeholder.com/731x180.png" />
  </Card>

<div className='main mt-5 justify-content-space-around'>
    <Card bg="primary" text="white" className='mb-3' style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Primary Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card bg="secondary" text="white" className='mb-3' style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Secondary Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card bg="success" text="white" className='mb-3' style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Success Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card bg="danger" text="white" className='mb-3' style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Danger Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card bg="warning" text="white" className='mb-3'style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Warning Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card bg="info" text="white" className='mb-3' style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Info Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card bg="dark" text="white" className='mb-3' style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Dark Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />

    <Card bg="light" className='mb-3' style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <Card.Title>Light Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />
</div>


</div>
);



