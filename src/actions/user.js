import axios from 'axios';
import {
  SET_USER_DATA,
  SET_USER_DATA_SUCCESS,
  SET_USER_DATA_FAILURE,
  COLLECT_USER,
  COLLECT_USER_SUCCESS,
  COLLECT_USER_FAILURE
} from './ActionTypes';

export function addUserData(username, age) {  
  return (dispatch) => {
    dispatch(setUserData());

    return axios.post('/api/user/setdata', {username, age})
    .then((response) => {
      const data = response.data;
      dispatch(setUserDataSuccess(data));
    }).catch((error) => {
      dispatch(setUserDataFailure());
    });
  };    
}

export function collectUserRequest(username, age, dateOfBirth, gender) {
  return (dispatch) => {
    dispatch(collectUser());

	 //API Request
  	return axios.post('/api/user/collect', {username, age, dateOfBirth, gender})
  	.then((response) => {
  		const data = response.data;
  		dispatch(collectUserSuccess(data));
  	}).catch((error) => {
  		dispatch(collectUserFailure());
  	});
  }
}

export function setUserData() {
  return {
    type: SET_USER_DATA
  };
}

export function setUserDataSuccess(data){
  return {
    type: SET_USER_DATA_SUCCESS,
    data
  };
}

export function setUserDataFailure() {
  return {
    type: SET_USER_DATA_FAILURE
  };
}

export function collectUser() {
  return {
	  type: COLLECT_USER
  };
}

export function collectUserSuccess(data) {	
  return {
	  type: COLLECT_USER_SUCCESS,
	  data
  };	
}

export function collectUserFailure() {
  return {
	  type: COLLECT_USER_FAILURE
  };
}