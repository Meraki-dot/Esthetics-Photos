import React from 'react';
import Navbar from '../components/Navbar';
import UserCollection from '../components/UserCollection';


const UserPage = (props) => {

  return (
    <div className="container">
      <Navbar type="user_page" />
      <UserCollection props={props} />
    </div>
  );
}

export default UserPage;