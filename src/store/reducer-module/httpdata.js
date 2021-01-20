import { HTTP_GET_DATA } from '../actions-type';
export const httpdata=(state=null, action) => {
    switch (action.type) {
        case HTTP_GET_DATA:
          let obj = action.data ?  state=action.data : state;
          return  obj
        default :
            return state;
    }  
}

