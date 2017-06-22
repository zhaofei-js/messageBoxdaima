import React from 'react';
import {hashHistory} from 'react-router';
export default class UserAdd extends React.Component{
    handleSubmit(event){
      event.preventDefault();
      //先获取输入框中的用户名
      var name = this.refs.name.value;
      //从缓存中获得用户列表
      let users = getUsers();
      var user = {name};
      //如果有老数据，则最大ID加1，如果没有老数据则ID为1
      user.id = users.length>0?users[users.length-1].id+1:1;
      users.push(user);
      setUsers(users);
      //用push实现路径的跳转
      hashHistory.push('/user/list');
    }
    render(){
      console.log(hashHistory);
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input ref="name" type="text" className="form-control" id="name"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </form>
      )
    }
}
