import React from 'react';
import { connect } from 'react-redux';
import { StepBox2 } from 'components';
import { collectUserRequest } from 'actions/user';
import { browserHistory } from 'react-router';

class Step2 extends React.Component {

  constructor(props) {
	super(props);

    this.handleRequest = this.handleRequest.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleRequest(username, age, dateOfBirth, gender) {
  	return this.props.collectUserRequest(username, age, dateOfBirth, gender).then(
  	  () => {
  	  	if(this.props.userSt.status === "SUCCESS") {
  	  	  const data = this.props.userSt.data;
		      Materialize.toast('Success!', 2000);

		      browserHistory.push('/result');
  	  	} else {
  	  	  Materialize.toast('Failure!', 2000);
  	  	}
  	  }
  	);
  }

  handleGoBack() {
  	browserHistory.push('/step1');
  }

  render() {    
  	return (
  	  <div>
  	    <h2>Step2</h2>
  	    <StepBox2 data={this.props.userSt.data.data} onHandleRequest={this.handleRequest} />
  	    <a onClick={this.handleGoBack}>Go back to the "Step1"</a>
  	  </div>
  	);
  }
}

const mapStateToProps = (state) => {
  return {    
  	userSt: state.user.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
	collectUserRequest: (username, age, dateOfBirth, gender) => {
	  return dispatch(collectUserRequest(username, age, dateOfBirth, gender));
	}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);