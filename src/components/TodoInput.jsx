import React , {Component} from 'react'
import {connect} from 'react-redux'
import { add_todo, clear_todos } from '../redux/todo-reducer/ToDo.actions';
import TodoList from './TodoList';

class TodoInput extends Component {

  state = {
    text: ''
  }

  render (){
    return (
       <>
         <div className="m-5 text-center" >
            <div className="title">
              <h2>TODO'S</h2>
            </div> 

            <input  className="form-control"
                    style={{width:"40%", display:"inline"}}
                    type="text"
                    value={this.state.text}
                    placeholder="..."
                    onChange={(e) => this.setState({text: e.target.value})} 
            />

            <button 
                className="btn btn-primary btn-inline"
                style={{margin: "0 5px 5px"}}
                onClick={() => { this.props.add_todo(this.state.text) 
                this.setState({text: ''})}}>
                add todo
            </button>

            <TodoList />

            <button 
                className="btn btn-danger btn-block"
                style={{width:"50%", margin:"auto"}}
                onClick={() => this.props.clear_todos()}>
                clear todos
            </button>
         </div>
       </>
    )
  }
}

export default connect(state => {
  return {
    todos: state
  }
},
{add_todo, clear_todos}
)(TodoInput);


