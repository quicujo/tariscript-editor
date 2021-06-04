"use strict";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textScript: "Hello worl", script: [], input: [] };
  }

  handleTextScriptChanged(event) {
    this.setState({
      textScript: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <label>Script:</label>
        <textarea
          onChange={this.handleTextScriptChanged}
          value={this.state.textScript}
        />
      </form>
    );
  }
}

alert("hello");

const domContainer = document.querySelector("#editor_container");
ReactDOM.render(Editor, domContainer);
