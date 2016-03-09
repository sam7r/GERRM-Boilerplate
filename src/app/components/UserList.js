import React from 'react';
import API from '../../../data/api';

export default class UserList extends React.Component {

  componentDidMount() {
    this.fetchUserList();
  }

  fetchUserList() {
    return API.fetch(this.userQuery());
  }

  userQuery() {
    return ({ "query" : "{ users { name } }" })
  }

  render() {
    return(
      <div></div>
    )
  }

}
