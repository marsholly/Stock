import React, {Component} from 'react';

export default class ListCompany extends Component{
  render(){
    let {Name, Symbol, Exchange} = this.props;
    return (
        <tr>
          <td>{Name}</td>
          <td>{Symbol}</td>
          <td>{Exchange}</td>
          <td>
            <button className="btn btn-success btn-xs">
              <span className="glyphicon glyphicon-list-alt"></span>
            </button>
          </td>
        </tr>
    )
  }
}
