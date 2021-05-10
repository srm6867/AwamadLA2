import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Covid-19 Vaccine Registration</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
        <p>Enter Adhar no:</p>
        <input
          type="number"
        />
        <p>Enter Mobile no:</p>
        <input
          type="number"
        />
        <p>Enter PHC City name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

export default App;
