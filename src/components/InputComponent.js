import  { useState ,useEffect} from 'react';
import { connect } from 'react-redux'
import {addItemValue,httpGetData} from "../store/actions-type"
import {  Input,Button } from "antd"
function InputComponent (props) {
    const { onIncreaseClick,getHttpData ,httpdata} =props
   
    const [ itemValue, setValue ] = useState('')
    useEffect(()=>{ getHttpData() },[])
    const setInputItem = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <Input placeholder="请输入添加内容"  onChange={(e)=>{setInputItem(e)}}  />
            <Button style={{margin:"20px 0"}} onClick={()=>{onIncreaseClick(itemValue)}}>添加</Button>
            <div>{httpdata&&httpdata.arr.map((item,index)=> { return <p key={index}>{item.conent_text}</p> })}</div>
        </div>
    )
}

export default connect((state)=>{
    return {
        httpdata:state.httpdata
    }
}, (dispatch)=>{
    return {
        onIncreaseClick:(data) => dispatch(addItemValue(data)),
        getHttpData:(data)=>  dispatch(httpGetData(data)) 
    }
})(InputComponent)