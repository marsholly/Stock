import React, {Component} from 'react';
import StockActions from '../actions/StockActions';

export default class ListItem extends Component{
  render(){
    let {Name, LastPrice} = this.props;
    return (
        <tr>
          <td>{Name}</td>
          <td>{LastPrice}</td>
        </tr>
    )
  }
}
