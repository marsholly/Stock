import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getInfos(symbol){
    axios.get(`/api/stocks/${symbol}`)
      .then(res => res.data)
      .then(ServerActions.receiveCompanys)
      .catch(console.error);
  }
}

export default API;
