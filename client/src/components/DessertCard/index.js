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
          width: '50%', // Reduce the width to make the image smaller
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          borderRadius: '20px', // Add curved edges to the image
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
