import React from "react";
import {connect} from "react-redux";
// import {Link} from "react-router-dom";

function Profiles(props) {
  const userDivs = props.users.map((user,i) => {
    return (
      <div key={i}>
        {user.firstName} - {user.lastName}
        <link rel="/profile/ + {user.id}"> View </link>
      </div>);
  });
  return (
    <div>{userDivs}</div>
  );
}

export default connect(function (state) {
  return {users: state.users};
})(Profiles);
