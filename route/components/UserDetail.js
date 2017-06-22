import React from 'react';
import {Link,hashHistory} from 'react-router';
//1 可枚举的 可修改的 可配置的
export default class UserDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {user:{},editing:false};
  }
  componentWillMount(){
    var id = this.props.params.id;
    let users = getUsers();
    var user = users.find((user)=>user.id == id);
    this.setState({user});
  }
  deleteUser(){
    let users = getUsers();
    let user = this.state.user;
    users = users.filter(item=>user.id != item.id);
    setUsers(users);
    hashHistory.push('/user/list');
  }
  editUser(){
    this.setState({editing:true});
  }
  saveUser(){
     var name = this.refs.name.value;
     var user = this.state.user;
     user.name = name;
     var users = getUsers();
     users = users.map((item)=>{
       if(item.id == user.id)
          return user;
       else
          return item;
     });
     setUsers(users);
    this.setState({user,editing:false});
  }
  cancelUser(){
    this.setState({editing:false});
  }
  render(){
    return (
      <div className="panel panel-default">
         <div className="panel-heading">
           <button onClick={()=>hashHistory.goBack()} className="btn btn-primary">返回</button>
         </div>
          <div className="panel-body">
            ID:{this.state.user.id}  <br/>
            姓名:
            {this.state.editing?null:this.state.user.name}
            {this.state.editing?<input className="form-control" defaultValue={this.state.user.name} ref="name"/>:null}
          </div>
          <div className="panel-footer">
            {this.state.editing?null:<button onClick={this.editUser.bind(this)} className="btn btn-warning">修改</button>}
            {this.state.editing?<span><button onClick={this.saveUser.bind(this)} className="btn btn-primary">确定</button><button onClick={this.cancelUser.bind(this)} className="btn btn-success">取消</button></span>:null}

            {this.state.editing?null:<button onClick={this.deleteUser.bind(this)} className="btn btn-danger">删除</button>}

          </div>
      </div>
    )
  }
}
