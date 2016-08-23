import AppDispatcher from '../AppDispatcher';

const ServerActions ={
  receiveCompanys(companyArr){
    AppDispatcher.dispatch({
      type: 'RECEIVE_All_COMPANIES',
      companyArr
    })
  }
}

export default ServerActions;
