import Card from 'react-bootstrap/Card';
import React from 'react';
import dessertImg from './assets/images/cheesecake.png';

function DessertCard() {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img
        variant="top"
        src={dessertImg}
        alt="featured dessert"
        style={{
          width: '80%', // Adjust the width as needed
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />
      <Card.Body>
        <Card.Title>
          <h1>"Sweet of the Week"</h1>
        </Card.Title>
        <Card.Text>
          <p>
            This Cheesecake is pure, unadulterated bliss, imagine a velvety vanilla-bean base made with 
            real Philly Cream cheese and the perfect amount of graham cracker crust. Infused with notes of 
            lemon and almond, every bite is a heavenly delight.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DessertCard;
