import React, { Component } from "react";


class Form extends Component {
  constructor(props) {
  super(props);
  this.state = {
  date: '',
  category: '',
  description: '',
  amount: '',
  };
  }
  
  handleSubmit = (event) => {
  event.preventDefault();
  const { date, category, description, amount } = this.state;
  this.props.onSubmit({ date, category, description, amount });
  this.setState({ date: '', category: '', description: '', amount: '' });
  };
  
  render() {
  const { date, category, description, amount } = this.state;
  
  return (
    <form className="form-container" onSubmit={this.handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => this.setState({ date: e.target.value })}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => this.setState({ category: e.target.value })}
        />
        </label>
    <label>
      Description:
      <input
        type="text"
        value={description}
        onChange={(e) => this.setState({ description: e.target.value })}
      />
    </label>
    <label>
      Amount:
      <input
        type="number"
        value={amount}
        onChange={(e) => this.setState({ amount: e.target.value })}
      />
    </label>
    <button type="submit">Add Transaction</button>
  </form>
);
}
}


export default Form;
