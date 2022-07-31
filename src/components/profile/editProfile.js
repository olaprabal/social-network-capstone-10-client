import React from 'react';
import {getDetails, editDetails} from '../../services/profileService'
import { useNavigate } from 'react-router-dom';
import TopBar from '../layout/TopBar';


class EditProfile extends React.Component {

constructor(props){
    super(props)
    this.state = {
      fields:{
        fullName: "",
        email: "",
        mobileNumber: "",
        city: "",
        dateOfBirth: "",
        gender: ""
    }
    }
  this.onInputChange = this.onInputChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}



handleResponse(Response) {
  if(Response.statusCode >= 200 && Response.statusCode < 300){
    this.setState({
      showMessage: true,
      loginFailed: false,
      message: Response.message,
    })
  } else {
    
    
  }
  
}

onInputChange(e) {
   
    const fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ showMessage:false, fields })
    
  }

handleSubmit(e){
    e.preventDefault();

    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
    this.state.fields.email = localStorage.getItem('username');
    editDetails(this.state.fields).then((Response) => this.handleResponse(Response))

}

render(){
    // accessing the state value by destrutcturing the state
    const { name, emailID, mobile, gender, city, dob,} = this.state
    return (
      <div>
        <TopBar/>
        <section class="section bg-gray">
          <div class='container'>
            <div class="row align-items-center justify-content-center mt-5">
              <div class="col-md-6 ">
                <div className="card mb-5">
                <div class="px-lg-4 card-header">
                    <div class="card-heading text-primary">Edit Details</div>
                  </div>
                  <div class="p-lg-5 card-body">
                  
                  <form onSubmit={this.handleSubmit}>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        onChange={this.onInputChange}
                        required
                      /><label class="form-label" for="fullName" >Full Name</label>
                      
                    </div>
                    <div class='form-floating mb-1'>
                      <select  class="form-control" name="gender"  placeholder='gender' required onChange={this.onInputChange}>
                        <option value="none" selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
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
                        type='text'
                        name='city'
                        placeholder='City'
                        required
                        onChange={this.onInputChange}
                      /><label class="form-label" for="city">City</label>
                    </div>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='text'
                        name='dateOfBirth'
                        placeholder='Date of Birth'
                        required
                        onChange={this.onInputChange}
                      /><label class="form-label" for="dateOfBirth">DateOfBirth</label>
                    </div>
                    <div class='form-floating mb-1'>
                      <input class="form-control"
                        type='text'
                        name='mobileNumber'
                        placeholder='Phone Number'
                        required
                        onChange={this.onInputChange}
                      /><label class="form-label" for="mobileNumber">Phone Number</label>
                    </div>
                    <br/>
                    {this.state.showMessage && <h5>{this.state.message}</h5>}
                    <button class='btn btn-primary' type="submit">Submit</button>
                  </form>
                  <br/>
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
export default EditProfile