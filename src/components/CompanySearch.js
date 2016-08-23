import React, {Component} from 'react';
import CompanyStore from '../stores/CompanyStore';
import StockActions from '../actions/StockActions';
import uuid from 'uuid';
import ListCompany from './ListCompany'
import StockStore from '../stores/StockStore';

export default class CompanySearch extends Component {
  constructor(){
    super();

    this.changeSymbol = this.changeSymbol.bind(this);
    this._onChange = this._onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.reFresh = this.reFresh.bind(this);

    this.state = {
      symbol: '',
      companyData: [],
      stock:[],
      currentSymbol:''
    }
  }

  componentDidMount(){
    CompanyStore.startListening(this._onChange);
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    CompanyStore.stopListening(this._onChange);
    StockStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({companyData: CompanyStore.getAll()})
    this.setState({stock: StockStore.getAll()})
  }

  changeSymbol(e){
    this.setState({symbol: e.target.value})
  }

  submit(e){
    e.preventDefault();
    let symbol = this.state.symbol;
    StockActions.getInfos(symbol);
    StockActions.getOneInfo(symbol);
    this.setState({currentSymbol: this.state.symbol})
    console.log('currentSymbol:', this.state.currentSymbol)
    this.setState({symbol: ''})
  }

  reFresh(){
    let currentSymbol = this.state.currentSymbol;
    console.log('currentSymbol:', currentSymbol);
    StockActions.getInfos(currentSymbol);
    StockActions.getOneInfo(currentSymbol);
  }

  render() {
    let listCompanies ;
    let data = this.state.companyData;
    listCompanies = data.map(company =>{
      company._id = uuid();
      return(
        <ListCompany key ={company._id} {...company} />
      )
    })

    let stockObj = this.state.stock;
    let stock = stockObj.Data;
    let stockHtml
    if(stock){
      stockHtml = (
        <tr>
          <th>{stock.Name}</th>
          <th>{stock.LastPrice}</th>
          <th>{stock.High}</th>
          <th>{stock.Low}</th>
          <th>{stock.Open}</th>
          <th>{stock.ChangeYTD}</th>
        </tr>
      )
    } else {
      stockHtml = (<tr></tr>)
    }


    console.log('stock:', stock)
    return (
      <div className = 'container'>
        <form onSubmit={this.submit}>
          <div className="input-group">
            <input type="text" placeholder="Enter Symbol" value={this.state.symbol} onChange={this.changeSymbol }/>
              <button className="btn btn-info btn-md" id="btn-chat">Enter</button>
          </div>
        </form>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Symbol</th>
                <th>Exchange</th>
              </tr>
            </thead>
            <tbody>
              {listCompanies}
            </tbody>
         </table>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Last Price</th>
                <th>High</th>
                <th>Low</th>
                <th>Open</th>
                <th>ChangeYTD</th>
                <th>
                  <button className="btn btn-success btn-md"onClick ={this.reFresh}>Refresh</button>
                </th>
              </tr>
            </thead>
              <tbody>
                {stockHtml}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
