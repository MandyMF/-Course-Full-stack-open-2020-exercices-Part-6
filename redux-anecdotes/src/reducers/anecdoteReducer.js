import anecdoteService from '../services/anecdotes'

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

export const initAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type:'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
}

export default anecdoteReducer