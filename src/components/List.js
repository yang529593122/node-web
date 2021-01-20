import { connect } from 'react-redux'
import {delItem} from "../store/actions-type"
function List (props) {
    const {delItem} = props
    return (
        <div>
            {props.list.map((item,index)=><p key={index}>{item.con} <span style={{ color:'#1890ff',padding:'0 0 0 50px' }} onClick={()=>delItem(item)}>删除</span></p>)} 
        </div>
    )
}
export default connect((state)=>{
    return {
        list:state.list
    }
}, (dispatch)=>{
    return { 
        delItem:(item)=> dispatch(delItem(item)) 
    }
})(List)