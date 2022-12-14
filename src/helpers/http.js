import { getAuthState } from '../services/authentication'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(`HTTP Error ${response.statusCode}`)
    error.status = response.message
    error.response = response
    console.log(response)
    throw error
  }
}

export const validateUser = (username, password) => {
  return fetch(`/user_token`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    }
  }).then(response => response.json())
}

export const getHttp = (path, params, token = getAuthState().userToken) => {
  const a = path + (new URLSearchParams(params)).toString()
  console.log(a)
  return fetch( a, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(response => response.json())
}

export const deleteHttp = (path, token = getAuthState().userToken) => {
  return fetch(path, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(response => response.json())
}

export const postHttp = (path, data, token = getAuthState().userToken) => {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}

export const patchHttp = (path, data, token = getAuthState().userToken) => {
  return fetch(path, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}

