import React, { Component } from 'react'
import { register } from '../services/authentication'
import { Link } from "react-router-dom";
import TopBar from './layout/TopBar';
class Register extends Component {
  // declaring initial state
  constructor(props){
    super(props)
    this.state = {
      message:'',
      registerFailed:false,
      showMessage:false,
      fields:{
        fullName:'',
        gender:'',
        email:'',
        password:'',
        city:'',
        dateOfBirth:'',
        mobileNo:'',
      }
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onInputChange(e) {
    /*
    we can get the name and value like this: e.target.name, e.target.value
    but we can also destructure  name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    // const { name, value } = e.target
    const fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ showMessage:false, fields })
    // [variablename] to use a variable name as a key in an object
    // name refers to the name attribute of the input elements
    // this.setState({ [name]: value })
  }
  handleSubmit(e) {
    /* 
     e.preventDefault()
      stops the default behavior of form element
     specifically refreshing of page
     */
    e.preventDefault()

    /*
     the is the place where we connect backend api 
     to send the data to the database
     */

    console.log(this.state.fields)
    register(this.state.fields).then((Response) => this.handleResponse(Response))
  }

  handleResponse(Response) {
    if(Response.statusCode >= 200 && Response.statusCode < 300){
      this.setState({
        showMessage: true,
        registerFailed: false,
        message: Response.message,
      })
    } else {
      this.setState({
        showMessage: true,
        registerFailed: true,
        message: Response.message,
      })
    }
  }

  render() {
    // accessing the state value by destrutcturing the state
    const { name, gender, email, password, city, date, mobile } = this.state
    return (
      <div>
        <TopBar/>
        <section class="section bg-gray">
          <div class='container'>
            <div class="row align-items-center justify-content-center mt-5">
              <div class="col-md-6 ">
                <div className="card mb-5">
                <div class="px-lg-4 card-header">
                    <div class="card-heading text-primary">Sign Up</div>
                  </div>
                  <div class="p-lg-5 card-body">
                  
                  <form onSubmit={this.handleSubmit}>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        value={name}
                        onChange={this.onInputChange}
                      /><label class="form-label" for="fullName" >Full Name</label>
                    </div>
                    <div class='form-floating mb-1'>
                      <select  class="form-control" name="gender"  placeholder='gender' onChange={this.onInputChange}>
                        <option value="none" selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                      </select>
                      {/* <input
                type='text'
                name='gender'
                placeholder='Gender'
                value={gender}
                onChange={this.handleChange}
              /> */}
                    </div >
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={this.onInputChange}
                      /><label class="form-label" for="email">Email</label>
                    </div>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={this.onInputChange}
                      /><label class="form-label" for="password">Password</label>
                    </div>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='text'
                        name='city'
                        placeholder='City'
                        value={city}
                        onChange={this.onInputChange}
                      /><label class="form-label" for="city">City</label>
                    </div>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='date'
                        name='dateOfBirth'
                        placeholder='Date'
                        value={date}
                        onChange={this.onInputChange}
                      /><label class="form-label" for="dateOfBirth">DateOfBirth</label>
                    </div>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='number'
                        name='mobileNo'
                        placeholder='Phone Number'
                        value={mobile}
                        onChange={this.onInputChange}
                      /><label class="form-label" for="mobileNo">Phone Number</label>
                    </div>
                    <br/>
                    {this.state.showMessage && <h5>{this.state.message}</h5>}
                    <button class='btn btn-primary'>Submit</button>
                  </form>
                  <br/>
                    <div class="px-lg-5 py-lg-4 card-footer"><div class="text-sm text-muted">Already have an account? <Link to="/login">Login here</Link></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div>
    )
  }
}

export default Register