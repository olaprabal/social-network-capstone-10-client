import React from 'react'
import PropTypes from 'prop-types'
import { logout } from '../../services/authentication'

class SignOutButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ShowButton: false,
    }
  }

  render(){
    return (<button className='button' onClick={() => {
      logout()
      .then((Response) => console.log(Response))
      .then(() => (window.location.reload()))
    }}>Sign out</button>)
  }
}

export default SignOutButton
