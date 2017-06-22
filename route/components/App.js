import React from 'react';
import {Link} from 'react-router';
let active = {color:'red'};
export default class App extends React.Component{
  render(){
     return (
       <div className="container">
         <div className="row">
           <div className="col-md-12">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                      <li><Link activeStyle={active}  to="/home">首页</Link></li>
                      <li><Link  activeStyle={active}  to="/user">用户管理</Link></li>
                      <li><Link   activeStyle={active} to="/profile">个人设置</Link></li>
                    </ul>
                </div>
              </nav>
           </div>
         </div>
         <div className="row">
           <div className="col-md-12">
             {this.props.children}
           </div>
         </div>
       </div>
     )
  }
}
