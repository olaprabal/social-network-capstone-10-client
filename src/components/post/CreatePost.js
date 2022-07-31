import React from 'react'  
import { createPost } from '../../services/postService';
import TopBar from '../layout/TopBar';

class CreatePost extends React.Component {  
    constructor(){
        super();
        this.state = {
            showMessage: false,
            message: "",
            fields: {
                email: "",
                body: "",
                images: []
            }
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit = (e)=> {
        e.preventDefault();
        this.setState({fields: {
                                email: localStorage.getItem('username'),
                                body: e.target[0].value,
                                images: this.state.fields.images.concat([e.target[1].value])}
        }, () => {
            createPost(this.state.fields).then((Response) => this.handleResponse(Response));
        })
      
      };

    handleResponse(Response) {
        console.log(Response)
        if(Response.statusCode >= 200){
            this.setState({
              showMessage: true,
              message: Response.message,
            })
          } else {
            this.setState({
              showMessage: true,
              message: Response.message,
            })
        }
    }

    render(){
        return(
            <div>
                <TopBar/>
                <div class="container">
                    <div class="row justify-content-center mt-5">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Create Post</h1>
                                    {this.state.showMessage === true?
                                    <div class="alert alert-dark" role="alert">
                                        {this.state.message}
                                    </div>:<></>}
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="mb-3">
                                            <label for="body" class="form-label">Description</label>
                                            <textarea class="form-control" name="body" id="body" rows="2" required></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="images1" class="form-label">Image Url</label>
                                            <input type="text" name="images1" class="form-control" id="images" required/>
                                        </div>
                                    
                                        <button type="submit" class="btn btn-primary">Post</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}  
export default CreatePost;