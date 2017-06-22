import React from 'react';
import {Link} from 'react-router';
export default class User extends React.Component{
  render(){
    let active = {color:'red'};
     return (
       <div className="row">
         <div className="col-md-4">
           <ul className="nav nav-pills nav-stacked">
             <li><Link activeStyle={active} to="/user/list">用户列表</Link></li>
             <li><Link activeStyle={active} to="/user/add">新增用户</Link></li>
           </ul>
         </div>
         <div className="col-md-8">
           {this.props.children}
         </div>
       </div>
     )
  }
}
