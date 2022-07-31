import "./post.css"
import React from "react"
import Commentslist from "./commentsList"
import CreateComment from "./CreateComment"
import { postLikePost } from "../../services/postService"

class Post extends React.Component{
    constructor (props) {
        super(props)
        console.log(props.postObject)
        this.state = {
            showComment: false,
            fields: props.postObject,
            comments: {},
        }
        this.handleLikeSubmit = this.handleLikeSubmit.bind(this)
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
        this.handleCommentShow = this.handleCommentShow.bind(this)
    }
    
    handleLikeSubmit(e) {
        postLikePost(this.state.fields.id, this.state.fields.userId)
        .then(() => (window.location.reload()))
    }

    handleCommentShow(e) {
        if (this.state.showComment){
            this.setState({showComment: false })
        }else{
            this.setState({showComment:true})
        }
    }

    handleCommentSubmit(e) {

    }

    render() {
        return(
            <div class="tweet-wrap">
            <div class="tweet-header">
                <img src={this.state.fields.profilePic} alt="" class="avator" />
                <div class="tweet-header-info">
                {this.state.fields.fullName}
                <span>{this.state.fields.email}</span>
                <span>{this.state.fields.createdAt}</span>
                <p>{this.state.fields.body}</p>
                </div>
                
            </div>
            <div class="tweet-img-wrap">
                <img src={this.state.fields.images} alt="" class="tweet-img"/>
                <button class="postButtons" onClick={()=>{this.handleLikeSubmit()}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioZeLtcCfMCL2CPQIE5pc8vC5bDWemlSq4DWMbXWoIHU1O3-EwvsffcB29zelu47HOUM&usqp=CAU"/></button>
                <button class="postButtons" onClick={()=>{this.handleCommentShow()}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlUog_xvWzY5YUR3rsbsC6p8PlSBNRuxp0g&usqp=CAU"/></button>
                {
                    this.state.showComment?(
                        <div className="comments-section">
                            <Commentslist postId={this.state.fields.id}/>
                        </div>
                    ):(<p></p>)
                }
                <CreateComment/>
            <p>{this.state.likeCount}</p>
            </div>
            
            </div>
        )
    }
}

export default Post
            