import AppDispatcher from '../AppDispatcher';

const ServerActions ={
  receiveStocks(stocks){
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCKS',
      todos
    })
  }
}

export default ServerActions;
