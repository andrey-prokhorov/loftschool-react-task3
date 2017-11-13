import React, {PureComponent} from 'react';
import './Step.css';

class Step extends PureComponent {
  handleClick = event => {
    const { isClickable, number, onClick} = this.props;
    if (isClickable) {
      onClick(number);
    }
  };
  render() {
    const {isSelected, isClickable, number} = this.props;
    let classes = "step";

    if (isSelected) {
      classes = classes + " step-selected";
    }

    if (isClickable) {
      classes = classes + " step-clickable";
    }
    
    return (
      <div className={classes}>
        <p className="step-number" onClick={this.handleClick}>{number}</p>
        <p className="step-title" onClick={this.handleClick}>{this.props.children}</p>
      </div>
    );
  }
}

export default Step;