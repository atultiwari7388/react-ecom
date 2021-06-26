import * as types from './actionTypes'
import { auth } from '../utils/firebase'

const registerStart = () => ({
  type: types.REGISTER_START,
})

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
})

const registerError = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
})

export const registerInitiate = (email, pass) => {
  return function (dispatch) {
    dispatch(registerStart())
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(({ user }) => {
        dispatch(registerSuccess(user))
      })
      .cath((error) => dispatch(registerError(error.message)))
  }
}
