import React, { Component } from 'react';
import StockList from './StockList'

export default class App extends Component {
  constructor(){
    super();

    this.changeSymbol = this.changeSymbol.bind(this);

    this.state = {
      symbol: '',
      CompanyData: null
    }
  }

  changeSymbol(e){
    this.setState({symbol: e.target.value})
  }

  render() {
    return (
      <div className = 'container'>
        <h1 className="text-center">Stock Tracker</h1>
        <form onSubmit={this.submit}>
          <div className="input-group form-inline">
            <input type="text" placeholder="Enter Username" value={this.state.symbol} onChange={this.changeSymbol }/>
            <span className="input-group-btn">
              <button className="btn btn-info btn-md" id="btn-chat">Enter</button>
            </span>
          </div>
        </form>
        <StockList />
      </div>
    )
  }
}
