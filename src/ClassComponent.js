import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { component: "class" };
  }
  render() {
    return (
      <h2>This page is created by using {this.state.component} component!</h2>
    );
  }
}

export default App;
