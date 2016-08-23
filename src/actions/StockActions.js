import API from '../API';


const StockActions = {
  getInfos(symbol){
    API.getInfos(symbol)
  }
}

export default StockActions;
