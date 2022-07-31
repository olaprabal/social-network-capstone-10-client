import { getHttp, postHttp} from '../helpers/http'
import { BaseUrl, BaseUrlInner } from './configure'

 export const getDetails = () => {
    return getHttp(BaseUrl+BaseUrlInner+'/get-user-details?email='+ localStorage.getItem('username'))
    .then((Response) => {
      console.log(Response)
      return Response;
    })
  }

  export const editDetails = (data) => {
    console.log(data);
    return postHttp(BaseUrl+BaseUrlInner+'/update-user-details',data)
    .then((Response) => {
      //console.log(Response)
      return Response;
    })
  }
  
