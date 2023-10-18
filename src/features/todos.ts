import { Todo } from '../types/Todo';

type SetTodosAction = { type: 'todos/SET', payload: Todo[] };

type Action = SetTodosAction;

const setTodos = (todos: Todo[]): SetTodosAction => ({
  type: 'todos/SET', payload: todos,
});

export const actions = { loadTodos: setTodos };

const todosReducer = (todos: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case 'todos/SET':
      return [...todos, ...action.payload];

    default:
      return todos;
  }
};

export default todosReducer;