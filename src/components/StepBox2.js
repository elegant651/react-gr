import React from 'react';

class StepBox2 extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {      
  	  dateOfBirth: '',
  	  gender: ''
  	},

  	this.handleRequest = this.handleRequest.bind(this);
    this.handleChangeDateOfBirth = this.handleChangeDateOfBirth.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
  }  

  handleChangeDateOfBirth(e) {      
    this.setState({
      dateOfBirth: e.target.value
    });
  }

  handleChangeGender(e) {    
    this.setState({
      gender: e.target.value
    });
  }

  handleRequest() {
    const username = this.props.data.username;
    const age = this.props.data.age;
  	const dateOfBirth = this.state.dateOfBirth;
  	const gender = this.state.gender;    

    const regDate = /^[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{4}$/g;
    if(!regDate.test(dateOfBirth)){
      alert("check your dateOfBirth!!");
      return;
    }

    if(!dateOfBirth || !gender){
      alert("please write down on the field!");
      return;
    }

  	this.props.onHandleRequest(username, age, dateOfBirth, gender).then(
  	  () => {
  	  	this.setState({                    
  	  	  dateOfBirth: '',
  	  	  gender: ''
  	  	});        
  	  }
  	)
  }

  render() {  	
    return (
  	  <div className="stepbox">
  	    <div className="card">
  	      <div className="card-content">
  	        <input type="text" className="materialize-textarea" placeholder="dateOfBirth(eg: 01.11.1987)"
  	        	value={this.state.dateOfBirth} onChange={this.handleChangeDateOfBirth} /> 
  	      </div>
  	      <div className="card-content">            
            <div onChange={this.handleChangeGender}>
              <p>
                <input id="gender1" type="radio"  name="gender" 
          	      value="male" checked={this.state.gender==="male"} />
                <label htmlFor="gender1">Male</label>
              </p>

              <p>
                <input id="gender2" type="radio"  name="gender" 
                  value="female" checked={this.state.gender==="female"}/>
                <label htmlFor="gender2">Female</label>
              </p>
            </div>
  	      </div>
  	      <div className="card-action">
              <a onClick={this.handleRequest}>Submit</a>
            </div>
  	    </div>
  	  </div>
  	);
  }
}

StepBox2.propTypes = {
  data: React.PropTypes.object,
  onHandleRequest: React.PropTypes.func
};

StepBox2.defaultProps = {
  data: {
    username: '',
    age: 0
  },
  onHandleRequest: () => { console.error('request func not defined')}
}

export default StepBox2;