import React from 'react'
import { login } from '../services/authentication'
import { Link } from 'react-router-dom'
import TopBar from './layout/TopBar'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message:'',
      showMessage:false,
      loginFailed: false,
      fields: {
        email: '',
        password: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onInputChange (e) {
    const fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ showMessage:false, fields })
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.fields)
    if(localStorage.getItem('isLoggedIn')===true){
      this.setState({
        showMessage: true,
        loginFailed: false,
        message: 'Already logged in as '+localStorage.getItem('username').toString(),
      })
    } else {
      console.log('login trigger')
      this.setState({
        showMessage: true,
        message: 'loading.. ',
      })
      login(this.state.fields)
      .then((Response) => this.handleResponse(Response))
    }
  }

  handleResponse(Response) {
    if(Response.statusCode >= 200 && Response.statusCode < 300){
      this.setState({
        showMessage: true,
        loginFailed: false,
        message: Response.message,
      })
    } else {
      this.setState({
        showMessage: true,
        loginFailed: true,
        message: Response.message,
      })
    }
    console.log(Response)
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <TopBar/>
        <div class="container ">
          <div class="row align-items-center justify-content-center mt-5">
            <div class="col-md-6 ">
              <div className="card">
                <div class="card-header text-primary">Sign In</div>
                <div className="p-lg-5 card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div class='form-floating mb-3 '>
                      <input
                        class="form-control"
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={this.onInputChange}
                      /><label class="form-label" for='email'>Email</label>
                    </div>
                    <div class='form-floating mb-3 '>
                      <input
                        class="form-control"
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={this.onInputChange}
                      /><label class="form-label" for='password'>Password</label>
                    </div>
                    <div div class='form-floating mb-3 '>
                      {this.state.showMessage && <h5>{this.state.message}</h5>}
                      <button class='btn btn-primary'>Submit</button>
                    </div>
                  </form>
                  <br />
                  <div class="px-lg-5 py-lg-4 card-footer"><div class="text-sm text-muted">Don't have an account? <Link to="/register">Register here</Link></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Login
