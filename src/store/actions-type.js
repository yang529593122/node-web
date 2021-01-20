import axios from "axios"
export const ADD_ITEM_VALUE='ADD_ITEM_VALUE';  // 添加
export const HTTP_GET_DATA='HTTP_GET_DATA';
export const DEL_ITEM='DEL_ITEM';
 
export const delItem=(data)=>({
    type:DEL_ITEM,
    data
})
export const addItemValue=(data)=>{
    return (dispatch) => {
        axios.post('http://127.0.0.1:8000/add',{"conent_text":data}).then(res=>{
            console.log(res)
            // dispatch({
            //     type:ADD_ITEM_VALUE,
            //     data:res.data
            // })
        })
    }
}
export const httpGetData=(data)=>{
    return (dispatch) => {
        axios('http://127.0.0.1:8000/list').then(res=>{
            dispatch({
                type:HTTP_GET_DATA,
                data:res.data
          })
        })
      }
}
