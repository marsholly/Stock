import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let companies = [];

class CompanyStore extends EventEmitter{
  constructor(){
    super();


    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_All_COMPANIES':
          companies = action.companyArr;
          this.emit('CHANGE');
          break;

      }
    });
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE',cb);
  }

  getAll(){
    return companies;
  }
}

export default new CompanyStore();
