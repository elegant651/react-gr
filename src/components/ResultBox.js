import React from 'react';

class ResultBox extends React.Component {
  
  render() {
    return (
	  <div className="resultbox">
	    <div className="card">
	      <div className="card-content">
	        username: {this.props.data.username}
	      </div>
	      <div className="card-content">
	        Age: {this.props.data.age}
	      </div>
	      <div className="card-content">
          DateOfBirth: {this.props.data.dateOfBirth}
        </div>
        <div className="card-content">
          Gender: {this.props.data.gender}
        </div>
	    </div>
	  </div>
	  );
  }
}

ResultBox.propTypes = {
  data: React.PropTypes.object  
};

ResultBox.defaultProps = {
  data: {
    username: '',
    age: 0,
    dateOfBirth: '',
    gender: ''
  }
}

export default ResultBox;