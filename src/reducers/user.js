import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  user: {
	status: 'INIT',
	data: null
  }
};

export default function user(state, action) {
  if(typeof state === "undefined")
    state = initialState;

  switch(action.type) {
  	case types.SET_USER_DATA:
  	  return update(state, {
		user: {
		  status: { $set: 'WAITING'}
		}
	  });
  	case types.SET_USER_DATA_SUCCESS:			
	  return update(state, {
		user: {
		  status: { $set: 'SUCCESS'},
		  data: { $set: action.data }		  
		}
	  });
	case types.COLLECT_USER_FAILURE:
	  return update(state, {
		user: {
		  status: { $set: 'FAILURE'}
		}
	  });  
  	case types.COLLECT_USER:
  	  return update(state, {
		user: {
		  status: { $set: 'WAITING'}
		}
	  });
	case types.COLLECT_USER_SUCCESS:			
	  return update(state, {
		user: {
		  status: { $set: 'SUCCESS'},
		  data: { $set: action.data }		  
		}
	  });
	case types.COLLECT_USER_FAILURE:
	  return update(state, {
		user: {
		  status: { $set: 'FAILURE'}
		}
	  });
	default:
	  return state;
  }
}
