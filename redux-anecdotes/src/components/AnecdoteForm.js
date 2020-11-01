import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={props.createAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit' >create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAnecdote: async event => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      dispatch(createAnecdote(content))
    }
  }
}


const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm