import React from 'react';
import Relay from 'react-relay';
import UserList from './UserList';

export default class App extends React.Component {

  render() {
    return (
      <Relay.RootContainer Component={ UserList.Container } route={ UserList.queries }
        onReadyStateChange={({ error }) => { if (error) console.error(error) }} />
    )
  }

}
