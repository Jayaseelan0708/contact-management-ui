
import _ from "lodash";
import AxiosService from "./axios.service.js";
 

const ApiService =  {
 // LOGIN API SERVICE
 login(payload){
  return AxiosService.post('/users/login', payload);

 },
  // Get the total due amount for dealer
  getDealerTotalAmount(sid) {
    return AxiosService.get(`/auth/v1/find/total/due/${sid}`);
  },

  // Get Dealer un settled amount token.
  getDealerToken(payload){
    return AxiosService.post(`/auth/v1/pay/dealer/dues`, payload);
  },

  // Save the after transaction success for dealer.
  saveDealerTransaction(sid) {
    return AxiosService.get(`/auth/v1/process/dealer/transaction/details/${sid}`);
  },
  
  
};

export default ApiService;
