import React from 'react'
import SignOutButton from './SignOutButton'
import { Link } from 'react-router-dom'
import {Component} from 'react';

class TopBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      message:'',
      showMessage:false,
      fields: {
        id:'',
        body:'',
        email:'',
        userId:'',
        totalLikes:0,
        totalComments: 0,
            "whoLiked": [
                "cc2dba9d-29d5-4dbd-b860-cd5b63f27ecf"
            ],
            "images": [],
            "createdAt": "0"
      }
    }
    this.checkLogin = this.checkLogin.bind(this)
  }

  checkLogin = () => {
    console.log("check login in top bar")
      if(localStorage.getItem("isLoggedIn")==="true"){
        console.log("check login true in top bar")
        return true;
      }else{
        return false;
      }
  }

  componentDidMount() {

  }

  render(){
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Capstone Social</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul class="navbar-nav ml-auto">
                                { this.checkLogin() ?
                                <>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/profile">My Profile</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/createpost">Create Post</Link>
                                </li> 
                                <li class="nav-item">
                                  <SignOutButton/>
                                </li> 
                                </>:
                                
                                <li class="nav-item">
                                <Link class='nav-link' to='/login'>Login</Link>  
                            </li>}
                            </ul>
                        </div>
                    </div>
                </nav>   

      </>
    )
  }
  
}


export default TopBar
