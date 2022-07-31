import React from 'react'  
import { getAllPosts } from '../../services/postService'
import TopBar from '../layout/TopBar'
import Post from './post'
class PostList extends React.Component { 
  constructor (props) {
    super(props)
    this.state = {
      show:false,
      data:[],
      Response:{},
    }
  }

  componentDidMount() {
    if(localStorage.getItem("isLoggedIn")==="true"){
      getAllPosts().then((Response) => this.handleResponse(Response))
    }
  }

  handleResponse(Response) {
    if(Response.statusCode >= 200 && Response.statusCode < 300){
      this.setState({
        show: true,
        Response: Response,
        data: Response.data,
      })
    } else {
      this.setState({
        show: false,
        Response: Response,
      })
    }
    console.log(Response)
  }

  render() {  
    return(
      <div>
        <TopBar/>
        {
          this.state.show ? (
            this.state.data.map((postObject) => (<Post postObject={postObject} />))
          ):(<></>)
        }
        {/* <PostDetails/> */}
      </div>
    )
  }  
}  
export default PostList  