import React from 'react';
import ReactDOM from 'react-dom';
import ServiceChooser from './ServiceChooser';
import './index.css';

var services = [
    { id: 0, name: 'Web Development', price: 300 },
    { id: 1, name: 'Design', price: 400 },
    { id: 2, name: 'Integration', price: 250 },
    { id: 3, name: 'Training', price: 220 }
];

ReactDOM.render(
  <ServiceChooser items={ services } />,
  document.getElementById('root')
);
