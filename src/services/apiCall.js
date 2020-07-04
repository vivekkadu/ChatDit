import Axios from 'axios';
import { AuthbaseUrl } from '../constants/constants';

export function getData(endPoint) {
  return Axios.get(AuthbaseUrl + endPoint)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
}

export function postData(endPoint, data, header) {

  const headers = header ? header :
    {
      'Content-Type': 'application/json',
    };


  console.log("data post", data)
  return Axios.post(AuthbaseUrl + endPoint, data, { headers: headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err.response.data)
      return err
    });
}
