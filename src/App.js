import React , {Component} from 'react'
import TodoInput from './components/TodoInput.jsx';

class App extends Component {

render(){
  return (
    <div className="App m-5">
      <TodoInput />
    </div>
  );
}
}

export default App;
