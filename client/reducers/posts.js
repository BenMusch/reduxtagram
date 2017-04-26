const posts = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT_LIKES':
        const i = action.index
        const postToUpdate = state[i]
        return [
          ...state.slice(0, i),
          {...postToUpdate, likes: postToUpdate.likes + 1},
          ...state.slice(i + 1)
        ]
    default:
      return state
  }
}

export default posts
