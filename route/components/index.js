/*import App from './App';
export App;*/
//从./App文件中得到默认导出对象并再导出
/*export App from './App';
export Home from './Home';
export User from './User';
export Profile from './Profile';*/

import App from './App';
import Home from './Home';
import User from './User';
import Profile from './Profile';
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
User.UserAdd = UserAdd;
User.UserList = UserList;
User.UserDetail = UserDetail;
export {App,Home,User,Profile}

//module.exports = {App,Home,User,Profile}
