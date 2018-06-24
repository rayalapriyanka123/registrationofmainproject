import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "./styles.css";

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div>
          <Form
            updateFormStatus={this.updateFormStatus}
            updateFormState={this.updateFormState}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
