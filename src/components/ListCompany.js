import React, {Component} from 'react';

export default class ListCompany extends Component{
  render(){
    let {Name, Symbol, Exchange} = this.props;
    return (
        <tr>
          <td>{Name}</td>
          <td>{Symbol}</td>
          <td>{Exchange}</td>
        </tr>
    )
  }
}
