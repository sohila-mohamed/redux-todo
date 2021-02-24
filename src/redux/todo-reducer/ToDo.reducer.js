import ToDoTypes from './ToDo.Types';


const todoReducer = (state =[], action) => {
  
  let todos = null;

  if(action.type === ToDoTypes.ADD_TODO){
    todos = [...state , {text:action.text, id: Math.random()}]
    return todos

  } else if (action.type === ToDoTypes.DEL_TODO) {
    todos = state.filter(todo => todo.id !== action.id)
    return todos

  } else if (action.type === ToDoTypes.CLEAR_TODOS) {
    todos = []
    return todos

  } else {
    return state
  }
};
  
export default todoReducer;
