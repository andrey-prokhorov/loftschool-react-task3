import React, {Component} from 'react';
import Title from './Title';
import './CardForm.css';

export class CardForm extends Component {

  state = {
    leftTime: 10
  };

  constructor(props) {
    super(props);
    props.onChangeTimeOver(false);
  }

  componentDidMount() {
    this.id = setInterval(() => {
      const leftTime = Math.max(this.state.leftTime - 1, 0);
      this.setState({leftTime});

      if (leftTime === 0 && this.state.leftTime === 1) {
        this.props.onChangeTimeOver(true);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  }

  render() {
    const {leftTime} = this.state;
    return (
      <div className="card-form">
        <Title>Card number</Title>
        <input name="cardNumber" value={this.props.cardNumber} onChange={this.handleChangeForm} />
        <p className="left-time">You have {leftTime} seconds to fill in the form</p>
      </div>
    );
  }
}

export default CardForm;
