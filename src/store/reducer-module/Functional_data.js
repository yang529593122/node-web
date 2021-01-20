import { message } from 'antd';
export const  add_list_fn=(state,data)=>{
    // 点击添加 数据操作
    if(data){
        if(state.includes(data)){
            message.warning('已经添加,不能重复添加');
            return state
        }else{
            return [...state,data]
        }
    }else{
        message.warning('添加内容不能为空');
        return state
    }

}