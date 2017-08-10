import React from 'react';
import { connect } from 'react-redux';
import { ResultBox } from 'components';

class Result extends React.Component {
  
  constructor(props) {
	super(props);
    
  }
  
  render() {
    return (
  	  <div>
  	    <h2>User:</h2>
    	    <ResultBox data={this.props.userSt.data.data} />
  	  </div>
  	);
  }

}

const mapStateToProps = (state) => {
  return {    
    userSt: state.user.user
  };
}

export default connect(mapStateToProps, null)(Result);