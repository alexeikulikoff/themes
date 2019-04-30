
const cmdHandle = {
   'ADD_TODO' : (action) => {
       return ({
          id : action.id,
          text : action.text,
          completed : false 
       })
   } 
}

export const btnReducer = (state , action) => {
    
    try{
        return  cmdHandle[action.type](action);
    }catch(TypeError ){
        return { id :'1', text : '', completed : false };
    }

/*
  switch (action.type) {
    case 'ADD_TODO':
      return(
        {
          id : action.id,
          text : action.text,
          completed : false
        })
  /*    
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
   
    default:
      return (
        {
          id :'1',
          text : '',
          completed : false
        })
  }
  */
}

export default btnReducer;

