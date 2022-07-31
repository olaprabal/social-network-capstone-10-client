import React from 'react'  
import { getAllComments } from '../../services/postService'


class Commentslist extends React.Component { 
  constructor (props) {
    console.log(props.postId)
    super(props)
    this.state = {
        fields:{
        postId:props.postId,
        },
        Response:{},
        data:[],
        show:false,
    }
  }

  componentDidMount() {
    getAllComments()
    .then((Response) => this.handleResponse(Response))
  }

  handleResponse(Response) {
    if(Response.statusCode >= 200 && Response.statusCode < 300){
      this.setState({
        show:true,
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
        {
          this.state.show ? (
            this.state.data.map((comment) => (<p>{comment.body}</p>))
          ):(<p>"unable to fetch"</p>)
        }
      </div>
    )
  }  
}  
export default Commentslist  