import React from 'react';
import { connect } from 'react-redux';
import { StepBox } from 'components';
import { addUserData } from 'actions/user';
import { browserHistory } from 'react-router';

class Step1 extends React.Component {
  
  constructor(props) {
	super(props);

    this.handleNext = this.handleNext.bind(this);
  }
  
  handleNext(username, age) {   	
  	if(!username || !age){
  		alert("please write down on the field!");
  		return;
  	}

    return this.props.addUserData(username, age).then(
      () => {
      	if(this.props.userSt.status === "SUCCESS") {
      	  browserHistory.push('/step2');	
      	}
      }
    );  	
  }

  render() {
    return (
	  <div>
	    <h2>Step1</h2>
  	    <StepBox data={this.props.userSt.data} onHandleNext={this.handleNext} />
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
  	addUserData: (username, age) => {
  	  return dispatch(addUserData(username, age));
  	}	
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);