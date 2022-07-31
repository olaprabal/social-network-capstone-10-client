import { getHttp, postHttp, validateUser } from '../helpers/http'
import { BaseUrl, BaseUrlInner } from './configure'

export const getAuthState = () => {
  return {
    userToken: localStorage.getItem('userToken'),
    username: localStorage.getItem('username'),
    isLoggedIn: localStorage.getItem('isLoggedIn')
  }
}

export const register = (data) => {
  return postHttp(BaseUrl+BaseUrlInner+'/registration',data)
  .then((Response) => Response)
}

export const login = (data) => {
  return postHttp(BaseUrl+BaseUrlInner+'/login',data)
  .then((Response) => {
    console.log(Response)
    if(Response.statusCode >= 200 && Response.statusCode < 300){
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('userToken', Response.sessionId)
      localStorage.setItem('username', Response.emailId)
    }
    return Response
  })
}

export const logout = () => {
  console.log(localStorage.getItem('username'))
  return getHttp(BaseUrl+BaseUrlInner+'/logout?',{email:localStorage.getItem('username')})
  .then((Response) => {
    console.log(Response)
    if(Response.statusCode >= 200 && Response.statusCode < 300){
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('userToken')
      localStorage.removeItem('username')
    }
    return Response
  })
}
