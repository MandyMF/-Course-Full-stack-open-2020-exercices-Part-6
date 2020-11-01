import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from  '../reducers/notificationReducer'

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

const AnecdoteList = ( props ) => {
  /*const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes
    .filter(anecdote => anecdote.content.toUpperCase().includes(filter.toUpperCase()))
    .sort((anecdote1, anecdote2) => {
      return anecdote2.votes - anecdote1.votes
    })
  )*/
  //const dispatch = useDispatch()

  return (
    <div>
      {props.anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => props.voteAnecdote(anecdote)}/>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
      .filter(anecdote => anecdote.content.toUpperCase().includes(state.filter.toUpperCase()))
      .sort((anecdote1, anecdote2) => {
        return anecdote2.votes - anecdote1.votes
      })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    voteAnecdote: anecdote => {
      dispatch(voteAnecdote(anecdote))
      dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
    }
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
