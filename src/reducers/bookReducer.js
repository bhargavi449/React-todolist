export const bookReducer = (state, action) => {
  //action.type means that should be add a book or remove a book
  switch (action.type) {
    case "ADD_BOOk":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: action.book.id,
        },
      ];

    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
