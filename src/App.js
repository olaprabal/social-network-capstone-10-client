import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import PostList from "./components/post/postList";
import Register from "./components/Register";
import Login from './components/Login';
import EditProfile from './components/profile/editProfile';
import CreatePost from './components/post/CreatePost';


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact strict path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />} ></Route>
          <Route exact path="/" element={<PostList />}></Route>
          <Route exact path="/profile" element={<Profile />} ></Route>
          <Route exact path="/editprofile" element={<EditProfile />} ></Route>
          <Route exact path="/createpost" element={<CreatePost />} ></Route>
          <Route exact path="*" element={<PostList />} ></Route>  
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App