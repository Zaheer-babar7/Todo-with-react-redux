const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, title } = action.payload;
      return {
        ...state,
        list: [...state.list, { title, id }],
      };
    case 'DELETE_TODO':
      const newList = state.list.filter((e) => e.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case 'UPDATE_TODO':
        const updatedList = state.list.map((todo, index) => {
            if (index === action.payload.ind) {
                return {
                    ...todo,
                    title: action.payload.updateInput
                }    
            } else {
                return {
                    ...todo
                }
            }
        })
      return {
        ...state,
        list: [...updatedList]
      };
    case 'DELETE_ALL':
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
