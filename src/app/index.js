import React from 'react';
import ReactDOM from 'react-dom'

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      num: 1
    }
  }

  clickToChange() {
    this.setState({
      num: this.state.num + 2
    })
  }

  render() {
    return (
      <div>
        This is a test!
        <button onClick={this.clickToChange.bind(this)}>Add to number</button>
        <SubComponent data={this.state.num}/>
        <SubComponent data={this.state.num * 2}/>

      </div>
    )
  }

}

class SubComponent extends React.Component {
  render() {
    return(
      <div>
        Testing {this.props.data * 2}
      </div>
    );
  }
}

const targetNode = document.getElementById('app')
ReactDOM.render(<Main />, targetNode);
