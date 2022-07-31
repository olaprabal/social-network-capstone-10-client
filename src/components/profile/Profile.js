import React from 'react';
import { Link } from 'react-router-dom';
import {getDetails, editDetails} from '../../services/profileService'
import TopBar from '../layout/TopBar';
class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "",
      emailID: "",
      mobile: "",
      city: "",
      dob: "",
      gender: ""
    }
    
  }
  

  componentDidMount() {
    getDetails().then((Response) => this.handleResponse(Response))
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
        name: Response.fullName,
        emailID: Response.email,
        mobile: Response.mobileNumber,
        city: Response.city,
        dob: Response.dateOfBirth,
        gender: Response.gender
      })
    }
    
  }

  render() {
    return (
      <div>
        <TopBar/>
        <section>
          <div class="container rounded bg-white mt-5 mb-5">
            <div class="row r">
              <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">{this.state.name}</span><span class="text-black-50">{this.state.emailID}</span><span> </span></div>
              </div>
              <div class="col-md-5 border-right">
                <div class="p-2 py-4 ">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile</h4>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Name</label><input type="text" class="form-control" placeholder={this.state.name} value={this.state.name} disabled /></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="email" class="form-control" placeholder="Email" value={this.state.emailID} disabled /></div>
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="Mobile" value={this.state.mobile} disabled /></div>
                    <div class="col-md-12"><label class="labels">Gender</label><input type="text" class="form-control" placeholder="Gender" value={this.state.gender} disabled /></div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">City</label><input type="text" class="form-control" placeholder="City" value={this.state.city} disabled /></div>
                    <div class="col-md-6"><label class="labels">Date of Birth</label><input type="text" class="form-control" value={this.state.dob} placeholder="Date of Birth" disabled /></div>
                  </div>
                  <div class="mt-5 text-center">
                    <Link class="btn btn-primary" to="/editprofile">Edit Profile</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Profile