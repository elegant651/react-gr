import React from 'react';

class StepBox extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  username: '',
  	  age: 0
  	},

  	this.handleNext = this.handleNext.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
  }

  componentDidMount(){    
    if(this.props.data){
      this.setState({
        username: this.props.data.data.username,
        age: this.props.data.data.age
      });
    }    
  }

  handleChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  handleNext() {
  	const username = this.state.username;
  	const age = this.state.age;  	

  	this.props.onHandleNext(username, age);
  }

  render() {  	
    return (
	  <div className="stepbox">
	    <div className="card">
	      <div className="card-content">
	        <input type="text" className="materialize-textarea" placeholder="username"
	        	value={this.state.username} onChange={this.handleChangeUsername} />
	      </div>
	      <div className="card-content">
	        <input type="number" className="materialize-textarea" placeholder="age"
	        	value={this.state.age} onChange={this.handleChangeAge} />
	      </div>
	      <div className="card-action">
            <a onClick={this.handleNext}>Next</a>
          </div>
	    </div>
	  </div>
	);
  }
}

StepBox.propTypes = {
  data: React.PropTypes.object,
  onHandleNext: React.PropTypes.func
};

StepBox.defaultProps = {
  data: {
    username: '',
    age: 0
  },
  onHandleNext: () => { console.error('next func not defined')}
}

export default StepBox;