const notificationReducer = (state= null, action) => {
  switch(action.type){
  case 'SET_NOTIFICATION_MESSAGE':
  {
    return action.data
  }
  default:
    return state
  }
}


export const setNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION_MESSAGE',
      data: message
    })
    setTimeout(() => {
      dispatch(
        {
          type: 'SET_NOTIFICATION_MESSAGE',
          data: null
        }
      )
    }, timeout * 1000)
  }
}

export default notificationReducer