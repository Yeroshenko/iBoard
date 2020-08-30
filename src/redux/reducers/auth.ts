import { authApi } from 'api'
import { ThunkAction } from 'redux-thunk'
import { AppState } from 'redux/store'

const SET_LOADING = 'AUTH:SET_LOADING'
const SET_USER = 'AUTH:SET_USER'
const SET_USER_INFO = 'AUTH:SET_USER_INFO'
const SET_ERROR = 'AUTH:SET_ERROR'

const initialState = {
  isLoading: false,
  hasError: false,
  user: null as User | null
}

export type User = {
  email: string
  displayName: string
  id: string
  photoURL: string
}

type InitialStateType = typeof initialState

type Actions = SetLoadingA | SetErrorA | SetUserA | SetUserInfoA

export const authReducer = (state = initialState, action: Actions): InitialStateType => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case SET_ERROR:
      return {
        ...state,
        hasError: action.hasError
      }

    case SET_USER:
      return {
        ...state,
        user: action.user
      }

    case SET_USER_INFO:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.userInfo
        }
      }

    default:
      return state
  }
}

// Action creators types
type SetLoadingA = {
  type: typeof SET_LOADING
  isLoading: boolean
}

type SetErrorA = {
  type: typeof SET_ERROR
  hasError: boolean
}

type SetUserA = {
  type: typeof SET_USER
  user: User
}

type SetUserInfoA = {
  type: typeof SET_USER_INFO
  userInfo: User
}

// Action creators
export const setLoading = (isLoading: boolean): SetLoadingA => ({ type: SET_LOADING, isLoading })
export const setError = (hasError: boolean): SetErrorA => ({ type: SET_ERROR, hasError })
export const setUser = (user: User): SetUserA => ({ type: SET_USER, user })
export const setUserInfo = (userInfo: User): SetUserInfoA => ({ type: SET_USER_INFO, userInfo })

// Thank creators
type Thunk = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const login = (email: string, password: string): Thunk => async dispatch => {
  dispatch(setError(false))
  dispatch(setLoading(true))

  const user = await authApi.login(email, password)

  console.log(user)
  // dispatch(setUser(user))

  dispatch(setLoading(false))
}

export const register = (email: string, password: string): Thunk => async dispatch => {
  dispatch(setError(false))
  dispatch(setLoading(true))

  const res = await authApi.register(email, password)

  console.log(res)
  // if (res.code) dispatch(setError(true))

  dispatch(setLoading(false))
}
