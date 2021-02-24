import ToDoTypes from './ToDo.Types';

export const add_todo = (text) => ({
    
  type: ToDoTypes.ADD_TODO,
  text,  
    
})

export const del_todo = (id) => ({
    
  type: ToDoTypes.DEL_TODO,
  id

})

export const clear_todos = () => ({
    
  type: ToDoTypes.CLEAR_TODOS,

})

    
