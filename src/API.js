import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getAllStocks(){
    axios.get('/api/stocks')
      .then(res => res.data)
      .then(ServerActions.receiveStocks)
      .catch(console.error);
  }
}

export default API;
