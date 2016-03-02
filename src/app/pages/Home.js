import React from 'react';
import Heading from '../components/heading';

export default class Home extends React.Component {

  render() {
    return (
      <article>
        <Heading title={"Heading"} />
        <p>Article body text</p>
      </article>
    )
  }

}
