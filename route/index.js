import React from 'react';
import ReactDOM from 'react-dom';
//当一个组件默认导出的时候，导入变量名是可以随便起的
//如果引入的是一个文件夹的话，会自动寻找里面的index.js文件进行加载
import {App,Home,User,Profile} from './components';
require('bootstrap/dist/css/bootstrap.css');
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router';
//把getUsers方法赋给window,就变成了全局变量
window.getUsers = function(){
  let users = localStorage.getItem('users');
  return users?JSON.parse(users):[];
}
window.setUsers = function(users){
  localStorage.setItem('users',JSON.stringify(users));
}
/**
 * 路由 就是不同的路径渲染不同的组件
 * Router 路由容器
 * Route 代表一个路由规则
 * Link 用来创建导航的
 * hashHistory 用来管理历史的
 */
ReactDOM.render(
  // /user/list ->  App>User>UserList
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="user" component={User}>
        <Route path="list" component={User.UserList}/>
        <Route path="add" component={User.UserAdd}/>
        <Route path="detail/:id" component={User.UserDetail}/>
      </Route>
      <Route path="profile" component={Profile}/>
    </Route>
  </Router>
  ,document.querySelector('#app'));
