import { getHttp, postHttp} from '../helpers/http'
import { BaseUrl, BaseUrlInner } from './configure'

export const createPost = (data) => {
  console.log(data);
  return postHttp(BaseUrl+'/create-post',data)
  .then((Response) => {
    return Response;
  })
}

 export const getAllPosts = () => {
    return getHttp(BaseUrl+'/get-all-posts')
    .then((Response) => {
      console.log(Response)
      return Response;
    })
}

export const getAllComments = (data) => {
  return postHttp(BaseUrl+'/getAllcomments',data)
  .then((Response) => {
    return Response;
  })
}

export const postLikePost = (postId,likingUserId) => {
  return postHttp(BaseUrl+'/like-post',{postId: postId, likingUserId: likingUserId})
  .then((Response) =>{
    return Response;
  })
}