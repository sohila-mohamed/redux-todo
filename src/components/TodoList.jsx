import React , {Component} from 'react'
import {connect} from 'react-redux'

import { del_todo} from '../redux/todo-reducer/ToDo.actions';

class TodoList extends Component {

  render() {
    let { todos } = this.props;
    return (
       <>
       <ul className="list-group" style={{width:"50%", margin:"auto"}}>
        {
          todos.map(todo => {
            return (
              <li key={todo.id} className="list-group-item">
                <div>{todo.text}</div>
                <button className="remove btn btn-danger m-2" onClick={() => this.props.del_todo(todo.id)}>x</button>
              </li>
            )
          })
        }
       </ul>
       </>
    );
  }
}

export default connect(state => {
  return {
    todos: state
  }
},
{del_todo}
)(TodoList);
