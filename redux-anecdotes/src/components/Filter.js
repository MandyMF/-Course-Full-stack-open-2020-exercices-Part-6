import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={props.filterChangeHandler} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterChangeHandler: event => {
      dispatch(setFilter(event.target.value))
    }
  }
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter