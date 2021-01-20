import { ADD_ITEM_VALUE,DEL_ITEM } from '../actions-type';
import {add_list_fn} from "./Functional_data"
export const list=(state=[], action) => {
    switch (action.type) {
        case ADD_ITEM_VALUE:
            return state=[...add_list_fn(state,action.data)] 
        case DEL_ITEM:
            let obj = state.filter(item=> item!==action.data)
            return  obj
        default :
            return state;
    }
    
}

