import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.props.onChangeForm(name, value);
  };

  render() {
    return (
      <div>
        <Title>Personal information</Title>

        <div className="personal-form">
          <input
            name="firstName"
            value={this.props.firstName}
            onChange={this.handleChangeForm}
            placeholder="First name"
          />
          <input
            name="lastName"
            value={this.props.lastName}
            onChange={this.handleChangeForm}
            placeholder="Last name"
          />
          <input
            name="email"
            value={this.props.email}
            onChange={this.handleChangeForm}
            placeholder="Email"
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
