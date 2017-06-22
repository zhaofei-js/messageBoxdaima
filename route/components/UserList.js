import React from 'react';
import {Link} from 'react-router';
/**
 * constructor,render 和生命周期函数都会自动绑定this.不需要我们手工绑定
 */
export default class UserList extends React.Component{
  constructor(props){
      super(props);
      //初始化一个状态对象
      this.state = {users:[]};
  }
  componentWillMount(){
    let users = getUsers();
    this.setState({users});
  }
  render(){
    return (
      <ul className="list-group">
        {
          this.state.users.map((user,index)=>{
            return (
              <li key={index} className="list-group-item">
                <Link to={"/user/detail/"+user.id}>{user.name}</Link>
              </li>
            )
          })
        }

      </ul>
    )
  }
}
