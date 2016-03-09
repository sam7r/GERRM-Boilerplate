import React from 'react';
import Heading from '../components/Heading';
import UserList from '../components/UserList';

export default class Home extends React.Component {

  render() {
    return (
      <article>
        <Heading title={"Heading"} />
        <p>Article body text</p>
        <UserList />
      </article>
    )
  }

}
