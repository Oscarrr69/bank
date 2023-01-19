import React, { Component } from 'react';
import Form from './form';
import Filter from './filter';

class Trans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://api.npoint.io/6c17bb8fe6201901f1b2")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          transactions: data.transactions,
          isLoading: false,
        });
      });
  }

  handleNewTransaction = (newTransaction) => {
    this.setState((prevState) => ({
      transactions: [...prevState.transactions, newTransaction],
    }));
  };

  handleDeleteTransaction = (id) => {
    this.setState((prevState) => ({
      transactions: prevState.transactions.filter((transaction) => transaction.id !== id),
    }));
  };

  render() {
    const { transactions, isLoading } = this.state;

    return (
      <div className="transactions-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Form onSubmit={this.handleNewTransaction} />
            <Filter
              transactions={transactions}
              onDelete={this.handleDeleteTransaction}
            />
          </>
        )}
      </div>
    );
  }
}

export default Trans;