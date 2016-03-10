import React from 'react';
import Relay from 'react-relay';

class UserList extends React.Component {

  render() {
    let users = this.props.viewer.users;
    return (
      <div>
        { users.edges.map( user => {
          return (
            <p key={ user.node.id }>{ user.node.name }</p>
          )
        })}
      </div>
    )
  }
}

exports.Container = Relay.createContainer(UserList, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        users(first: 5) {
          edges {
            node { id, name }
          }
        }
      }
    `
  }
})

exports.queries = {
  name: 'UserListQueries',
  params: {},
  queries: {
    viewer: () => Relay.QL`query { viewer }`
  }
}
