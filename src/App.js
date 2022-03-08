import React ,{useState,Fragment} from 'react';

import Adduser from './components/UI/Button/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {

  const [userList,setUsersList] = useState();

  const addUserHandler= (uName,uAge) =>{
    setUsersList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
    });
  }
  return (
    <Fragment>
      <Adduser onAddUser={addUserHandler}/>
      <UsersList users={[]}/>
    </Fragment>
  );
}

export default App;
