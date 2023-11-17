import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    return (
      <div>
        <h1>count1:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count
        </button>

        <h1>Name : {this.props.name}</h1>
        <h1>Location: Dehradun</h1>
      </div>
    );
  }
}

export default Userclass;
