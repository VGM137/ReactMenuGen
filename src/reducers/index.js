const reducer = (state, action) => {

  switch(action.type){
    case 'GUISADO_TEXT':
      return {
        ...state,
        optionText: action.payload
      }

    case "ADD_DATE":
      return{
        ...state,
        date: action.payload
      }

    case "ADD_OPTION":
      return{
        ...state,
        options: [...state.options, action.payload]
      }

    case "REMOVE_OPTION":
/*       const array = state.options;
      const deleted = array. */
      return{
        ...state,
        options: [...state.options.filter((option) => option != action.payload)]
      }

    default :
    return state;
  }
}

export default reducer;