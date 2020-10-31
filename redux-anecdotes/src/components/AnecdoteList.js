import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from  '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
          has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes
    .filter(anecdote => anecdote.content.toUpperCase().includes(filter.toUpperCase()))
    .sort((anecdote1, anecdote2) => {
      return anecdote2.votes - anecdote1.votes
    })
  )
  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(voteAnecdote(id))
    dispatch(setNotification(`you voted '${content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)

  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => vote(anecdote.id, anecdote.content)}/>
      )}
    </div>
  )
}

export default AnecdoteList
