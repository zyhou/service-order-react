import React, { Component } from 'react';
import Service from './Service';
import './ServiceChooser.css';


export default class ServiceChooser extends Component {

  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  addTotal(price) {
    this.setState({ total: this.state.total + price});
  }

  render() {

    let self = this;

    let services = this.props.items.map((s) => {
      return <Service key={s.id} name={s.name} price={s.price} addTotal={self.addTotal.bind(this)} />;
    });

    return (
      <div>
        <h1>Vos services</h1>

        <div className="services">
          {services}

          <p className="total">Total <b>{this.state.total.toFixed(2) } €</b></p>
        </div>
      </div>
    );
  }
}
