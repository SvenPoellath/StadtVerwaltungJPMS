import React from 'react';
import '../../App.css';
import './Products.css'
import { Button } from '../Button';
import { Link } from 'react-router-dom';
export default function Products() {
  return (
  <div className='report-container'>
    <h1 className='products'>Was möchten Sie melden?</h1>
    <div className='report-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--long'
        >
          Defekt oder Schaden
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--long'
        >
          Verunreinigung
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--long'
        >
          Parkverstoß
        </Button>
      </div>
  </div>
  );
}
