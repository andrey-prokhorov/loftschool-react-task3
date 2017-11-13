import React, { Component } from "react";
import "./App.css";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";
import Step from "./Step";

class App extends Component {
  state = {
    step: 1,
    firstName: "Maria",
    lastName: "Bullensson",
    email: "maria@bu.com",
    cardNumber: "",
    isTimeOver: false
  };

  stepTitles = ["Personal information", "Card information", "Finish"];

  handleChangeForm = (name, value) => {
    const newValue = {
      [name]: value
    };

    this.setState({ ...this.state, ...newValue });
  };

  handleChangeTimeOver = isTimeOver => {
    this.setState({isTimeOver});
  };  

  isFormCommitable() {
    const { firstName, lastName, email, step, cardNumber } = this.state;

    switch (step) {
      case 1: {
        return (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          email.includes("@")
        );
      }

      case 2: {
        return cardNumber.length === 16;
      }

      default: {
        return false;
      }
    }
  }

  renderForm() {
    const { firstName, lastName, email, step, cardNumber } = this.state;

    switch (step) {
      case 1: {
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      }

      case 2: {
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      }

      default: {
        return "You are done with the form, thank you!";
      }
    }
  }

  handleClickNextForm = event => {
    this.setState({ step: this.state.step + 1 });
  };

  handleTabClick = step => {
    this.setState({ step });
  };

  // isButtonNextVisible = () => {
  //   return !this.isFormCommitable() || this.state.isTimeOver    
  // }

  render() {
    const { step } = this.state;

    return (
      <div className="container">
        <div className="tab-panel">
          {this.stepTitles.map((item, index) => (
            <Step
              onClick={this.handleTabClick}
              isSelected={step === index + 1}
              key={index}
              number={index + 1}
              isClickable={index > 0}
            >
              {this.stepTitles[index]}
            </Step>
          ))}
        </div>

        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable() || this.state.isTimeOver}
            //style={{visibility: this.isButtonNextVisible ? 'visible' : 'hidden' }}              
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
