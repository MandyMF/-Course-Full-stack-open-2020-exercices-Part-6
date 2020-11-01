//const getId = () => (100000 * Math.random()).toFixed(0)

/*const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}*/

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type)
  {
  case 'VOTE':
  {
    const anecdoteToChange = state.find(anecdote => anecdote.id === action.data.id)
    const newAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }

    return state.map(anecdote => {
      return anecdote.id !== newAnecdote.id ? anecdote : newAnecdote
    })
  }
  case 'NEW_ANECDOTE':
  {
    return [...state, action.data]
  }

  case 'INIT_ANECDOTES':
  {
    return action.data
  }

  default:
    return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const initAnecdote = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  }
}

export default anecdoteReducer