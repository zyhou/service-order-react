import React, { Component } from 'react';
import './Service.css';

export default class ServiceChooser extends Component {

  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  clickHandler() {
    let active = !this.state.active;
    this.setState({ active: active });
    this.props.addTotal(active ? this.props.price : -this.props.price);
  }

  render() {
    return (
      <p className={ this.state.active ? 'active' : '' } onClick={() => this.clickHandler() }>
        {this.props.name} <b>{this.props.price.toFixed(2) } €</b>
      </p>
    );
  }
}
