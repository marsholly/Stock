import React, { Component } from 'react'
import ListItem from './ListItem';
import StockStore from '../stores/StockStore';
import StockAction from '../actions/StockAction';


export default class StockList extends Component{
  constructor(){
    super();

    this._onChange = this._onChange.bind(this);

    this.state = {
      stocks: StockStore.getAll()
    }

  }

  componentDidMount(){
    StockAction.getAllTodos();
    StockStore.startListening(this._onChange);

  }

  componentWillUnmount(){
    StockStore.stopListening(this._onChange);

  }

  _onChange(){
    this.setState({
      stocks: StockStore.getAll()
    });
  }

  render(){
    const ListItems = this.state.stocks.map(stock =>{
      return (
        <ListItem key={stock._id} {...stock} />
      )
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }

}
