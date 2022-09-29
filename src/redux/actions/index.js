export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime().toString(),
      title,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

export const deleteAll = () => {
  return {
    type: 'DELETE_ALL',
  };
};

export const updateTodo = (updateInput, ind) => {
  return {
    type: 'UPDATE_TODO',
    payload: {
        updateInput,
        ind,
    }
  };
};
