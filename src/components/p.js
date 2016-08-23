import React, { Component } from 'react';
import CompanyList from './CompanyList';

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
          <div className="input-group">
            <input type="text" placeholder="Enter Symbol" value={this.state.symbol} onChange={this.changeSymbol }/>
              <button className="btn btn-info btn-md" id="btn-chat">Enter</button>
          </div>
        </form>
        <CompanyList />
      </div>
    )
  }
}
